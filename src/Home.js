import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="wrapper">
      <div className="row quiz-intro">
        <div className="col-4 quiz">
          <div className="quiz-label">
            <Link to="/">Quiz</Link>
          </div>
          <div className="start-btn">
            <a href="/select" className="btn">
              START
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
