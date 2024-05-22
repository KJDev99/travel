import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;
