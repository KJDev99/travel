import { useState } from "react";
import NavbarTop from "../components/navbar-top";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Xizmat from "../components/xizmat";

const Xizmatlar = () => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <NavbarTop />
      <Navbar modal={{ modal, setModal }} />
      <Xizmat />
      <Footer />
    </div>
  );
};

export default Xizmatlar;
