import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { category, questions } from "./data";
import QuizContext from "./QuizContext";

function Quiz() {
  const {
    selectedCategory,
    setSelectedCategory,
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
  } = useContext(QuizContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!timer) {
      setTimer(
        setInterval(() => {
          console.log("Started...................");
          setTime((time) => time - 1);
          console.log("running ");
        }, 1000)
      );
    }
    return () => {
      clearInterval(timer);
      console.log("Cleared from useEffect....................");
    };
  }, []);

  useEffect(() => {
    // debugger;

    const ques =
      questions.find(
        (question) =>
          question.category === selectedCategory &&
          question.id === currentQuestionId
      ) ?? {};
    setCurrentQuestion(ques);

    if (currentQuestionId === 5) {
      setQuizCompleted(true);
      clearInterval(timer);
      setTimer((prev) => 0);
      // setTime(0);
      console.log("@@@@@@@@");
      console.log("Cleared from currentQues....................");
    }
  }, [currentQuestionId]);

  // useEffect(() => {
  //   if (quizCompleted) {
  //     clearInterval(timer);
  //     setTimer((prev) => 0);
  //     setTime(0);
  //     console.log("timer cleared");
  //   }
  // }, [quizCompleted]);

  useEffect(() => {
    if (time === 0) {
      setTime(0);
      setQuizCompleted(true);
      clearInterval(timer);
      alert("Quiz has been Timed Out. Redirecting you to home.");
      navigate("/");
    }
  }, [time]);

  return (
    <div className="wrapper">
      <div className="row quiz-intro">
        <div className="col-4 quiz">
          <div className="quiz-question">
            {!quizCompleted && <p>{time} secs</p>}

            {Object.keys(currentQuestion).length > 0 ? (
              <>
                <div className="quiz-status">
                  Question {currentQuestionId} of 4
                </div>
                <h2>{currentQuestion.question}</h2>
                <form onSubmit={handleQuestionSubmit}>
                  {currentQuestion?.options.map((option, idx) => {
                    return (
                      <label key={idx}>
                        <input
                          type="radio"
                          name="dd"
                          value={option}
                          checked={selectedOption === option}
                          onChange={(event) =>
                            setSelectedOption(event.target.value)
                          }
                        />{" "}
                        {option}
                      </label>
                    );
                  })}
                  <button className="btn">Submit</button>
                </form>
              </>
            ) : (
              <>
                <p>
                  Quiz completed in {120 - time} secs. &nbsp;
                  <Link
                    to="/select"
                    onClick={(event) => {
                      setCurrentQuestionId(1);
                      setSelectedCategory("");
                      quizCompleted(true);
                      setTime(120);
                    }}
                  >
                    Take a quiz again.
                  </Link>
                </p>
                {questions
                  .filter((question) => question.category === selectedCategory)
                  .map((question, index) => {
                    return (
                      <div className="quiz-result" key={index}>
                        <h3>{question.question}</h3>
                        <ul className="quiz-options">
                          {
                            <div key={index}>
                              {question.options.map((option, idx) => {
                                // debugger;
                                return (
                                  <>
                                    <li key={idx}>
                                      {option}{" "}
                                      {question.answer === option && (
                                        <i
                                          className="fa-solid fa-circle-check"
                                          style={{ color: "green" }}
                                        ></i>
                                      )}
                                      {/* {option === answers[question.id] && (
                                        <i
                                          class="fa-solid fa-circle-check"
                                          style={{ color: "red" }}
                                        ></i>
                                      )} */}
                                    </li>
                                  </>
                                );
                              })}
                            </div>
                          }
                        </ul>

                        {question.answer === answers[question.id] ? (
                          <p>
                            You got this one correct{" "}
                            <i
                              className="fa-solid fa-circle-check"
                              style={{ color: "green" }}
                            ></i>
                          </p>
                        ) : (
                          <p>
                            You got this wrong{" "}
                            <i
                              className="fa-solid fa-circle-xmark"
                              style={{ color: "red" }}
                            ></i>
                          </p>
                        )}
                      </div>
                    );
                  })}
              </>
            )}
          </div>
          <div className="start-btn"></div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
