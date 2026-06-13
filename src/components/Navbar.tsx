import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Research", path: "/research" },
    { name: "Team", path: "/team" },
    { name: "Founder", path: "/founder" },
    { name: "Blog", path: "/blog" },
    { name: "Fun Zone", path: "/fun-zone" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020817]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
            SL
          </div>

          <div>
            <div className="text-white text-sm font-bold tracking-wide">
              STAR LABS
            </div>

            <div className="text-blue-400 text-xs tracking-[0.25em]">
              RESEARCHES
            </div>
          </div>

        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm">

          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`transition relative ${
                location.pathname === item.path
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.name}

              {location.pathname === item.path && (
                <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-blue-400 rounded-full" />
              )}
            </Link>
          ))}

        </div>

      </div>
    </nav>
  );
}
