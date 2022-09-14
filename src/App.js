import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import { Link, Route, Routes } from "react-router-dom";
import { QuizProvider } from "./QuizContext";
import SelectCategory from "./SelectCategory";
import Quiz from "./Quiz";

function App() {
  return (
    <>
      <QuizProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/select" element={<SelectCategory />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
          {/*
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/success" element={<Success />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route> */}
        </Routes>
      </QuizProvider>
    </>
  );
}

export default App;
