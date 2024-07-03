// src/controllers/testController.js

const {
  User,
  Test,
  Question,
  Option,
  Response,
} = require("../models/testConduction");
function generateRandomId() {
  // Generate a random number between 1000 and 9999 (inclusive)
  return Math.floor(1000 + Math.random() * 9000);
}

// Create a new test
const createTest = async (req, res) => {
  console.log("Entered..");
  const userId = generateRandomId();
  const title = req.body.quizData.title;
  const description = req.body.quizData.description;
  const question = req.body.questionsData;
  const options = req.body.optionData;
  const testId = req.body.quizData.testId;
  console.log(userId, testId, question, options);
  if (!userId || !title || !question) {
    return res.status(400).send("Missing required fields.");
  }

  try {
    const newTest = new Test({ testId, title, description, createdBy: userId });

    await newTest.save();

    for (const questionData of question) {
      console.log(questionData);
      console.log("Entering Bishh..");
      for (const option of options) {
        console.log(option);
        if (option.optionsId === questionData.questionId) {
          const newQuestion = new Question({
            testId: testId,
            questionId: questionData.questionId,
            questionText: questionData.questionText,
            questionMarks: questionData.questionMarks,
            correctOptionIndex: questionData.correctOptionIndex,
          });
          const newOption = new Option({
            testId: testId,
            optionId: questionData.questionId,
            options: option.optionTexts,
          });
          console.log(option.optionTexts);
          await newQuestion.save();
          console.log("Entered Bishh..");
          await newOption.save();
          console.log("Bishh..");
        }
      }
    }
    res.status(200);
  } catch (error) {
    res.status(500).send("Error creating test.");
  }
};

// Submit a test response
const submitResponse = async (req, res) => {
  const { userId, testId, answers } = req.body;
  if (!userId || !testId || !answers) {
    return res.status(400).send("Missing required fields.");
  }

  try {
    const newResponse = new Response({ test: testId, user: userId });

    for (const answerData of answers) {
      newResponse.answers.push({
        question: answerData.questionId,
        answerText: answerData.answerText || null,
        selectedOption: answerData.selectedOptionId || null,
      });
    }

    await newResponse.save();
    res.status(201).send("Response submitted successfully.");
  } catch (error) {
    res.status(500).send("Error submitting response.");
  }
};

// Get all tests
const getAllTests = async (req, res) => {
  try {
    const tests = await Test.find().populate("createdBy", "name email");
    res.status(200).json(tests);
  } catch (error) {
    res.status(500).send("Error fetching tests.");
  }
};

// Get test by ID
const getTestById = async (req, res) => {
  const testId = req.params.testId;
  console.log(testId);
  try {
    const test = await Test.findById(testId).populate("createdBy");
    if (!test) {
      return res.status(404).send("Test not found.");
    }
    const questions = await Question.find({ testId: testId }).populate(
      "questionText",
      "questionMarks",
      "correctOptionIndex"
    );
    console.log(questions, test);
    res.status(200).json({ test, questions });
  } catch (error) {
    res.status(500).send("Error fetching test.");
  }
};

module.exports = {
  createTest,
  submitResponse,
  getAllTests,
  getTestById,
};
