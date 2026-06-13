import { Link } from "react-router-dom";
import logo from "../assets/logo/Logo.jpeg";

export default function Footer() {
  return (
    <footer className="bg-[#020817] border-t border-[#123a74]">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}

          <div>
            <div className="flex items-center gap-3 mb-4">

              <img
                src={logo}
                alt="Star Labs Researches"
                className="h-12 w-12 rounded-full object-cover border border-blue-500"
              />

              <div>
                <h3 className="font-bold text-white">
                  STAR LABS
                </h3>

                <p className="text-blue-400 text-sm tracking-widest">
                  RESEARCHES
                </p>
              </div>

            </div>

            <p className="text-gray-400 leading-relaxed">
              Independent astronomy research focused on
              stellar astrophysics, exoplanets,
              machine learning, and time-domain astronomy.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="font-bold text-white mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">

              <Link to="/" className="text-gray-400 hover:text-blue-400">
                Home
              </Link>

              <Link to="/research" className="text-gray-400 hover:text-blue-400">
                Research
              </Link>

              <Link to="/team" className="text-gray-400 hover:text-blue-400">
                Team
              </Link>

              <Link to="/founder" className="text-gray-400 hover:text-blue-400">
                Founder
              </Link>

              <Link to="/blog" className="text-gray-400 hover:text-blue-400">
                Blog
              </Link>

              <Link to="/funzone" className="text-gray-400 hover:text-blue-400">
                Fun Zone
              </Link>

              <Link to="/contact" className="text-gray-400 hover:text-blue-400">
                Contact
              </Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="font-bold text-white mb-4">
              Contact
            </h3>

            <div className="space-y-3">

              <a
                href="mailto:researches@starlabsresearches.com"
                className="block text-gray-400 hover:text-blue-400"
              >
                researches@starlabsresearches.com
              </a>

              <a
                href="mailto:starlabsresearches@gmail.com"
                className="block text-gray-400 hover:text-blue-400"
              >
                starlabsresearches@gmail.com
              </a>

              <a
                href="https://github.com/starlabsresearches"
                target="_blank"
                rel="noreferrer"
                className="block text-gray-400 hover:text-blue-400"
              >
                GitHub
              </a>

            </div>

          </div>

        </div>

        {/* Bottom Bar */}

        <div className="border-t border-slate-800 mt-10 pt-6 text-center">

          <p className="text-gray-500 text-sm">
            © 2026 Star Labs Researches. All rights reserved.
          </p>

          <p className="text-gray-600 text-xs mt-2">
            Built with curiosity, research, and code.
          </p>

        </div>

      </div>

    </footer>
  );
}
