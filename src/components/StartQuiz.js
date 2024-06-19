import React from 'react'
import SampleQuiz from './SampleQuiz'

const StartQuiz = ({questionsData , optionData , quizData}) => {
  return (
    <SampleQuiz questionsData={questionsData} optionData={optionData}
      quizData={quizData}/>
  )
}

export default StartQuiz
