import { useState } from "react";
import NavbarTop from "../components/navbar-top";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Aboutt from "../components/about";

const About = () => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <NavbarTop />
      <Navbar modal={{ modal, setModal }} />
      <Aboutt />
      <Footer />
    </div>
  );
};

export default About;
