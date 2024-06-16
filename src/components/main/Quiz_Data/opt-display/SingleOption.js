import React from 'react'
import CrossBtn from './CrossBtn'
import { useState } from 'react'

const SingleOption = ({singleOptionText , index , questionId , deleteOption}) => {
  const [optionText , setOptionText] = useState('')
  return (
    <div className="option-text-container ">
      <div className="option-index-num">{index+1}</div>
      <input 
        type="text" 
        value={optionText}
        placeholder="option-" 
        className="option-text "
        onChange={(e) => setOptionText(e.target.value)}
      />
        
      <CrossBtn index={index} id = {questionId} deleteOption={deleteOption} />
    </div>
  )
}

export default SingleOption
