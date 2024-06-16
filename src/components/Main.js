import React from 'react'
import QuizData from './main/QuizData';
import QuizAnalysis from './main/QuizAnalysis';
import { useState } from 'react';

const Main = () => {
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
      correctOptionIndex : "1"
    }
    ])
  const [optionData , setOptionData] = useState([{
    optionsId : 1,
    optionTexts : [''],
    correctOptionIndex : 0,
  }]);

  function addQuestion(){
    const length = questionsData.length
    const id = questionsData[length-1].questionId+1;
    let newQuestionsData = [...questionsData , {
      questionId : id,
      questionText : "",
      questionMarks : quizData.defaultMarks,
      questionDesc : false,
      correctOptionIndex : 1
    }]
    setQuestionsData(newQuestionsData);
    return id;
  }
  function updateOptionData(id){
    const newOptionData = [...optionData , {
      optionsId : id,
      optionTexts : [''],
      correctOptionIndex : 0,
    }]
    setOptionData(newOptionData);
  }
  function removeQuestion(id){
    const newQuestionsData = questionsData.filter((question) => {
      if (id !== question.questionId){
        return question;
      } 
    })
    setQuestionsData(newQuestionsData);
  }
  
  
  function addOption(id) {
    const newOptions = optionData.map((option) => {
      if (id === option.optionsId) {
        option.optionTexts.push('');
      }
      return option;
    });
    setOptionData(newOptions);
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
    <div className="main-body-container">
      <QuizData quizData={quizData} questionsData={questionsData} 
      optionData={optionData} addQuestion={addQuestion} 
      updateOptionData={updateOptionData} removeQuestion={removeQuestion}
      addOption={addOption} deleteOption={deleteOption}
      setOptionData={setOptionData} setQuestionsData={setQuestionsData}/>

      <QuizAnalysis quizData={quizData} questionsData={questionsData} 
      optionData={optionData}/>
    </div>
  )
}

export default Main
