import React from 'react'
import TitleComponent from './Quiz_Data/TitleComponent'
import Questions from './Quiz_Data/Questions'
import { useState } from 'react'

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
      questionId : 2,
      questionText : "what is React ?",
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
      ]},
    {
      questionId : 4,
      questionText : "what is node.js ?",
      questionMarks : quizData.defaultMarks,
      questionDesc : false,
      questiontype : 'mcq',
      correctOptionIndex : 0
    },
  ])
  let length = questionsData.length;
  return (
    <div className = "quiz-data-container">
      <TitleComponent quizData = {quizData} />
      {questionsData.map((question , index) => 
        (<Questions key = {question.questionId} question = {question} index = {index} length = {length}/>))}
      
    </div>
  )
}

export default QuizData
