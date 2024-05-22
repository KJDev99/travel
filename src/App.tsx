import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Hizmat from "./components/hizmat";
import Hotel from "./components/hotel";
import NavbarTop from "./components/navbar-top";
import Sayohat from "./components/sayohat";
import Tur from "./components/tur";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <NavbarTop />
      <Navbar />
      <Header />
      <Tur />
      <Hizmat />
      <Hotel />
      <Sayohat />
      <Footer />
    </div>
  );
}

export default App;
