// src/controllers/testController.js

const { User, Test, Question, Option, Response } = require('../models/testConduction');
function generateRandomId() {
    // Generate a random number between 1000 and 9999 (inclusive)
    return Math.floor(1000 + Math.random() * 9000);
}
//creating an api to send the test id generated in create test to the frontend
// function testid (id){
//     const testId = id;
//     res.send(testId);

// }





// Create a new test
const createTest = async (req, res) => {
    console.log("Entered..")
    const userId = generateRandomId()
    const title = req.body.quizData.title 
    const description = req.body.quizData.description
    const question =  req.body.questionsData
    const options = req.body.optionData
    if (!userId || !title || !question) {
        return res.status(400).send('Missing required fields.');
    }

    try {
        const newTest = new Test({ title, description, createdBy: userId });
        
        await newTest.save();
        
        for (const questionData of question) {
            console.log(questionData) 
            console.log("Entering Bishh..")
            for(const option of options){
                console.log(option) 
                if(option.optionsId === questionData.questionId){
                    const newQuestion = new Question({
                        test: newTest._id,
                        questionId: questionData.questionId,
                        questionText: questionData.questionText,
                        correctOptionIndex: questionData.correctOptionIndex,
                        questionMarks: questionData.questionMarks ,
                    });
                    const newOption = new Option({ 
                        test: newTest._id,
                        question: newQuestion._id, 
                        options: option.optionTexts ,
                    });  
                    console.log(option.optionTexts)
                    console.log("Entered Bishh..")
                    await newQuestion.save();
                    await newOption.save();
                    console.log("Bishh..")                  
                }
            }
                // const newOption = new Option({ 
                //     question: newQuestion._id, 
                //     options: optionData.optionTexts ,
                // });
                // await newOption.save();
        }
        res.status(200)
    } catch (error) {
        res.status(500).send('Error creating test.');
    }
};

// Submit a test response
const submitResponse = async (req, res) => {
    const { userId, testId, answers } = req.body;
    if (!userId || !testId || !answers) {
        return res.status(400).send('Missing required fields.');
    }

    try {
        const newResponse = new Response({ test: testId, user: userId });

        for (const answerData of answers) {
            newResponse.answers.push({
                question: answerData.questionId,
                answerText: answerData.answerText || null,
                selectedOption: answerData.selectedOptionId || null
            });
        }

        await newResponse.save();
        res.status(201).send('Response submitted successfully.');
    } catch (error) {
        res.status(500).send('Error submitting response.');
    }
};

// Get all tests
const getAllTests = async (req, res) => {
    try {
        const tests = await Test.find().populate('createdBy', 'name email');
        res.status(200).json(tests);
    } catch (error) {
        res.status(500).send('Error fetching tests.');
    }
};

// Get test by ID
const getTestById = async (req, res) => {
    const { testId } = req.params;
    try {
        const test = await Test.findById(testId).populate('createdBy');
        if (!test) {
            return res.status(404).send('Test not found.');
        }
        const questions = await Question.find({ test: testId }).populate('options');
        res.status(200).json({ test, questions });
    } catch (error) {
        res.status(500).send('Error fetching test.');
    }
};

module.exports = {
    createTest,
    submitResponse,
    getAllTests,
    getTestById
};
