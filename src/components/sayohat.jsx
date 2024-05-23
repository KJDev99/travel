import { useTranslation } from "react-i18next";
const Sayohat = () => {
  const [t] = useTranslation("global");
  return (
    <div className="container mx-auto">
      <h2 className="text-center text-[#14183E] text-[50px] font-bold mb-8 mt-[120px] max-md:text-3xl max-md:mt-10 max-md:mb-16">
        {t("sayohat")}
      </h2>
      <div className="grid lg:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-[40px] max-md:gap-[30px] mb-[100px]">
        <div className="tur_item">
          <img className="w-full rounded-lg" src="./sayohat1.png" alt="test" />
          <h3 className="mt-4 mb-3 mx-8 text-center text-[#14183E] text-[30px] max-md:text-[24px] max-md:mt-3 max-md:mb-2">
            Rome, Italty
          </h3>
        </div>
        <div className="tur_item">
          <img className="w-full rounded-lg" src="./sayohat2.png" alt="test" />
          <h3 className="mt-4 mb-3 mx-8 text-center text-[#14183E] text-[30px] max-md:text-[24px] max-md:mt-3 max-md:mb-2">
            Indonesia
          </h3>
        </div>
        <div className="tur_item">
          <img className="w-full rounded-lg" src="./sayohat3.png" alt="test" />
          <h3 className="mt-4 mb-3 mx-8 text-center text-[#14183E] text-[30px] max-md:text-[24px] max-md:mt-3 max-md:mb-2">
            Maldives
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Sayohat;
