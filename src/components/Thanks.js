import React from 'react'
import { Link } from 'react-router-dom'
import './Thanks.css'


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

      <div className='sample-quiz-container-rm'>
        <div className='sam-title-container'>{quizData.title}</div>
        {questionsData.map((question , index) => {
          return(
            <div className="sam-question-container">
              <div className="sam-question-text-container">
                <div className="sam-question-text-index">
                  {index+1}
                </div>
                <div className="sam-question-text">                
                  {question.questionText}
                </div>
              </div>
              <div className = "sam-options-container">
                {optionData.map((options) => {
                  return (options.optionTexts.map((singleOption) => {
                    if (question.questionId === options.optionsId){
                      return (
                        <div className = "sam-single-option-container">                          
                          <label htmlFor= {options.optionsId}>{singleOption}</label>
                          <input type='radio' name={options.optionsId} />
                        </div>
                      )
                    }
                    return ''
                  }))
                })}
              </div>
            </div>
          )
        })}
      </div>
      <div className='start-sam-quizbtn-container'>
        <Link to="/sample-quiz">
          <button className='start-sam-quizbtn'>Start quiz</button>
        </Link>
      </div>
    </div>
  )
}

export default Thanks
