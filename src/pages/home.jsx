import { useState } from "react";
import NavbarTop from "../components/navbar-top";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Header from "../components/header";
import Hizmat from "../components/hizmat";
import Hotel from "../components/hotel";
import Sayohat from "../components/sayohat";
import Tur from "../components/tur";

function Home() {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <NavbarTop />
      <Navbar modal={{ modal, setModal }} />
      <Header modal={{ modal, setModal }} />
      <Tur  modal={{ modal, setModal }}/>
      <Hizmat />
      <Hotel />
      <Sayohat />
      <Footer />
    </div>
  );
}

export default Home;
