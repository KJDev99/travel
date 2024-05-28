import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Contacts from "./pages/contacts";
import Xizmatlar from "./pages/xizmatlar";
import Mehmonxonalar from "./pages/mehmonxonalar";
import Ichkiturizm from "./pages/ichkiturizm";
import Kiruvchiturizm from "./pages/kiruvchiturizm";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/xizmatlar" element={<Xizmatlar />} />
        <Route path="/mehmonxonalar" element={<Mehmonxonalar />} />
        <Route path="/ichkiturizm" element={<Ichkiturizm />} />
        <Route path="/kiruvchiturizm" element={<Kiruvchiturizm />} />
        <Route path="/ichkiturizm" element={<Ichkiturizm />} />

        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;
