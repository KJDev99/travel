import { useState } from "react";
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
  const [modal, setModal] = useState(false);
  return (
    <div>
      <NavbarTop />
      <Navbar modal={{ modal, setModal }} />
      <Header modal={{ modal, setModal }}/>
      <Tur />
      <Hizmat />
      <Hotel />
      <Sayohat />
      <Footer />
    </div>
  );
}

export default App;
