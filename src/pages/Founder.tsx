import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import grace from "../assets/team/grace.jpg";

export default function Founder() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#020817] text-white pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Profile Header */}
          <div className="flex flex-col md:flex-row gap-8 items-start mb-16">

            <img
              src={grace}
              alt="Grace Bhavani"
              className="w-56 h-56 rounded-2xl object-cover border border-[#123a74]"
            />

            <div>

              <h1 className="text-5xl font-bold mb-2">
                Sournamalya "Grace" Bhavani
              </h1>

              <p className="text-blue-400 font-semibold">
                Founder & Lead Researcher
              </p>

              <p className="text-gray-400 mb-4">
                M.Sc. Physics Student
              </p>

              <p className="italic text-gray-300 mb-6">
                "Every great discovery begins as a crazy idea."
              </p>

              <div className="flex gap-3">

                <a
                  href="https://github.com/spaceyg-blip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/grace-bhavani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition"
                >
                  LinkedIn
                </a>

              </div>

            </div>

          </div>

          {/* Story + Interests */}

          <div className="grid md:grid-cols-2 gap-6 mb-16">

            <div className="bg-[#07172f] border border-[#123a74] rounded-2xl p-6">

              <h2 className="text-xl font-bold mb-4">
                My Story
              </h2>

              <div className="text-gray-300 space-y-4 leading-relaxed">

                <p>
                  I am an Electronics and Communication Engineering graduate
                  who discovered a passion for astronomy during the later
                  stages of my undergraduate studies.
                </p>

                <p>
                  Realizing that astrophysics was the field I wanted to pursue,
                  I chose to begin a Master's degree in Physics to build a
                  stronger scientific foundation for future research.
                </p>

                <p>
                  Alongside formal education, I have dedicated myself to
                  learning astronomy, programming, statistics, and data
                  analysis while working on independent research projects.
                </p>

                <p>
                  This journey eventually led to the founding of Star Labs
                  Researches — a platform for curiosity-driven astronomy
                  research, collaboration, and scientific exploration.
                </p>

                <p>
                  My long-term goal is to pursue a PhD in Astrophysics and
                  contribute to our understanding of the universe through
                  data-driven discovery.
                </p>

              </div>

            </div>

            <div className="bg-[#07172f] border border-[#123a74] rounded-2xl p-6">

              <h2 className="text-xl font-bold mb-4">
                Research Interests
              </h2>

              <div className="flex flex-wrap gap-3">

                {[
                  "Stellar Astrophysics",
                  "Variable Stars",
                  "Exoplanets",
                  "Time-Domain Astronomy",
                  "Machine Learning",
                  "Bayesian Statistics",
                  "Explainable AI",
                  "Scientific Computing",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>

          </div>

          {/* Academic Journey */}

          <div className="mb-20">

            <h2 className="text-center text-2xl font-bold mb-10">
              Academic Journey
            </h2>

            <div className="grid md:grid-cols-5 gap-6 text-center">

              <div>
                <div className="w-4 h-4 bg-blue-400 rounded-full mx-auto mb-3"></div>
                <h3 className="font-bold">2023</h3>
                <p className="text-gray-400 text-sm">
                  ECE Graduate
                </p>
              </div>

              <div>
                <div className="w-4 h-4 bg-blue-400 rounded-full mx-auto mb-3"></div>
                <h3 className="font-bold">2025</h3>
                <p className="text-gray-400 text-sm">
                  Started M.Sc. Physics
                </p>
              </div>

              <div>
                <div className="w-4 h-4 bg-blue-400 rounded-full mx-auto mb-3"></div>
                <h3 className="font-bold">2025</h3>
                <p className="text-gray-400 text-sm">
                  Presented at FroCAP 2025
                </p>
              </div>

              <div>
                <div className="w-4 h-4 bg-blue-400 rounded-full mx-auto mb-3"></div>
                <h3 className="font-bold">2026</h3>
                <p className="text-gray-400 text-sm">
                  Published Exoplanet Research
                </p>
              </div>

              <div>
                <div className="w-4 h-4 bg-blue-400 rounded-full mx-auto mb-3"></div>
                <h3 className="font-bold">Future</h3>
                <p className="text-gray-400 text-sm">
                  PhD in Astrophysics
                </p>
              </div>

            </div>

          </div>

          {/* Current Research */}

          <div className="mb-16">

            <h2 className="text-2xl font-bold mb-6">
              Current Research
            </h2>

            <div className="space-y-6">

              <div className="bg-[#07172f] border border-[#123a74] rounded-2xl p-6">

                <h3 className="text-xl font-bold mb-3">
                  Investigating Deviations from Classical Gyrochronology
                  Relations in Stellar Rotation Evolution
                </h3>

                <p className="text-gray-300 mb-4">
                  This research examines the limitations of traditional
                  gyrochronology models by investigating deviations from
                  classical stellar age-rotation relations.
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Gyrochronology",
                    "Stellar Rotation",
                    "Stellar Evolution",
                    "Time-Domain Astronomy",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-800 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

              <div className="bg-[#07172f] border border-[#123a74] rounded-2xl p-6">

                <h3 className="text-xl font-bold mb-3">
                  Detection of Anomalous Stellar Rotation Behaviour Using
                  TESS Light Curves and Explainable Machine Learning
                </h3>

                <p className="text-gray-300 mb-4">
                  This project combines TESS photometric observations and
                  explainable machine-learning techniques to identify unusual
                  stellar rotation behaviour.
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Machine Learning",
                    "Explainable AI",
                    "TESS",
                    "Variable Stars",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-800 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

            </div>

          </div>

          {/* Publications */}

          <div>

            <h2 className="text-2xl font-bold mb-6">
              Publications
            </h2>

            <div className="space-y-4">

              <div className="bg-[#07172f] border border-[#123a74] rounded-xl p-4">
                1. A Unified Bayesian Study of Exoplanet Populations:
                From Survey Biases to Circumbinary Systems in Kepler and TESS
              </div>

              <div className="bg-[#07172f] border border-[#123a74] rounded-xl p-4">
                2. Statistical Approaches to Exoplanet Detection and
                Characterization Using Photometric Time-Series Data
              </div>

            </div>

          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
