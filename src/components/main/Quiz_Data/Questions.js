import React from 'react';
import { useState } from 'react';
import Section from './Section.js';
import './Questions.css'
import Option from './opt-display/Option.js';
import AddOption from './opt-display/AddOption.js';
import AddQuestion from './AddQuestion.js';
import RemoveQuestion from './RemoveQuestion.js';

const Questions = ({question , index , length}) => {
  const isSection = typeof(question.questionId) === 'string' ? true : false ;
  let sectionLength = (isSection) ? question.sectionQuestion.length : 0;
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
        console.log(option.optionTexts);
      }
      return option;
    });
    setOptionData(newOptions);
  }
  
  return (
    <div className="question-container">
      {!isSection ? (
      <div className="question-text-container">
        <div className="question-index">{index+1}</div>
        <input type="text"  value = {question.questionText} 
          placeholder="Question . . ." className="question-text"/>
        <div className="other-info-container">
          <div className="marks-container">
            <div className="marks-text">marks : </div>
            <input type="number" value = {question.questionMarks} className ="marks-input"/>
          </div>
          <div className="correct-option-container">
            <div className="correct-option-text">correct-option : </div>
            <input type="number" value = {question.correctOptionIndex} className ="correct-option-input"/>
          </div>
        </div>
        <div className="option-text-container">
          {optionData.map((option , index) => (
            <Option key = {option.optionsId} option = {option} index = {index} questionId = {question.questionId}/>))}
        </div>
        <AddOption addOption = {addOption} questionId = {question.questionId} />
        {(length === index+1) ? <AddQuestion /> : <RemoveQuestion />}
      </div>) : 
      <div  className="section">
        <div className="section-container"> 
          <div  className="section-text-container">
            <input type="text" value={question.sectionName}  className="section-text"/>
          </div>
          <div  className="section-description-text-container">
            <input type="text" value ={question.sectionDesc} 
              placeholder="Add description ...(optional)"  className="section-description-text"/>
          </div>
        </div> 
        {question.sectionQuestion.map((subquestion , index) => 
        (<Section key = {subquestion.questionId} subquestion = {subquestion} 
            index = {index} optionData = {optionData} addOption ={addOption} length={sectionLength}/>))}
      </div>
    }
    </div>    
  )
}

export default Questions
