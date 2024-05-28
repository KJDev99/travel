import { useState } from "react";
import NavbarTop from "../components/navbar-top";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Sayohat from "../components/sayohat";
import Contact from "../components/contact";

const Contacts = () => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <NavbarTop />
      <Navbar modal={{ modal, setModal }} />
      <Contact />
      <Sayohat />
      <Footer />
    </div>
  );
};

export default Contacts;
