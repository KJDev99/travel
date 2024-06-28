import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [t] = useTranslation("global");
  return (
    <div className="container mx-auto">
      <h2 className="text-center text-[#14183E] text-[50px] font-Volkhov font-bold mb-8 mt-[60px] max-md:text-3xl max-md:mt-10 max-md:mb-16">
        Bog’lanish
      </h2>
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-[40px] max-md:gap-[30px] mb-[100px]">
        <div className="">
          <h3 className="font-medium text-[24px] mb-6">
            ATLAS LUXE travel sayyohlik agentligi
          </h3>
          <div className="flex w-full max-md:flex-col">
            <div className="w-1/2 max-md:w-full">
              <p className="mb-1 text-black/[.80]">Ish vaqti</p>
              <p className="text-[18px] font-medium mb-4">
                Dushanbadan-shanbagacha <br /> 09:00 dan 18:00 gacha
              </p>
              <p className="mb-1 text-black/[.80]">Telefon:</p>
              <a
                href="tel:+998337804040"
                className="text-[18px] font-medium mb-4"
              >
                +998 33 780-40-40
              </a>
              <p className="mb-1 text-black/[.80]">E-mail:</p>
              <a
                href="mailto:atlasluxeuz@gmail.com"
                className="text-[18px] font-medium mb-4"
              >
                atlasluxeuz@gmail.com
              </a>
            </div>
            <div className="w-1/2 max-md:w-full">
              <p className="mb-1 text-black/[.80]">Manzil:</p>
              <p className="text-[18px] font-medium mb-4">{t("manzil")}</p>
            </div>
          </div>
        </div>
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.5876848967664!2d69.245212!3d41.317832499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba46fb431fb%3A0xf3c68f98dcf720ba!2sAtlas%20Luxe!5e0!3m2!1sru!2s!4v1719588699700!5m2!1sru!2s"
            width="600"
            height="304"
            loading="lazy"
            className="rounded-3xl max-md:w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
