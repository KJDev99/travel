import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const [t] = useTranslation("global");
  const [isOpen, setIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState("");

  const openModal = (imgSrc) => {
    setCurrentImg(imgSrc);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImg("");
  };

  return (
    <div className="container mx-auto">
      <h2 className="mt-[58px] mb-4 font-Volkhov text-[#14183E] text-[50px] font-bold text-center max-md:text-4xl">
        {t("navbar.menu1")}
      </h2>
      <p className="font-medium mb-4 md:text-lg text-justify">{t("about1")}</p>
      <p className="font-medium mb-4 md:text-lg text-justify">{t("about2")}</p>
      <p className="font-medium mb-4 md:text-lg text-justify">{t("about3")}</p>
      <p className="font-medium mb-4 md:text-lg text-justify">{t("about4")}</p>
      <p className="font-medium mb-4 md:text-lg text-justify">{t("about5")}</p>
      <p className="font-medium mb-4 md:text-lg text-justify">{t("about6")}</p>
      <p className="font-medium mb-4 md:text-lg text-justify">{t("about7")}</p>
      <p className="font-medium mb-4 md:text-lg text-justify">{t("about8")}</p>
      <h2 className="mb-10 text-[#14183E] text-[32px] font-bold mt-[70px] text-center">
        {t("about9")}
      </h2>
      <div className="flex justify-center max-md:flex-col mb-16 max-md:items-center">
        <img
          className="w-[290px] md:mx-16 cursor-pointer max-md:mb-3"
          src="./guvoh.jpg"
          alt="sertifikat1"
          onClick={() => openModal("./guvoh.jpg")}
        />
        <img
          className="w-[290px] md:mx-16 cursor-pointer "
          src="./certificate.jpg"
          alt="sertifikat2"
          onClick={() => openModal("./certificate.jpg")}
        />
      </div>

      {isOpen && (
        <div className="fixed inset-0 top-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative h-[90vh] max-md:h-[490px] max-md:top-[0%]">
            <button
              className="absolute top-[-40px] right-0 text-white text-3xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={currentImg}
              alt="Large view"
              className="h-[90vh] max-md:h-[490px]"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
