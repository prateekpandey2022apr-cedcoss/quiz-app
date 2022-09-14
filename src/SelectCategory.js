import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import QuizContext from "./QuizContext";

function SelectCategory() {
  const {
    selectedCategory,
    setSelectedCategory,
    handleSelectSubmit,
    answers,
    setAnswers,
  } = useContext(QuizContext);

  useEffect(() => {
    setAnswers([]);
  }, []);

  return (
    <div className="wrapper">
      <div className="row quiz-intro">
        <div className="col-4 quiz">
          <div className="quiz-label">
            <Link to="/">Quiz</Link>
          </div>
          <div className="btn">
            <form onSubmit={handleSelectSubmit}>
              <select
                value={selectedCategory}
                onChange={(event) => {
                  setSelectedCategory(event.target.value);
                }}
              >
                <option value="">Select Category</option>
                <option value="travel">Travel</option>
                <option value="space">Space</option>
              </select>
              <button className="btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectCategory;
