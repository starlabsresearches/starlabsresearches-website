import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#020817] text-white">

        {/* Header */}

        <section className="pt-32 pb-20 text-center">

          <h1 className="text-6xl font-bold mb-4">
            Get In Touch
          </h1>

          <p className="text-gray-400 text-lg">
            We'd love to hear from students,
            researchers, collaborators,
            and astronomy enthusiasts around the world.
          </p>

        </section>

        {/* Content */}

        <section className="max-w-6xl mx-auto px-6 pb-20">

          <div className="grid lg:grid-cols-2 gap-8">

            {/* Contact Form */}

            <div className="bg-[#07172f] border border-[#123a74] rounded-2xl p-8">

              <h2 className="text-3xl font-bold mb-8">
                Send us a message
              </h2>

              <form>

                <div className="mb-5">

                  <label className="block text-sm text-gray-400 mb-2">
                    NAME
                  </label>

                  <input
                    type="text"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 focus:outline-none focus:border-blue-500"
                  />

                </div>

                <div className="mb-5">

                  <label className="block text-sm text-gray-400 mb-2">
                    EMAIL
                  </label>

                  <input
                    type="email"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 focus:outline-none focus:border-blue-500"
                  />

                </div>

                <div className="mb-5">

                  <label className="block text-sm text-gray-400 mb-2">
                    SUBJECT
                  </label>

                  <input
                    type="text"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 focus:outline-none focus:border-blue-500"
                  />

                </div>

                <div className="mb-6">

                  <label className="block text-sm text-gray-400 mb-2">
                    MESSAGE
                  </label>

                  <textarea
                    rows={6}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 focus:outline-none focus:border-blue-500"
                  />

                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 transition rounded-lg py-3 font-semibold"
                >
                  Send Message
                </button>

              </form>

            </div>

            {/* Right Column */}

            <div className="space-y-6">

              {/* Email Card */}

              <div className="bg-[#07172f] border border-[#123a74] rounded-2xl p-8">

                <div className="text-4xl mb-4">
                  📧
                </div>

                <h2 className="text-2xl font-bold mb-4">
                  Email
                </h2>

                <div className="space-y-3">

                  <a
                    href="mailto:researches@starlabsresearches.com"
                    className="block text-blue-400 hover:text-blue-300"
                  >
                    researches@starlabsresearches.com
                  </a>

                  <a
                    href="mailto:starlabsresearches@gmail.com"
                    className="block text-blue-400 hover:text-blue-300"
                  >
                    starlabsresearches@gmail.com
                  </a>

                </div>

                <p className="text-gray-400 mt-6">
                  We typically respond within
                  <span className="text-white font-semibold">
                    {" "}10 hours
                  </span>.
                </p>

              </div>

              {/* Connect Card */}

              <div className="bg-[#07172f] border border-[#123a74] rounded-2xl p-8">

                <h2 className="text-2xl font-bold mb-4">
                  Connect With Us
                </h2>

                <a
                  href="https://github.com/starlabsresearches"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-4 py-2 rounded-full bg-slate-800 border border-slate-600 hover:border-blue-500 transition"
                >
                  GitHub (Star Labs Researches)
                </a>

                <div className="flex flex-wrap gap-2 mt-6">

                  <span className="px-3 py-1 rounded-full bg-slate-800 text-sm">
                    Research Collaborations
                  </span>

                  <span className="px-3 py-1 rounded-full bg-slate-800 text-sm">
                    Student Projects
                  </span>

                  <span className="px-3 py-1 rounded-full bg-slate-800 text-sm">
                    Conference Invitations
                  </span>

                  <span className="px-3 py-1 rounded-full bg-slate-800 text-sm">
                    Astronomy Outreach
                  </span>

                  <span className="px-3 py-1 rounded-full bg-slate-800 text-sm">
                    Media & Speaking
                  </span>

                </div>

                <p className="text-gray-400 text-sm mt-6 leading-relaxed">
                  For research collaborations,
                  student projects,
                  conference opportunities,
                  astronomy outreach,
                  media appearances,
                  or general inquiries,
                  please contact us through either email address above.
                </p>

              </div>

            </div>

          </div>

        </section>

      </div>
      <Footer />
    </>
  );
}
