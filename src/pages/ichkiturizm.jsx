import { useState } from "react";
import NavbarTop from "../components/navbar-top";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Iturizm from "../components/iturizm";
import Sayohat from "../components/sayohat";
const Ichkiturizm = () => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <NavbarTop />
      <Navbar modal={{ modal, setModal }} />
      <Iturizm modal={{ modal, setModal }} />
      <Sayohat />
      <Footer />
    </div>
  );
};

export default Ichkiturizm;
