import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Research from "./pages/Research";
import About from "./pages/about";
import Team from "./pages/Team";
import Founder from "./pages/Founder";

import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

import FunZone from "./pages/FunZone";
import GuessObject from "./pages/GuessObject";
import WeightCalculator from "./pages/WeightCalculator";
import ExoplanetExplorer from "./pages/ExoplanetExplorer";
import ConstellationQuiz from "./pages/ConstellationQuiz";
import AstronomyQuiz from "./pages/AstronomyQuiz";
import MemoryMatch from "./pages/MemoryMatch";

import Contact from "./pages/Contact";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/founder" element={<Founder />} />

        {/* Blog */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

        {/* Fun Zone */}
        <Route path="/funzone" element={<FunZone />} />

        {/* Games */}
        <Route
  path="/fun-zone/guess-object"
  element={<GuessObject />}
/>
<Route
  path="/funzone/weight-calculator"
  element={<WeightCalculator />}
/>
<Route
  path="/funzone/exoplanet-explorer"
  element={<ExoplanetExplorer />}
/>
<Route
  path="/funzone/constellation-quiz"
  element={<ConstellationQuiz />}
/>
<Route
  path="/funzone/astronomy-quiz"
  element={<AstronomyQuiz />}
/>
<Route
  path="/funzone/memory-match"
  element={<MemoryMatch />}
/>

<Route path="/contact" element={<Contact />} />

        
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
