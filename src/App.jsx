import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Contacts from "./pages/contacts";
import Xizmatlar from "./pages/xizmatlar";
import Mehmonxonalar from "./pages/mehmonxonalar";
import Ichkiturizm from "./pages/ichkiturizm";
import Tashqiturizm from "./pages/tashqiturizm";
import Kiruvchiturizm from "./pages/kiruvchiturizm";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/xizmatlar" element={<Xizmatlar />} />
        <Route path="/mehmonxonalar" element={<Mehmonxonalar />} />
        <Route path="/ichkiturizm" element={<Ichkiturizm />} />
        <Route path="/kiruvchiturizm" element={<Kiruvchiturizm />} />
        <Route path="/ichkiturizm" element={<Ichkiturizm />} />
        <Route path="/tashqiturizm" element={<Tashqiturizm />} />
        

        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;
