import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo/Logo.jpeg";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Research", path: "/research" },
    { name: "Team", path: "/team" },
    { name: "Founder", path: "/founder" },
    { name: "Blog", path: "/blog" },
    { name: "Fun Zone", path: "/funzone" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#020817]/95 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo Section */}

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <img
              src={logo}
              alt="Star Labs Researches Logo"
              className="h-14 w-14 rounded-full object-cover border border-blue-500"
            />

            <div>
              <h1 className="text-white font-bold text-lg leading-tight">
                STAR LABS
              </h1>

              <p className="text-blue-400 text-sm tracking-widest">
                RESEARCHES
              </p>
            </div>
          </Link>

          {/* Navigation Links */}

          <div className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}

          </div>

        </div>

      </div>
    </nav>
  );
}
