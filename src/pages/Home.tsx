import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://starlabsresearches-com.lovable.app/assets/hero-earth-qprfKhzz.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl">

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white mb-6">
            Star Labs Researches
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Advancing Astronomy Through Research,
            Innovation and Discovery
          </p>

          <div className="flex justify-center gap-4 flex-wrap">

            <Link
              to="/research"
              className="bg-blue-600 px-8 py-4 rounded-lg text-white hover:bg-blue-700 transition"
            >
              Explore Research
            </Link>

            <Link
              to="/about"
              className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition"
            >
              Learn More
            </Link>

          </div>

        </div>
      </section>
    </>
  );
}
