import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";

const games = [
  {
    title: "Guess The Object",
    description: "Can you identify these celestial objects?",
    image:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop",
    route: "/fun-zone/guess-object",
    button: "Play Now",
  },

  {
    title: "How Much Would You Weigh?",
    description: "Find out your weight on different planets.",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200&auto=format&fit=crop",
    route: "/funzone/weight-calculator",
    button: "Play Now",
  },

  {
    title: "Exoplanet Explorer",
    description: "Discover amazing facts about known exoplanets.",
    image:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=1200&auto=format&fit=crop",
  route: "/funzone/exoplanet-explorer",
    button: "Explore",
  },

  {
    title: "Constellation Quiz",
    description: "Test your knowledge of constellations.",
    image:
      "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200&auto=format&fit=crop",
    route: "/funzone/constellation-quiz",
    button: "Play Now",
  },


  {
    title: "Astronomy Quiz Challenge",
    description: "Challenge yourself with astronomy trivia.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    route: "/funzone/astronomy-quiz",
    button: "Play Now",
  },

  {
    title: "Planet Memory Match",
    description: "Match planets and test your memory.",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1200&auto=format&fit=crop",
    route: "/funzone/memory-match",
    button: "Play Now",
  },
];

export default function FunZone() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#020817] text-white pt-32 pb-20">

        {/* Header */}

        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold mb-4">
            Fun Zone
          </h1>

          <p className="text-gray-400 text-xl">
            Learn astronomy through interactive activities.
          </p>
        </div>

        {/* Games */}

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {games.map((game) => (
              <div
                key={game.title}
                className="bg-[#07172f] border border-[#123a74] rounded-2xl overflow-hidden hover:border-blue-500 hover:scale-[1.02] transition duration-300"
              >

                <img
                  src={game.image}
                  alt={game.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">

                  <h2 className="text-2xl font-bold mb-3">
                    {game.title}
                  </h2>

                  <p className="text-gray-400 mb-6">
                    {game.description}
                  </p>

                  <Link
                    to={game.route}
                    className="inline-block bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-lg font-semibold transition"
                  >
                    {game.button}
                  </Link>

                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
