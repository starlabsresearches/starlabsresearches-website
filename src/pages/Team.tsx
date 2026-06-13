import Navbar from "../components/Navbar";

import grace from "../assets/team/grace.jpg";
import deepika from "../assets/team/deepika.jpg";
import adiya from "../assets/team/adiya.jpg";
import rajesh from "../assets/team/rajesh.jpg";

export default function Team() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#020817] text-white pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-6xl font-bold mb-4">
              Our Team
            </h1>

            <p className="text-gray-400 text-xl">
              A small team with big dreams.
            </p>
          </div>

          {/* Team Members */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Grace */}
            <div className="bg-[#07172f] border border-[#123a74] rounded-3xl overflow-hidden hover:border-blue-500 transition">
              <img
                src={grace}
                alt="Grace Bhavani"
                className="w-full h-[320px] object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">
                  Sournamalya "Grace" Bhavani
                </h3>

                <p className="text-blue-400 text-sm font-medium mb-4">
                  Founder & Lead Researcher
                </p>

                <p className="text-gray-300 mb-6">
                  Astrophysical researcher focused on data,
                  stars, and discovering the unknown.
                </p>

                <div className="flex gap-2">
                  <a
                    href="https://github.com/spaceyg-blip"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-800 px-3 py-2 rounded-lg hover:bg-slate-700 transition"
                  >
                    GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/in/grace-bhavani/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-800 px-3 py-2 rounded-lg hover:bg-slate-700 transition"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Deepika */}
            <div className="bg-[#07172f] border border-[#123a74] rounded-3xl overflow-hidden">
              <img
                src={deepika}
                alt="Deepika Sree"
                className="w-full h-[320px] object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">
                  Deepika Sree
                </h3>

                <p className="text-blue-400 text-sm font-medium mb-4">
                  Operations & Research Lead
                </p>

                <p className="text-gray-300">
                  Ensures smooth research operations while
                  contributing to scientific projects and collaboration.
                </p>
              </div>
            </div>

            {/* Adiya */}
            <div className="bg-[#07172f] border border-[#123a74] rounded-3xl overflow-hidden">
              <img
                src={adiya}
                alt="Adiya Premjit"
                className="w-full h-[320px] object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">
                  Adiya Premjit
                </h3>

                <p className="text-blue-400 text-sm font-medium mb-4">
                  Research Associate
                </p>

                <p className="text-gray-300">
                  Interested in astronomy, data analysis,
                  and scientific discovery.
                </p>
              </div>
            </div>

            {/* Rajesh */}
            <div className="bg-[#07172f] border border-[#123a74] rounded-3xl overflow-hidden">
              <img
                src={rajesh}
                alt="Rajesh M R"
                className="w-full h-[320px] object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">
                  Rajesh M R
                </h3>

                <p className="text-blue-400 text-sm font-medium mb-4">
                  Digital Media Head
                </p>

                <p className="text-gray-300">
                  Manages digital presence and helps communicate
                  Star Labs to the world.
                </p>
              </div>
            </div>

          </div>

          {/* GitHub Section */}
          <div className="mt-12 bg-[#07172f] border border-[#123a74] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between">

            <div>
              <h2 className="text-2xl font-bold mb-2">
                Our GitHub Organization
              </h2>

              <p className="text-gray-300">
                Explore our repositories, projects and research code.
              </p>
            </div>

            <a
              href="https://github.com/starlabsresearches"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl transition"
            >
              Visit GitHub
            </a>

          </div>

        </div>
      </div>
    </>
  );
}
