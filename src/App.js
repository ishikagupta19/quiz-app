import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";
import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState("");
  const [score, setScore] = useState("");

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } =
      await axios.get(`https://opentdb.com/api.php?amount=10&category=18&type=multiple
    `);
    console.log(data);

    setQuestions(data.results);
  };

  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundImage: "url(./bg.jpg)" }}>
        <Header />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                name={name}
                setName={setName}
                fetchQuestions={fetchQuestions}
              />
            }
          />

          <Route
            path="/quiz"
            element={
              <Quiz
                name={name}
                questions={questions}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
              />
            }
          />

          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

// 
// https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple