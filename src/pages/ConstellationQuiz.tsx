import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const questions = [
  {
    question: "Which constellation is known as The Hunter?",
    answer: "Orion",
    options: [
      "Orion",
      "Cygnus",
      "Cassiopeia",
      "Ursa Major",
    ],
    fact:
      "Orion contains Betelgeuse and Rigel, two of the brightest stars in the night sky.",
  },

  {
    question:
      "Which constellation contains the famous Big Dipper asterism?",
    answer: "Ursa Major",
    options: [
      "Ursa Major",
      "Draco",
      "Lyra",
      "Pegasus",
    ],
    fact:
      "The Big Dipper is part of the larger constellation Ursa Major.",
  },

  {
    question:
      "Which constellation has a distinctive W shape?",
    answer: "Cassiopeia",
    options: [
      "Cassiopeia",
      "Orion",
      "Scorpius",
      "Leo",
    ],
    fact:
      "Cassiopeia is easily recognized by its bright W-shaped pattern.",
  },

  {
    question:
      "Which constellation contains the bright star Polaris?",
    answer: "Ursa Minor",
    options: [
      "Ursa Minor",
      "Cygnus",
      "Draco",
      "Aquarius",
    ],
    fact:
      "Polaris, the North Star, sits near the end of the Little Dipper.",
  },

  {
    question:
      "Which constellation is often called The Swan?",
    answer: "Cygnus",
    options: [
      "Cygnus",
      "Lyra",
      "Draco",
      "Pegasus",
    ],
    fact:
      "Cygnus lies along the Milky Way and contains the bright star Deneb.",
  },
];

export default function ConstellationQuiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState("");

  const [finished, setFinished] = useState(false);

  const handleAnswer = (choice: string) => {
    const q = questions[current];

    if (choice === q.answer) {
      setScore(score + 1);

      setPopupText(
        `✅ Correct!\n\n${q.fact}`
      );
    } else {
      setPopupText(
        `❌ Incorrect!\n\nCorrect Answer: ${q.answer}\n\n${q.fact}`
      );
    }

    setShowPopup(true);
  };

  const nextQuestion = () => {
    setShowPopup(false);

    if (current === questions.length - 1) {
      setFinished(true);
    } else {
      setCurrent(current + 1);
    }
  };

  const restartGame = () => {
    setCurrent(0);
    setScore(0);
    setFinished(false);
  };

  const getRank = () => {
    if (score === 5) return "🌟 Constellation Master";
    if (score >= 3) return "⭐ Junior Stargazer";
    return "🔭 Night Sky Explorer";
  };

  if (finished) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen bg-[#020817] text-white flex justify-center items-center">

          <div className="bg-[#07172f] border border-blue-500 rounded-2xl p-10 text-center max-w-xl">

            <h1 className="text-6xl mb-4">
              🎉
            </h1>

            <h2 className="text-4xl font-bold mb-4">
              Quiz Complete!
            </h2>

            <p className="text-5xl text-blue-400 mb-6">
              {score}/{questions.length}
            </p>

            <p className="text-3xl mb-8">
              {getRank()}
            </p>

            <div className="flex justify-center gap-4">

              <button
                onClick={restartGame}
                className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl"
              >
                Play Again
              </button>

              <Link
                to="/funzone"
                className="bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-xl"
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

      <div className="min-h-screen bg-[#020817] text-white pt-32 px-6">

        <div className="max-w-4xl mx-auto">

          <h1 className="text-5xl font-bold text-center mb-4">
            Constellation Quiz
          </h1>

          <p className="text-center text-gray-400 mb-10">
            Test your knowledge of the night sky.
          </p>

          <div className="flex justify-between mb-4">

            <span>
              Question {current + 1} / {questions.length}
            </span>

            <span>
              Score: {score}
            </span>

          </div>

          <div className="bg-[#07172f] border border-[#123a74] rounded-2xl p-10">

            <h2 className="text-3xl font-bold mb-8">
              {questions[current].question}
            </h2>

            <div className="grid md:grid-cols-2 gap-4">

              {questions[current].options.map(
                (option) => (
                  <button
                    key={option}
                    onClick={() =>
                      handleAnswer(option)
                    }
                    className="bg-blue-500 hover:bg-blue-600 py-4 rounded-xl text-lg font-bold"
                  >
                    {option}
                  </button>
                )
              )}

            </div>

          </div>

        </div>

        {showPopup && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center">

            <div className="bg-[#07172f] border border-blue-500 rounded-2xl p-8 max-w-lg text-center">

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
