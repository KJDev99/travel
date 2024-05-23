import { useTranslation } from "react-i18next";
const About = () => {
  const [t] = useTranslation("global");
  return (
    <div className="container mx-auto">
      <h2 className="mt-[58px] mb-4 text-[#14183E] text-[50px] font-bold">
        {t("navbar.menu1")}
      </h2>
      <p className="font-medium mb-4">{t("about1")}</p>
      <p className="font-medium mb-4">{t("about2")}</p>
      <p className="font-medium mb-4">{t("about3")}</p>
      <p className="font-medium mb-4">{t("about4")}</p>
      <p className="font-medium mb-4">{t("about5")}</p>
      <p className="font-medium mb-4">{t("about6")}</p>
      <p className="font-medium mb-4">{t("about7")}</p>
      <p className="font-medium mb-4">{t("about8")}</p>
      <h2 className=" mb-10 text-[#14183E] text-[32px] font-bold mt-[70px] text-center">
        {t("about9")}
      </h2>
      <div className="flex justify-around max-md:flex-col mb-16">
        <img className="w-[290px]" src="./11.webp" alt="sertifikat1" />
        <img className="w-[290px]" src="./22.webp" alt="sertifikat2" />
      </div>
    </div>
  );
};

export default About;
