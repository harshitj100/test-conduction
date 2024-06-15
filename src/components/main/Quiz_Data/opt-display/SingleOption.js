import React from 'react'
import CrossBtn from './CrossBtn'
const SingleOption = ({singleOptionText , index , questionId , deleteOption}) => {
  return (
    <div className="option-text-container ">
      <div className="option-index-num">{index+1}</div>
      <input type="text" placeholder="option-" className="option-text "/>
        
      <CrossBtn index={index} id = {questionId} deleteOption={deleteOption} />
    </div>
  )
}

export default SingleOption
