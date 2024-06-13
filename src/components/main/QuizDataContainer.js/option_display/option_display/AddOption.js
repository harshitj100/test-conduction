import React from 'react'
import addbtn from './addbtn.png'
const AddOption = ({addOption , questionId}) => {
  const id = questionId;
  return (
    <div className="option-add-btn" onClick={() => addOption({id})}>    
      <div className="option-add-btn-text">  
        Add-other-option...       
      </div>
      <div className="option-add-btn-image">
        <img src={addbtn} className="add-btn-image"/>
      </div>
    </div>
  )
}

export default AddOption
