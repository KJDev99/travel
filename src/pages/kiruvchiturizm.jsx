import { useState } from "react";
import NavbarTop from "../components/navbar-top";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Kturizm from "../components/kturizm";
import Sayohat from "../components/sayohat";
const Kiruvchiturizm = () => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <NavbarTop />
      <Navbar modal={{ modal, setModal }} />
      <Kturizm modal={{ modal, setModal }} />
      <Sayohat />
      <Footer />
    </div>
  );
};

export default Kiruvchiturizm;
