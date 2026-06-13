import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import earth from "../assets/games/planets/earth.jpg";
import mars from "../assets/games/planets/mars.jpg";
import jupiter from "../assets/games/planets/jupiter.jpg";
import saturn from "../assets/games/planets/saturn.jpg";
import neptune from "../assets/games/planets/neptune.jpg";

const questions = [
  {
    image: saturn,
    answer: "Saturn",
    options: ["Saturn", "Jupiter", "Mars", "Neptune"],
    fact:
      "Saturn is the least dense planet in the Solar System and could float in water.",
  },

  {
    image: jupiter,
    answer: "Jupiter",
    options: ["Mercury", "Jupiter", "Earth", "Venus"],
    fact:
      "Jupiter is so large that more than 1300 Earths could fit inside it.",
  },

  {
    image: mars,
    answer: "Mars",
    options: ["Mars", "Neptune", "Saturn", "Uranus"],
    fact:
      "Mars contains Olympus Mons, the tallest volcano in the Solar System.",
  },

  {
    image: neptune,
    answer: "Neptune",
    options: ["Earth", "Mars", "Jupiter", "Neptune"],
    fact:
      "Neptune has the fastest winds of any planet in our Solar System.",
  },

  {
    image: earth,
    answer: "Earth",
    options: ["Venus", "Earth", "Mercury", "Mars"],
    fact:
      "Earth is the only known world that currently supports life.",
  },
];

export default function GuessObject() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState("");

  const [gameFinished, setGameFinished] = useState(false);

  const handleAnswer = (selected: string) => {
    const current = questions[currentQuestion];

    if (selected === current.answer) {
      setScore(score + 1);

      setPopupText(
        `✅ Correct!\n\n${current.fact}`
      );
    } else {
      setPopupText(
        `❌ Incorrect!\n\nCorrect Answer: ${current.answer}\n\n${current.fact}`
      );
    }

    setShowPopup(true);
  };

  const nextQuestion = () => {
    setShowPopup(false);

    if (currentQuestion === questions.length - 1) {
      setGameFinished(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setGameFinished(false);
    setShowPopup(false);
  };

  const getRank = () => {
    if (score === 5) return "🏆 Planet Master";
    if (score >= 3) return "🥈 Junior Astronomer";
    return "🔭 Space Explorer";
  };

  if (gameFinished) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen bg-[#020817] text-white flex items-center justify-center px-6">

          <div className="bg-[#07172f] border border-blue-500 rounded-2xl p-10 max-w-xl w-full text-center">

            <h1 className="text-6xl mb-4">
              🎉
            </h1>

            <h2 className="text-4xl font-bold mb-4">
              Congratulations!
            </h2>

            <p className="text-gray-400 mb-4">
              Final Score
            </p>

            <p className="text-6xl font-bold text-blue-400 mb-8">
              {score}/{questions.length}
            </p>

            <p className="text-3xl mb-10">
              {getRank()}
            </p>

            <div className="flex flex-wrap justify-center gap-4">

              <button
                onClick={restartGame}
                className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-semibold"
              >
                Play Again
              </button>

              <Link
                to="/funzone"
                className="bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-xl font-semibold"
              >
                Back To Fun Zone
              </Link>

            </div>

          </div>

        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#020817] text-white pt-32 pb-20 px-6">

        <div className="max-w-5xl mx-auto">

          <h1 className="text-5xl font-bold text-center mb-3">
            Guess The Planet
          </h1>

          <p className="text-center text-gray-400 mb-10">
            Can you identify planets from their images?
          </p>

          <div className="flex justify-between mb-4">

            <span>
              Question {currentQuestion + 1} / {questions.length}
            </span>

            <span>
              Score: {score}
            </span>

          </div>

          <div className="w-full bg-slate-800 rounded-full h-3 mb-8">

            <div
              className="bg-blue-500 h-3 rounded-full transition-all duration-500"
              style={{
                width: `${
                  ((currentQuestion + 1) /
                    questions.length) *
                  100
                }%`,
              }}
            />

          </div>

          <div className="bg-[#07172f] border border-[#123a74] rounded-2xl p-8">

            <img
              src={questions[currentQuestion].image}
              alt="Planet"
              className="w-full h-[450px] object-cover rounded-xl mb-8"
            />

            <div className="grid md:grid-cols-2 gap-4">

              {questions[currentQuestion].options.map(
                (option) => (
                  <button
                    key={option}
                    onClick={() =>
                      handleAnswer(option)
                    }
                    className="bg-blue-500 hover:bg-blue-600 py-4 rounded-xl font-bold text-lg"
                  >
                    {option}
                  </button>
                )
              )}

            </div>

          </div>

        </div>

        {showPopup && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-6">

            <div className="bg-[#07172f] border border-blue-500 rounded-2xl p-8 max-w-lg w-full text-center">

              <p className="whitespace-pre-line text-lg mb-8">
                {popupText}
              </p>

              <button
                onClick={nextQuestion}
                className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-semibold"
              >
                Next Question
              </button>

            </div>

          </div>
        )}

      </div>
    </>
  );
}
