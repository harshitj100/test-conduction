import React from 'react'
import './SampleQuiz.js'

const SampleQuiz = ({questionsData , optionData , quizData}) => {
  return (
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
  )
}

export default SampleQuiz
