import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const Hizmat = () => {
  const [t] = useTranslation("global");
  return (
    <div className="mt-[150px] mb-[170px] max-md:my-[80px]">
      <div className="container mx-auto ">
        <h2 className="text-center text-[#14183E] text-[50px] font-bold mb-8 max-md:text-3xl">
          {t("hizmat")}
        </h2>
        <div className="relative grid lg:grid-cols-5 max-lg:grid-cols-2 max-md:grid-cols-1 gap-[40px] max-md:gap-[20px] mb-[100px]">
          <div className="max-md:hidden absolute right-[-50px] top-[-140px]">
            <img src="./group+.svg" alt="plus" />
          </div>
          <Link
            to={"/xizmatlar"}
            className="h-[274px] flex flex-col bg-[#F9f9f9] hover:bg-white items-center px-3 rounded-3xl max-md:h-[220px]"
          >
            <img className="h-[100px] mt-4" src="./pilottt.svg" alt="" />
            <h3 className="text-xl text-[#1E1D4C]  mt-5 mb-3">{t("avia0")}</h3>
            <p className="text-center text-[#5E6282] text-[15px]">
              {t("aviamain")}
            </p>
          </Link>
          <Link
            to={"/xizmatlar"}
            className="h-[274px] flex flex-col bg-[#F9f9f9] hover:bg-white items-center px-3 rounded-3xl max-md:h-[220px]"
          >
            <img className="h-[100px] mt-4" src="./hizmat2.svg" alt="" />
            <h3 className="text-xl text-[#1E1D4C] mt-5 mb-3">{t("viza0")}</h3>
            <p className="text-center text-[#5E6282] text-[15px]">
              {t("vizamain")}
            </p>
          </Link>
          <Link
            to={"/xizmatlar"}
            className="h-[274px] flex flex-col bg-[#F9f9f9] hover:bg-white items-center px-3 rounded-3xl max-md:h-[220px]"
          >
            <img className="h-[100px] mt-4" src="./hizmat3.svg" alt="" />
            <h3 className="text-xl text-[#1E1D4C] mt-5 mb-3">{t("poyezd0")}</h3>
            <p className="text-center text-[#5E6282] text-[15px]">
              {t("poyezdmain")}
            </p>
          </Link>
          <Link
            to={"/xizmatlar"}
            className="h-[274px] flex flex-col bg-[#F9f9f9] hover:bg-white items-center px-3 rounded-3xl max-md:h-[220px]"
          >
            <img className="h-[100px] mt-4" src="./hizmat4.svg" alt="" />
            <h3 className="text-xl text-[#1E1D4C] mt-5 mb-3">
              {t("tarjimon0")}
            </h3>
            <p className="text-center text-[#5E6282] text-[15px]">
              {t("tarjimonmain")}
            </p>
          </Link>
          <Link
            to={"/xizmatlar"}
            className="h-[274px] flex flex-col bg-[#F9f9f9] hover:bg-white items-center px-3 rounded-3xl max-md:h-[220px]"
          >
            <img className="h-[100px] mt-4" src="./carrr.png" alt="" />
            <h3 className="text-xl text-[#1E1D4C] mt-5 mb-3">
              {t("avtomobil0")}
            </h3>
            <p className="text-center text-[#5E6282] text-[15px]">
              {t("avtomobilmain")}
            </p>
          </Link>
          <div className="max-md:hidden absolute left-[-33px] bottom-[-33px] z-[-2]">
            <img src="./Rectangle.png" alt="rectangle" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hizmat;
