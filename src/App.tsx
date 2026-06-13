import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Research from "./pages/Research";
import About from "./pages/about";
import Team from "./pages/Team";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


