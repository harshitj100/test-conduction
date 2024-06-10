import React from 'react'

const Section = ({subquestion , index}) => {
  // questionId : 3.1,
  //         questionText : "what is props ?",
  //         questionMarks : quizData.defaultMarks,
  //         questionDesc : false,
  //         questiontype : 'mcq',
  //         correctOptionIndex : 0
  return (
    <div >
      <div className="question-text-container">
        <div className="question-index">{index+1}</div>
        <input type="text"  value = {subquestion.questionText} 
          placeholder="Question . . ." className="question-text"/>
        <div className="other-info-container">
          <div className="marks-container">
            <div className="marks-text">marks : </div>
            <input type="number" value = {subquestion.questionMarks} className ="marks-input"/>
          </div>
          <div className="correct-option-container">
            <div className="correct-option-text">correct-option : </div>
            <input type="number" value = {subquestion.correctOptionIndex} className ="correct-option-input"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section