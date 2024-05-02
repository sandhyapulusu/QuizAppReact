import React, { useState, useEffect } from 'react';
import './App.css';
import { questions } from './data'; 
import Question from './Question';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60); 

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        // End of quiz
        alert(`Time's up! Your score is ${score}/${questions.length}`);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, score]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // End of quiz
      alert(`Quiz ended! Your score is ${score}/${questions.length}`);
    }
  };

  return (
    <>
    
    <div className="container">
      <div className="quiz-container">
      <h1 style={{textAlign:"center"}}>QUIZ APP</h1>
        <p className="timer">Time Left: {timeLeft} seconds</p>
        <Question
          question={questions[currentQuestion]}
          handleAnswer={handleAnswer}
        />
      </div>
    </div>
    </>
  );
}

export default App;