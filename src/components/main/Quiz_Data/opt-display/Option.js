import React from 'react'
import SingleOption from './SingleOption.js'
import './Option.css'

const Option = ({option , index , questionId , deleteOption}) => {
  // optionsId : 1,
  //     optionTexts : ['language' , 'compiler' , 'software' , 'system'],
  //     correctOptionIndex : 0,
  return (
    <div>
      {(option.optionsId === questionId) ? option.optionTexts.map((singleOptionText , index) =>
        (<SingleOption singleOptionText = {singleOptionText} key = {index} index = {index} 
        questionId = {questionId} deleteOption={deleteOption}/>)) : ''}
    </div>  
  )
}

export default Option
