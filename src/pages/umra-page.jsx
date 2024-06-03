import { useState } from "react";
import NavbarTop from "../components/navbar-top";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Umra from "../components/umra";
import Sayohat from "../components/sayohat";
const UmraPage = () => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <NavbarTop />
      <Navbar modal={{ modal, setModal }} />
      <Umra modal={{ modal, setModal }} />
      <Sayohat />
      <Footer />
    </div>
  );
};

export default UmraPage;
