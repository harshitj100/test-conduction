import React from "react";
import { Link } from "react-router-dom";
import "./Thanks.css";
import Result from "./Result";

const Thanks = ({ questionsData, optionData, quizData, showResult }) => {
  return (
    <div className="thank-container">
      <div className="after-msg-container">
        <div className="after-msg-text">Your Test is Ready !</div>
        <div className="after-msg-input-container">
          <input
            contentEditable="false"
            value={"localhost:3000/" + quizData.testId}
            type="text"
            className="after-msg-input"
          ></input>
        </div>
        <div className="sample-quiz-container">
          <div className="sample-quiz-text">Try your quiz ?</div>
          <Link to={"/" + quizData.testId}>
            <div className="sample-quiz">quiz</div>
          </Link>
        </div>
      </div>
      {/* <div className="start-sam-quizbtn-container">
        <Link to={"/" + quizData.testId}>
          <button className="start-sam-quizbtn">Open quiz</button>
        </Link>
      </div> */}
      {showResult && (
        <Result questionsData={questionsData} optionData={optionData} />
      )}
    </div>
  );
};

export default Thanks;
