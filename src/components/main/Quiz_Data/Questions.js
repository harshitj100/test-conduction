import React from 'react';
import { useState } from 'react';
import Section from './Section.js';
import './Questions.css'
import Option from './opt-display/Option.js';
import AddOption from './opt-display/AddOption.js';
import AddQuestion from './AddQuestion.js';
import RemoveQuestion from './RemoveQuestion.js';

const Questions = ({question , index , length , addQuestion , removeQuestion ,
   optionData , addOption , updateOptionData , deleteOption}) => {

  const isSection = typeof(question.questionId) === 'string' ? true : false ;
  let sectionLength = (isSection) ? question.sectionQuestion.length : 0;
  return (
    <div className="question-container">
      {!isSection ? (
      <div className="question-text-container">
        <div className="question-index">{index+1}</div>
        <input type="text" placeholder="Question . . ." className="question-text"/>
        <div className="other-info-container">
          <div className="marks-container">
            <div className="marks-text">marks : </div>
            <input type="number" placeholder = '' className ="marks-input"/>
          </div>
          <div className="correct-option-container">
            <div className="correct-option-text">correct-option : </div>
            <input type="number" placeholder = '' className ="correct-option-input"/>
          </div>
        </div>
        <div className="option-text-container">
          {optionData.map((option , index) => (
            <Option key = {option.optionsId} option = {option} index = {index}
             questionId = {question.questionId} deleteOption={deleteOption}/>))}
        </div>
        <AddOption addOption = {addOption} questionId = {question.questionId} />
        {(length === index+1) ? 
        <AddQuestion addQuestion={addQuestion} updateOptionData={updateOptionData} questionId = {question.questionId} />
         : <RemoveQuestion removeQuestion = {removeQuestion} questionId = {question.questionId}/>}
      </div>)       
      : 
      <div  className="section">
        <div className="section-container"> 
          <div  className="section-text-container">
            <input type="text" placeholder='Add Section -'  className="section-text"/>
          </div>
          <div  className="section-description-text-container">
            <input type="text" placeholder="Add description ...(optional)"  className="section-description-text"/>
          </div>
        </div> 
        {question.sectionQuestion.map((subquestion , index) => 
        (<Section key = {subquestion.questionId} subquestion = {subquestion} 
            index = {index} optionData = {optionData} addOption ={addOption} 
            length={sectionLength} deleteOption={deleteOption} addQuestion={addQuestion}/>))}
      </div>
    }
    </div>    
  )
}

export default Questions
