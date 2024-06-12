import React from 'react'
import './TitleComponent.css'
const TitleComponent = ({quizData}) => {
  return (
    <div  className="title-container"> 
      <div  className="title-text-container">
        <input type="text" value={quizData.title} placeholder="Add Title -" className="title-text"/>
      </div>
      <div  className="title-description-text-container">
        <input type="text" value={quizData.description} placeholder="Add description ..."  className="title-description-text"/>
      </div>
      <div  className="default-marks-text-container">
        <div className="title-default-marks-text">Default Marks = </div>
        <input type="number" value={quizData.defaultMarks}  className="title-default-marks"/>
      </div>      
    </div>
  );
}

export default TitleComponent

