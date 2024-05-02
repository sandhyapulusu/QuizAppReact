import React, { useState } from 'react';

const Question = ({ question, handleAnswer }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isCorrect = selectedOption === question.correctAnswer;
    handleAnswer(isCorrect);
    setSelectedOption('');
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{question.question}</h5>
        <form onSubmit={handleSubmit}>
          {question.options.map((option, index) => (
            <div key={index} className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id={option}
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              <label className="form-check-label" htmlFor={option}>
                {option}
              </label>
            </div>
          ))}
          <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Question;