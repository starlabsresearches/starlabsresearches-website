import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const planets = [
  {
    name: "Mercury",
    gravity: 0.38,
    fact: "A year on Mercury lasts only 88 Earth days.",
  },
  {
    name: "Venus",
    gravity: 0.91,
    fact: "Venus is hotter than Mercury.",
  },
  {
    name: "Mars",
    gravity: 0.38,
    fact: "Mars has the tallest volcano in the Solar System.",
  },
  {
    name: "Jupiter",
    gravity: 2.34,
    fact: "Jupiter is the largest planet.",
  },
  {
    name: "Saturn",
    gravity: 1.06,
    fact: "Saturn could float in water.",
  },
  {
    name: "Uranus",
    gravity: 0.92,
    fact: "Uranus rotates on its side.",
  },
  {
    name: "Neptune",
    gravity: 1.19,
    fact: "Neptune has the fastest winds.",
  },
];

export default function WeightCalculator() {
  const [weight, setWeight] = useState("");
  const [planet, setPlanet] = useState("Mars");
  const [result, setResult] = useState<number | null>(null);
  const [fact, setFact] = useState("");

  const calculateWeight = () => {
    const selected = planets.find(
      (p) => p.name === planet
    );

    if (!selected || !weight) return;

    const newWeight =
      parseFloat(weight) * selected.gravity;

    setResult(Number(newWeight.toFixed(1)));
    setFact(selected.fact);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#020817] text-white pt-32 pb-20 px-6">

        <div className="max-w-3xl mx-auto">

          <h1 className="text-5xl font-bold text-center mb-4">
            How Much Would You Weigh?
          </h1>

          <p className="text-center text-gray-400 mb-10">
            Discover your weight on other worlds.
          </p>

          <div className="bg-[#07172f] border border-[#123a74] rounded-2xl p-8">

            <label className="block mb-3">
              Your Weight On Earth (kg)
            </label>

            <input
              type="number"
              value={weight}
              onChange={(e) =>
                setWeight(e.target.value)
              }
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 mb-6"
              placeholder="Enter weight"
            />

            <label className="block mb-3">
              Select Planet
            </label>

            <select
              value={planet}
              onChange={(e) =>
                setPlanet(e.target.value)
              }
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 mb-8"
            >
              {planets.map((p) => (
                <option key={p.name}>
                  {p.name}
                </option>
              ))}
            </select>

            <button
              onClick={calculateWeight}
              className="w-full bg-blue-500 hover:bg-blue-600 py-4 rounded-xl font-bold"
            >
              Calculate
            </button>

            {result && (
              <div className="mt-10 text-center">

                <h2 className="text-4xl font-bold text-blue-400 mb-4">
                  {result} kg
                </h2>

                <p className="text-gray-300 mb-4">
                  Your weight on {planet}
                </p>

                <div className="bg-slate-800 rounded-xl p-4">
                  💡 {fact}
                </div>

              </div>
            )}

            <div className="mt-8 text-center">

              <Link
                to="/funzone"
                className="text-blue-400 hover:text-blue-300"
              >
                ← Back To Fun Zone
              </Link>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}
