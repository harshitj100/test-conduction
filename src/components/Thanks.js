import React from 'react'
import { Link } from 'react-router-dom'
import './Thanks.css'
import SampleQuiz from './SampleQuiz'

const Thanks = ({questionsData , optionData , quizData}) => {
  return (
    <div className='thank-container'>
      <div className="after-msg-container">
        <div className="after-msg-text">
          Add any Message after the quiz for participants:
        </div>
        <div className="after-msg-input-container">
          <textarea type="text" className="after-msg-input"></textarea>
        </div>
        <div className='sample-quiz-container'>
          <div className="sample-quiz-text">
            Try your quiz ?
          </div>
          <Link to="/sample-quiz">
            <div className="sample-quiz">quiz</div>
          </Link>
        </div>
        <Link to="/">
          <button className="edit-quiz-btn">Edit Quiz</button> 
        </Link>
      </div>

      <SampleQuiz questionsData={questionsData} optionData={optionData}
              quizData={quizData}/>
      <div className='start-sam-quizbtn-container'>
        <Link to="/sample-quiz">
          <button className='start-sam-quizbtn'>Start quiz</button>
        </Link>
      </div>
    </div>
  )
}

export default Thanks
