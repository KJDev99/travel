import { useState } from "react";
import NavbarTop from "../components/navbar-top";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Tturizm from "../components/tturizm";
import Sayohat from "../components/sayohat";
const Ichkiturizm = () => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <NavbarTop />
      <Navbar modal={{ modal, setModal }} />
      <Tturizm modal={{ modal, setModal }} />
      <Sayohat />
      <Footer />
    </div>
  );
};

export default Ichkiturizm;
