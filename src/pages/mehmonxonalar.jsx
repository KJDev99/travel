import { useState } from "react";
import NavbarTop from "../components/navbar-top";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Mehmonxona from "../components/mehmonxona";

const Mehmonxonalar = () => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <NavbarTop />
      <Navbar modal={{ modal, setModal }} />
      <Mehmonxona />
      <Footer />
    </div>
  );
};

export default Mehmonxonalar;
