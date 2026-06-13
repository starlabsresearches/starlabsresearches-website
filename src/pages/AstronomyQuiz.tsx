import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const questions = [
  {
    question:
      "Which mission discovered thousands of exoplanets using the transit method?",
    answer: "Kepler",
    options: ["Apollo", "Voyager", "Kepler", "Pioneer"],
    fact:
      "Kepler discovered more than 2,600 confirmed exoplanets.",
  },

  {
    question: "What is the closest star to Earth?",
    answer: "The Sun",
    options: [
      "Sirius",
      "Betelgeuse",
      "The Sun",
      "Proxima Centauri",
    ],
    fact:
      "The Sun is approximately 150 million km away from Earth.",
  },

  {
    question:
      "Which telescope was launched in 2021?",
    answer: "James Webb Space Telescope",
    options: [
      "Hubble",
      "James Webb Space Telescope",
      "Kepler",
      "Chandra",
    ],
    fact:
      "JWST is optimized for infrared astronomy.",
  },

  {
    question:
      "What is a light year?",
    answer: "A unit of distance",
    options: [
      "A unit of brightness",
      "A unit of mass",
      "A unit of distance",
      "A unit of time",
    ],
    fact:
      "A light year is the distance light travels in one year.",
  },

  {
    question:
      "What causes a solar eclipse?",
    answer: "Moon blocks the Sun",
    options: [
      "Moon blocks the Sun",
      "Earth blocks the Sun",
      "Mars blocks the Sun",
      "Venus blocks the Sun",
    ],
    fact:
      "A solar eclipse happens when the Moon passes between Earth and the Sun.",
  },

  {
    question:
      "Which planet has the largest ring system?",
    answer: "Saturn",
    options: [
      "Jupiter",
      "Saturn",
      "Uranus",
      "Neptune",
    ],
    fact:
      "Saturn's rings span hundreds of thousands of kilometers.",
  },

  {
    question:
      "What is Sagittarius A*?",
    answer: "Supermassive Black Hole",
    options: [
      "Galaxy",
      "Supermassive Black Hole",
      "Exoplanet",
      "Neutron Star",
    ],
    fact:
      "Sagittarius A* lies at the center of the Milky Way.",
  },

  {
    question:
      "Which mission currently surveys most of the sky for exoplanets?",
    answer: "TESS",
    options: [
      "Apollo",
      "TESS",
      "Galileo",
      "Voyager",
    ],
    fact:
      "TESS continues discovering thousands of exoplanet candidates.",
  },

  {
    question:
      "What is the name of our galaxy?",
    answer: "Milky Way",
    options: [
      "Andromeda",
      "Triangulum",
      "Milky Way",
      "Whirlpool",
    ],
    fact:
      "The Milky Way contains hundreds of billions of stars.",
  },

  {
    question:
      "Which planet is known as the Red Planet?",
    answer: "Mars",
    options: [
      "Mercury",
      "Mars",
      "Venus",
      "Jupiter",
    ],
    fact:
      "Mars appears red because of iron oxide on its surface.",
  },
];

export default function AstronomyQuiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const [popup, setPopup] = useState(false);
  const [popupText, setPopupText] = useState("");

  const [finished, setFinished] = useState(false);

  const shuffleArray = (array: string[]) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const handleAnswer = (choice: string) => {
    const q = questions[current];

    if (choice === q.answer) {
      setScore((prev) => prev + 1);

      setPopupText(
        `✅ Correct!\n\n${q.fact}`
      );
    } else {
      setPopupText(
        `❌ Incorrect!\n\nCorrect Answer: ${q.answer}\n\n${q.fact}`
      );
    }

    setPopup(true);
  };

  const nextQuestion = () => {
    setPopup(false);

    if (current === questions.length - 1) {
      setFinished(true);
    } else {
      setCurrent((prev) => prev + 1);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setFinished(false);
    setPopup(false);
  };

  const getRank = () => {
    if (score === 10)
      return "🏆 Astronomy Legend";

    if (score >= 8)
      return "🌟 Stellar Scholar";

    if (score >= 5)
      return "🔭 Junior Astronomer";

    return "🚀 Space Explorer";
  };

  if (finished) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen bg-[#020817] text-white flex justify-center items-center px-6">

          <div className="bg-[#07172f] border border-blue-500 rounded-2xl p-10 text-center max-w-xl w-full">

            <h1 className="text-6xl mb-4">
              🎉
            </h1>

            <h2 className="text-4xl font-bold mb-4">
              Quiz Complete!
            </h2>

            <p className="text-6xl text-blue-400 mb-6">
              {score}/10
            </p>

            <p className="text-3xl mb-8">
              {getRank()}
            </p>

            <div className="flex flex-wrap justify-center gap-4">

              <button
                onClick={restartQuiz}
                className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-xl font-semibold"
              >
                Play Again
              </button>

              <Link
                to="/funzone"
                className="bg-slate-700 hover:bg-slate-600 px-8 py-3 rounded-xl font-semibold"
              >
                Back To Fun Zone
              </Link>

            </div>

          </div>

        </div>
      </>
    );
  }

  const shuffledOptions = shuffleArray(
    questions[current].options
  );

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#020817] text-white pt-32 px-6 pb-20">

        <div className="max-w-4xl mx-auto">

          <div className="mb-6">
            <Link
              to="/funzone"
              className="text-blue-400 hover:text-blue-300"
            >
              ← Back To Fun Zone
            </Link>
          </div>

          <h1 className="text-5xl font-bold text-center mb-4">
            Astronomy Quiz Challenge
          </h1>

          <p className="text-center text-gray-400 mb-10">
            Test your astronomy knowledge.
          </p>

          <div className="flex justify-between mb-4">
            <span>
              Question {current + 1}/10
            </span>

            <span>
              Score: {score}
            </span>
          </div>

          <div className="w-full bg-slate-800 rounded-full h-3 mb-8">

            <div
              className="bg-blue-500 h-3 rounded-full transition-all duration-500"
              style={{
                width: `${((current + 1) / 10) * 100}%`,
              }}
            />

          </div>

          <div className="bg-[#07172f] border border-[#123a74] rounded-2xl p-10">

            <h2 className="text-3xl font-bold mb-8">
              {questions[current].question}
            </h2>

            <div className="grid md:grid-cols-2 gap-4">

              {shuffledOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className="bg-blue-500 hover:bg-blue-600 py-4 rounded-xl text-lg font-bold"
                >
                  {option}
                </button>
              ))}

            </div>

          </div>

        </div>

        {popup && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center px-6">

            <div className="bg-[#07172f] border border-blue-500 rounded-2xl p-8 max-w-lg w-full text-center">

              <p className="whitespace-pre-line text-lg mb-6">
                {popupText}
              </p>

              <button
                onClick={nextQuestion}
                className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl"
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
