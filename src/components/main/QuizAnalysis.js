import React from 'react'
import { Link } from 'react-router-dom';
import '../../styles/QuizAnalysis.css'
const QuizAnalysis = ({quizData , questionsData , optionData , setQuizData , quizTimer}) => {
  function finalDate(value){
    let [hours , minutes , seconds] = value.split(':');
    hours = Number(hours);
    hours *= 3600;
    minutes = Number(minutes);
    minutes *= 60;
    seconds = Number(seconds);
    let newQuizTimer =  {
      hours,
      minutes,
      seconds,
      totalTime : hours+minutes+seconds
    }
    setQuizTimer(newQuizTimer);
  }
  return (
    <div className="quiz-analysis">
      <div className="quiz-analysis-container">
        <div className="quiz-analysis-header">
          <div className="quiz-analysis-header-text">
            Quiz-javascript
          </div>
        </div>
        <div className="num-question">
          <div className="question-numbers">
            <div className="question-num-heading">
              Questions :
            </div>
            <div className="question-num-data">
              <div className="question-num-text">Total Questions </div>
              <div className="question-num-value">10</div>
            </div>
          </div>
          <div className="section-numbers">
            <div className="section-num-heading">
              Sections :
            </div>
            <div className="section-num-data">
              <div className="section-num-text">Total Sections </div>
              <div className="section-num-value">10</div>
            </div>
          </div>
          <div className="section-names">
            <div className="section-name">
              <div className="section-name-heading">
                javascript :
              </div>
              <div className="section-name-data">              
                <div className="section-name-text">total questions </div>
                <div className="section-name-value">10</div>              
              </div>
            </div>
          </div>
          <div className="total-marks-data">
            <div className="total-marks-data-text">Total marks :</div>
            <div className="total-marks-data-value">100</div>
          </div>
        </div>     
        <div className="submit-btn-container">
          <Link to="/thank-you">
            <button className="submit-btn">submit</button>
          </Link>
        </div>     
      </div>
      <div className="quiz-timer">
        <div className="add-timer-container">
          <div className = "add-timer-container-text">Add Timer</div>
          <div className='add-timer-container-input'>
            <input type = 'time' step="1" onChange={(e) => finalDate(e.target.value)}/>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default QuizAnalysis
