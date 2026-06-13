import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const exoplanets = [
  {
    name: "Kepler-186f",
    type: "Rocky Planet",
    distance: "500 light years",
    star: "Kepler-186",
    habitable: "Yes",
    radius: "1.1 Earth Radii",
    fact:
      "First Earth-sized planet discovered inside a habitable zone.",
  },

  {
    name: "TRAPPIST-1e",
    type: "Rocky Planet",
    distance: "39 light years",
    star: "TRAPPIST-1",
    habitable: "Potentially",
    radius: "0.91 Earth Radii",
    fact:
      "Part of a system containing seven Earth-sized worlds.",
  },

  {
    name: "Proxima Centauri b",
    type: "Super Earth",
    distance: "4.24 light years",
    star: "Proxima Centauri",
    habitable: "Potentially",
    radius: "1.3 Earth Radii",
    fact:
      "The closest known exoplanet to Earth.",
  },

  {
    name: "K2-18b",
    type: "Sub-Neptune",
    distance: "124 light years",
    star: "K2-18",
    habitable: "Possible",
    radius: "2.6 Earth Radii",
    fact:
      "Water vapor has been detected in its atmosphere.",
  },

  {
    name: "TOI-700 d",
    type: "Rocky Planet",
    distance: "100 light years",
    star: "TOI-700",
    habitable: "Yes",
    radius: "1.2 Earth Radii",
    fact:
      "Discovered using NASA's TESS mission.",
  },
];

export default function ExoplanetExplorer() {
  const [selected, setSelected] = useState(exoplanets[0]);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#020817] text-white pt-32 pb-20 px-6">

        <div className="max-w-6xl mx-auto">

          <h1 className="text-5xl font-bold text-center mb-4">
            Exoplanet Explorer
          </h1>

          <p className="text-center text-gray-400 mb-12">
            Discover fascinating worlds beyond our Solar System.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* Planet List */}

            <div className="space-y-4">

              {exoplanets.map((planet) => (
                <button
                  key={planet.name}
                  onClick={() => setSelected(planet)}
                  className={`w-full text-left p-5 rounded-xl border transition ${
                    selected.name === planet.name
                      ? "border-blue-500 bg-[#07172f]"
                      : "border-slate-700 bg-slate-900"
                  }`}
                >
                  <h3 className="font-bold">
                    {planet.name}
                  </h3>

                  <p className="text-sm text-gray-400">
                    {planet.type}
                  </p>
                </button>
              ))}

            </div>

            {/* Details */}

            <div className="lg:col-span-2">

              <div className="bg-[#07172f] border border-blue-500 rounded-2xl p-8">

                <h2 className="text-4xl font-bold mb-8">
                  {selected.name}
                </h2>

                <div className="grid md:grid-cols-2 gap-6">

                  <div>
                    <p className="text-gray-400">
                      Planet Type
                    </p>

                    <p className="text-xl">
                      {selected.type}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400">
                      Distance
                    </p>

                    <p className="text-xl">
                      {selected.distance}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400">
                      Host Star
                    </p>

                    <p className="text-xl">
                      {selected.star}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400">
                      Habitable Zone
                    </p>

                    <p className="text-xl">
                      {selected.habitable}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400">
                      Radius
                    </p>

                    <p className="text-xl">
                      {selected.radius}
                    </p>
                  </div>

                </div>

                <div className="mt-10 p-6 rounded-xl bg-slate-800">

                  <h3 className="font-bold mb-3">
                    Fun Fact
                  </h3>

                  <p className="text-gray-300">
                    {selected.fact}
                  </p>

                </div>

                <div className="mt-10">

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

        </div>

      </div>
    </>
  );
}
