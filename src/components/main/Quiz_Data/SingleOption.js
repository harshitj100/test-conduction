import React from 'react'
import CrossBtn from './CrossBtn'
const SingleOption = ({singleOptionText , index}) => {
  return (
    <div className="option-text-container ">
      <div className="option-index-num">{index+1}</div>
      <input type="text" value={singleOptionText} placeholder="option-" className="option-text "/>
        
      <CrossBtn/>
    </div>
  )
}

export default SingleOption