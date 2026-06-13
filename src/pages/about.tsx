export default function About() {
  return (
    <div className="min-h-screen bg-[#020817] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">

          <div>
            <h1 className="text-5xl font-bold mb-8">
              About Star Labs
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Founded by Sournamalya "Grace" Bhavani, Star Labs Researches is
              an independent research initiative focused on understanding the
              universe through data analysis, statistical modelling, and
              innovative science.
            </p>

            <button className="text-blue-400 font-medium hover:text-blue-300 transition">
              Learn more about us →
            </button>
          </div>

          <div className="bg-[#07172f] border border-[#123a74] rounded-3xl p-8">
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
              OUR MISSION
            </p>

            <p className="text-gray-200 leading-relaxed text-lg">
              To push the boundaries of astronomical research through
              curiosity, collaboration, and computational excellence.
            </p>
          </div>

        </div>

        {/* Research Areas */}

        <h2 className="text-4xl font-bold text-center mb-14 text-blue-400">
          Research Areas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">

          {/* Stellar Astrophysics */}
          <div
            className="
              bg-gradient-to-b from-[#071b3a] to-[#041224]
              border border-[#123a74]
              rounded-2xl
              h-[150px]
              flex flex-col items-center justify-center
              hover:border-blue-400
              transition
            "
          >
            <div className="w-12 h-12 rounded-full border border-blue-500 flex items-center justify-center text-blue-400 text-xl mb-4">
              ☼
            </div>

            <h3 className="font-semibold text-center">
              Stellar Astrophysics
            </h3>
          </div>

          {/* Exoplanet Science */}
          <div
            className="
              bg-gradient-to-b from-[#071b3a] to-[#041224]
              border border-[#123a74]
              rounded-2xl
              h-[150px]
              flex flex-col items-center justify-center
              hover:border-blue-400
              transition
            "
          >
            <div className="w-12 h-12 rounded-full border border-blue-500 flex items-center justify-center text-blue-400 text-xl mb-4">
              ⊕
            </div>

            <h3 className="font-semibold text-center">
              Exoplanet Science
            </h3>
          </div>

          {/* Time-Domain Astronomy */}
          <div
            className="
              bg-gradient-to-b from-[#071b3a] to-[#041224]
              border border-[#123a74]
              rounded-2xl
              h-[150px]
              flex flex-col items-center justify-center
              hover:border-blue-400
              transition
            "
          >
            <div className="w-12 h-12 rounded-full border border-blue-500 flex items-center justify-center text-blue-400 text-xl mb-4">
              ◔
            </div>

            <h3 className="font-semibold text-center">
              Time-Domain Astronomy
            </h3>
          </div>

          {/* Machine Learning */}
          <div
            className="
              bg-gradient-to-b from-[#071b3a] to-[#041224]
              border border-[#123a74]
              rounded-2xl
              h-[150px]
              flex flex-col items-center justify-center
              hover:border-blue-400
              transition
            "
          >
            <div className="w-12 h-12 rounded-full border border-blue-500 flex items-center justify-center text-blue-400 text-xl mb-4">
              ⚙
            </div>

            <h3 className="font-semibold text-center">
              Machine Learning
            </h3>
          </div>

          {/* Bayesian Statistics */}
          <div
            className="
              bg-gradient-to-b from-[#071b3a] to-[#041224]
              border border-[#123a74]
              rounded-2xl
              h-[150px]
              flex flex-col items-center justify-center
              hover:border-blue-400
              transition
            "
          >
            <div className="w-12 h-12 rounded-full border border-blue-500 flex items-center justify-center text-blue-400 text-xl mb-4">
              Σ
            </div>

            <h3 className="font-semibold text-center">
              Bayesian Statistics
            </h3>
          </div>

        </div>

      </div>
    </div>
  );
}