import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Thanks from "./components/Thanks.js";
import Response from "./components/Response.js";
import './styles/App.css';
import { useState } from 'react';
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import StartQuiz from "./components/StartQuiz.js";

function App() {
  const quizData = {
    title : "javascript-question-test",
    description : "this is a test for javascript questons we will get into depth for evry concepts",
    defaultMarks : 4,
    };
  const [questionsData ,setQuestionsData] = useState([
    {
      questionId : 1,
      questionText : "what is javascript ?",
      questionMarks : quizData.defaultMarks,
      questionDesc : false,
      correctOptionIndex : "1"
    },{
      questionId : 2,
      questionText : "what is javascript ?",
      questionMarks : quizData.defaultMarks,
      questionDesc : false,
      correctOptionIndex : "1"
    }
    ])
  const [optionData , setOptionData] = useState([{
    optionsId : 1,
    optionTexts : ['a' , 'b' , 'c' , 'd'],
    correctOptionIndex : 0,
  },{
    optionsId : 2,
    optionTexts : ['a' , 'b' , 'c' , 'd'],
    correctOptionIndex : 0,
  }]);
  return (
    <Router>
      <Routes>
             
        <Route path="/" element = {
          <>
            <Header />
            <Main questionsData={questionsData} optionData={optionData}
              setQuestionsData = {setQuestionsData} setOptionData ={setOptionData}
              quizData = {quizData}/>
          </>}/>
        <Route path="/response" element ={
          <>
            <Header />
            <Response />
          </>}/>
        <Route path="/thank-you" element ={
            <Thanks questionsData={questionsData} optionData={optionData}
              quizData={quizData}/>
            }/>
        <Route path="/sample-quiz" element ={
            <StartQuiz questionsData={questionsData} optionData={optionData}
              quizData={quizData}/>
            }/>
      </Routes>
    </Router>
  );
}

export default App;
