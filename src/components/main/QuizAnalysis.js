import React from 'react'
import '../../styles/QuizAnalysis.css'
const QuizAnalysis = ({quizData , questionsData , optionData}) => {
  function finalData(){
    console.log("question-data =" ,questionsData);
    console.log("option-data =" ,optionData);

  }
  return (
    <div class="quiz-analysis-container">
      <div class="quiz-analysis-header">
        <div class="quiz-analysis-header-text">
          Quiz-javascript
        </div>
      </div>
      <div class="num-question">
        <div class="question-numbers">
          <div class="question-num-heading">
            Questions :
          </div>
          <div class="question-num-data">
            <div class="question-num-text">Total Questions </div>
            <div class="question-num-value">10</div>
          </div>
        </div>
        <div class="section-numbers">
          <div class="section-num-heading">
            Sections :
          </div>
          <div class="section-num-data">
            <div class="section-num-text">Total Sections </div>
            <div class="section-num-value">10</div>
          </div>
        </div>
        <div class="section-names">
          <div class="section-name">
            <div class="section-name-heading">
              javascript :
            </div>
            <div class="section-name-data">              
              <div class="section-name-text">total questions </div>
              <div class="section-name-value">10</div>              
            </div>
          </div>
        </div>
        <div class="total-marks-data">
          <div class="total-marks-data-text">Total marks :</div>
          <div class="total-marks-data-value">100</div>
        </div>
      </div>     
      <div class="submit-btn-container">
        <button class="submit-btn" onClick={finalData}>submit</button>
      </div>     
    </div>
  )
}

export default QuizAnalysis
