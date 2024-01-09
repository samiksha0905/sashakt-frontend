import React, { useState } from 'react';
import "./QuizPage.css";
const QuizPage = () => {
  // eslint-disable-next-line
  const [questions, setQuestions] = useState([
    {
      question: 'About which right does the previous carousel show?',
      options: ['Speech', 'Play', 'Child Labour', 'Safety'],
      correctAnswer: 'Child Labour',
    },
    {
      question:'What is the primary reason behind child labor in many developing countries?',
      options: ['High wages for child workers', 'Lack of education opportunities', 'Abundance of adult labor', 'Excessive government regulations'],
      correctAnswer: 'Lack of education opportunities',
    },
    {
      question: ' What is the minimum age for employment according to the International Labour Organization (ILO) Convention No. 138?',
      options: ['12 years', '14 years', '16 years', '18 years'],
      correctAnswer: '18 years',
    },
    {
      question: 'How does child labor impact a child\'s education?',
      options: ['Hinders access to education', 'Has no impact on education', 'Enhances educational opportunities', 'Provides alternative learning experiences'],
      correctAnswer: 'Hinders access to education',
    },
    {
      question: 'Which international organization works to eliminate child labor and promote the rights of children globally?',
      options: ['United Nations Educational, Scientific and Cultural Organization (UNESCO)', 'World Health Organization (WHO)', 'International Monetary Fund (IMF)', 'International Labour Organization (ILO)'],
      correctAnswer: 'International Labour Organization (ILO)',
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (option) => {
    // Prevent selecting an option after the answer is revealed
    if (showScore) {
      return;
    }

    setSelectedAnswer(option);

    if (option === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null); // Reset selected answer for the next question
      } else {
        setShowScore(true);
      }
    }, 1000); // Delay to show color before moving to the next question
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
  };
  const buttonstyle={
    backgroundColor:"#fff",
    padding:"30px",
    overflow:"hidden",
    width:"220px",
    margin:"10px",
  };

  return (

    <div className="quiz-container1">
      <div className="heading-box text-center mb style={{ width: '100%' }}>">
        <h1>QUIZ</h1>
      </div>
      {showScore ? (
        <div className="score-section-box" >
          <div className="score-section">
            <h2>You scored {score} out of {questions.length}!</h2>
            <button onClick={handleRestartQuiz} style={buttonstyle}><h4>Restart Quiz</h4></button>
          </div>
        </div>
      ) : (
        <div className="question-section1">
          <h2 className="question-text">{questions[currentQuestion].question}</h2>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option, index) => (
              <button 
              key={index}
              onClick={() => handleAnswerClick(option)}
              className={`quiz-button ${
                selectedAnswer === option
                  ? option === questions[currentQuestion].correctAnswer
                    ? 'correct-answer'
                    : 'wrong-answer'
                  : ''
               }` }
              style={{
                backgroundColor:
                  selectedAnswer === option
                    ? option === questions[currentQuestion].correctAnswer
                      ? '#4caf50' // green for correct answer
                      : '#f44336' // red for wrong answer
                    : '#fff', // default background color
                color: '#000', // text color
                padding: '20px', // increased padding size
                margin: '10px', // margin size with top margin added
                width: '400px', // width
                height: '80px', // height
                cursor: 'pointer', // cursor style
              }}
            >
              {option}
            </button>
            
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage;