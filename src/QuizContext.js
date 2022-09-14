import { createContext, useState, useEffect, useDebugValue } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [result, setResult] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [selectedOption, setSelectedOption] = useState("");
  const [answers, setAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [time, setTime] = useState(120);
  const [timer, setTimer] = useState(0);

  const navigate = useNavigate();

  function handleQuestionSubmit(event) {
    event.preventDefault();
    console.log(event.target);

    debugger;

    if (!selectedOption) {
      console.log("No option selected");
      return;
    }

    if (currentQuestion.answer === selectedOption) {
      //
    }

    // setAnswers([
    //   ...answers,
    //   { id: currentQuestion.id, answer: selectedOption },
    // ]);

    answers[currentQuestion.id] = selectedOption;

    setAnswers({ ...answers });

    setCurrentQuestionId(currentQuestionId + 1);
    setSelectedOption("");
  }

  function handleSelectSubmit(event) {
    event.preventDefault();
    console.log(event);

    if (!selectedCategory) {
      alert("Select category");
      return;
    }

    navigate("/quiz");
  }

  return (
    <QuizContext.Provider
      value={{
        query,
        setQuery,
        result,
        setResult,
        isLoading,
        setIsLoading,
        error,
        setError,
        selectedCategory,
        setSelectedCategory,
        handleSelectSubmit,
        currentQuestion,
        setCurrentQuestion,
        currentQuestionId,
        setCurrentQuestionId,
        handleQuestionSubmit,
        selectedOption,
        setSelectedOption,
        quizCompleted,
        setQuizCompleted,
        answers,
        setAnswers,
        time,
        setTime,
        timer,
        setTimer,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export default QuizContext;
