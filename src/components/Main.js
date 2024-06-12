import React from 'react'
import QuizData from './main/QuizData';
import QuizAnalysis from './main/QuizAnalysis';

const Main = () => {
  return (
    <div className="main-body-container">
      <QuizData />
      <QuizAnalysis />
    </div>
  )
}

export default Main
