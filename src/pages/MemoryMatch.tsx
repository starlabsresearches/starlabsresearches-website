import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const planetCards = [
  "🌍",
  "🪐",
  "🔴",
  "🟦",
  "🟣",
  "☀️",
  "🌕",
  "⭐",
];

export default function MemoryMatch() {
  const [cards, setCards] = useState<string[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const shuffled = [...planetCards, ...planetCards]
      .sort(() => Math.random() - 0.5);

    setCards(shuffled);
  }, []);

  const handleClick = (index: number) => {
    if (
      flipped.includes(index) ||
      matched.includes(index) ||
      flipped.length === 2
    ) {
      return;
    }

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((prev) => prev + 1);

      const [first, second] = newFlipped;

      if (cards[first] === cards[second]) {
        const newMatched = [
          ...matched,
          first,
          second,
        ];

        setMatched(newMatched);

        if (newMatched.length === cards.length) {
          setFinished(true);
        }

        setFlipped([]);
      } else {
        setTimeout(() => {
          setFlipped([]);
        }, 1000);
      }
    }
  };

  const restartGame = () => {
    const shuffled = [...planetCards, ...planetCards]
      .sort(() => Math.random() - 0.5);

    setCards(shuffled);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setFinished(false);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#020817] text-white pt-32 pb-20 px-6">

        <div className="max-w-5xl mx-auto">

          <div className="mb-6">
            <Link
              to="/funzone"
              className="text-blue-400 hover:text-blue-300"
            >
              ← Back To Fun Zone
            </Link>
          </div>

          <h1 className="text-5xl font-bold text-center mb-4">
            Planet Memory Match
          </h1>

          <p className="text-center text-gray-400 mb-6">
            Match all planet pairs.
          </p>

          <div className="text-center mb-8 text-xl">
            Moves: {moves}
          </div>

          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">

            {cards.map((card, index) => {
              const isFlipped =
                flipped.includes(index);

              const isMatched =
                matched.includes(index);

              return (
                <button
                  key={index}
                  onClick={() =>
                    handleClick(index)
                  }
                  className="h-24 rounded-xl bg-[#07172f] border border-[#123a74] text-4xl hover:border-blue-500 transition"
                >
                  {isFlipped || isMatched
                    ? card
                    : "❓"}
                </button>
              );
            })}

          </div>

          {finished && (
            <div className="fixed inset-0 bg-black/70 flex justify-center items-center">

              <div className="bg-[#07172f] border border-blue-500 rounded-2xl p-10 text-center max-w-lg">

                <h1 className="text-6xl mb-4">
                  🎉
                </h1>

                <h2 className="text-4xl font-bold mb-4">
                  Memory Master!
                </h2>

                <p className="text-2xl mb-8">
                  Completed in {moves} moves
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
          )}

        </div>

      </div>
    </>
  );
}
