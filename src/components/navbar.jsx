import { useState, useEffect } from "react";
import { MdOutlineMenu } from "react-icons/md";
import Modal from "./modal";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = ({ modal }) => {
  const [active, setActive] = useState(true);
  const [lang, setLanguage] = useState("uz");

  function menuClick() {
    setActive(!active);
  }

  const { t, i18n } = useTranslation("global");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const currentLang = queryParams.get("lang") || "uz";
    setLanguage(currentLang);
    i18n.changeLanguage(currentLang);
  }, [location.search, i18n]);

  const handleChangeLanguage = (event) => {
    const newLang = event.target.value;
    setLanguage(newLang);
    i18n.changeLanguage(newLang);

    const queryParams = new URLSearchParams(location.search);
    queryParams.set("lang", newLang);
    navigate({ search: queryParams.toString() });
  };

  const handleChange = (event) => {
    const path = event.target.value;
    const queryParams = new URLSearchParams(location.search);
    queryParams.set("lang", lang);
    navigate({ pathname: path, search: queryParams.toString() });
  };

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const getLinkWithLang = (path) => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set("lang", lang);
    return { pathname: path, search: queryParams.toString() };
  };

  return (
    <div className="bg-[#1A2031] h-[92px]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-[92px]">
          <Link to={getLinkWithLang("/")} className="logo flex items-center h-full">
            <img className="max-md:w-[190px] w-[230px]" src="./Atlas luxe logo.png" alt="" />
          </Link>
          <ul className={`flex font-Poppins items-center h-full max-md:absolute max-md:z-20 max-md:flex-col max-md:bg-[#1A2031] max-md:h-max max-md:w-[350px] max-md:left-[50%] max-md:translate-x-[-50%] max-md:rounded max-md:top-[${active ? "-320px" : "120px"}] ease-linear`}>
            <Link to={getLinkWithLang("/about")} className={`text-white md:ml-8 max-md:pt-8 max-md:pb-2 ${isActive("/about")}`}>
              {t("navbar.menu1")}
            </Link>
            <Link to={getLinkWithLang("/mehmonxonalar")} className={`text-white md:ml-8 max-md:pt-8 max-md:pb-2 ${isActive("/mehmonxonalar")}`}>
              {t("navbar.menu2")}
            </Link>
            <select onChange={handleChange} value="" className="bg-[#1A2031] border-none outline-none text-white max-md:py-2 md:ml-8">
              <option disabled value="">{t("navbar.menu10")}</option>
              <option value="/ichkiturizm" className="bg-[#1A2031] text-sm">
                {t("navbar.menu5")}
              </option>
              <option className="bg-[#1A2031] text-sm" value="/tashqiturizm">
                {t("navbar.menu7")}
              </option>
              <option className="bg-[#1A2031] text-sm" value="/kiruvchiturizm">
                {t("navbar.menu6")}
              </option>
            </select>
            <Link to={getLinkWithLang("/xizmatlar")} className={`text-white md:ml-8 max-md:pt-8 max-md:pb-2 ${isActive("/xizmatlar")}`}>
              {t("navbar.menu8")}
            </Link>
            <Link to={getLinkWithLang("/contact")} className={`text-white md:ml-8 max-md:pt-8 max-md:pb-2 ${isActive("/contact")}`}>
              {t("navbar.menu9")}
            </Link>
            <li className="md:ml-8 max-md:pt-2 max-md:pb-8">
              <select value={lang} onChange={handleChangeLanguage} className="bg-[#1A2031] border-none outline-none text-white">
                <option className="bg-[#1A2031]" value={"uz"}>Uz</option>
                <option className="bg-[#1A2031]" value={"en"}>En</option>
                <option className="bg-[#1A2031]" value={"ru"}>Ru</option>
              </select>
            </li>
          </ul>
          <MdOutlineMenu onClick={menuClick} className="text-white text-4xl md:hidden cursor-pointer" />
        </div>
        {modal.modal && <Modal modalAct={modal} />}
      </div>
    </div>
  );
};

export default Navbar;
