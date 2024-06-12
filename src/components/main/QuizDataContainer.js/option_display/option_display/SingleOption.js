import React from 'react'

const SingleOption = ({singleOptionText , index}) => {
  return (
    <div className="option-text-container ">
      <div className="option-index">{index+1}</div>
      <input type="text" value={singleOptionText} placeholder="option-" className="option-text "/>
        
      <div className="option-delete-btn">
        delete
      </div>
    </div>
  )
}

export default SingleOption
