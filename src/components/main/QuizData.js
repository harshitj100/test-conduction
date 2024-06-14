import React from 'react'
import TitleComponent from './Quiz_Data/TitleComponent'
import Questions from './Quiz_Data/Questions'
import { useState , useEffect } from 'react'

const QuizData = () => {
  const quizData = {
    title : "javascript-question-test",
    description : "this is a test for javascript questons we will get into depth for evry concepts",
    defaultMarks : 4,
  };
  const [questionsData ,setQuestionsData] = useState([
  {
    questionId : 1,
    questionText : "what is javascript ?",
    questionMarks : quizData.defaultMarks,
    questionDesc : false,
    questiontype : 'mcq',
    correctOptionIndex : 0
  },
  {
    questionId : 's',
    sectionName : "discuss some concept about react :-",
    sectionDesc : '',
    sectionQuestion : [
      {
        questionId : 3.1,
        questionText : "what is props ?",
        questionMarks : quizData.defaultMarks,
        questionDesc : false,
        questiontype : 'mcq',
        correctOptionIndex : 0
      },
      {
        questionId : 3.2,
        questionText : "what is children ?",
        questionMarks : quizData.defaultMarks,
        questionDesc : false,
        questiontype : 'mcq',
        correctOptionIndex : 0
      },
    ]}
  ])
  let length = questionsData.length;
  function addQuestion(){
    const length = questionsData.length
    const id = questionsData[length-1].questionId+1;
    let newQuestionsData = [...questionsData , {
      questionId : id,
      questionText : "",
      questionMarks : quizData.defaultMarks,
      questionDesc : false,
      questiontype : 'mcq',
      correctOptionIndex : 0
    }]
    setQuestionsData(newQuestionsData);
    console.log(questionsData , "hello" );
    return id;
  }
  function removeQuestion(id){
    const newQuestionsData = questionsData.filter((question) => {
      if (id !== question.questionId){
        return question;
      } 
    })
    setQuestionsData(newQuestionsData);
  }
  const [optionData , setOptionData] = useState([{
    optionsId : 1,
    optionTexts : ['language' , 'compiler' , 'software' , 'system'],
    correctOptionIndex : 0,
  },
  {
    optionsId : 2,
    optionTexts : ['library' , 'desktop' , 'framework' , 'system'],
    correctOptionIndex : 2,
  },
  {
    optionsId : 3.1,
    optionTexts : ['HTML-5 attributes' , 'class' , 'object of data' , 'function'],
    correctOption : 0,
  },
  {
    optionsId : 3.2,
    optionTexts : ['properties' , 'class' , 'component object' , 'function'],
    correctOption : 0,
  },
  {
    optionsId : 4,
    optionTexts : ['framwork' , 'runtime env' , 'IDE' , 'language'],
    correctOption : 0,
  }]);
  function addOption(id) {
    const newOptions = optionData.map((option) => {
      if (id === option.optionsId) {
        option.optionTexts.push('');
      }
      return option;
  });
  console.log(id , "id");
  setOptionData(newOptions);
  }
  function updateOptionData(id){
    const newOptionData = [...optionData , {
      optionsId : id,
      optionTexts : [''],
      correctOptionIndex : 0,
    }]
    setOptionData(newOptionData);
    console.log('new option data = ' , newOptionData);
    console.log('option data =' , optionData);
  }
  function deleteOption(removeIndex , id){
    const newOptions = optionData.map((option) => {
      if (id === option.optionsId) {
        option.optionTexts.splice(removeIndex , 1);
      }
      return option;
    });
    setOptionData(newOptions);
  }
  return (
    <div className = "quiz-data-container">
      <TitleComponent quizData = {quizData} />
      {questionsData.map((question , index) => 
        (<Questions key = {question.questionId} question = {question} 
        index = {index} length = {length} addQuestion={addQuestion} removeQuestion={removeQuestion} 
        optionData={optionData} addOption={addOption} 
        updateOptionData={updateOptionData} deleteOption={deleteOption}/>))}
    </div>
  )
}

export default QuizData
