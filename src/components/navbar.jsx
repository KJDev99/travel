import { useState, createContext } from "react";
import { MdOutlineMenu } from "react-icons/md";
import Modal from "./modal";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const MyContext = createContext();
const Navbar = ({ modal }) => {
  const [active, setActive] = useState(true);
  const [lang, setLanguage] = useState("uz");

  function menuClick() {
    setActive(!active);
  }

  const [t, i18n] = useTranslation("global");

  // function modalClick() {
  //   setActive(true);
  //   modal.setModal(!modal.modal);
  // }

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="bg-[#1A2031] h-[92px]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-[92px]">
          <Link to={"/"} className="logo flex items-center h-full">
            <img
              className="max-md:w-[190px] w-[230px]"
              src="./Atlas luxe logo.png"
              alt=""
            />
          </Link>
          <ul
            className={
              active
                ? `flex items-center h-full max-md:absolute max-md:z-20 max-md:flex-col max-md:bg-[#1A2031] max-md:h-max max-md:w-[350px] max-md:left-[50%] max-md:translate-x-[-50%] max-md:rounded max-md:top-[-320px] ease-linear`
                : `flex items-center h-full max-md:absolute max-md:z-20 max-md:flex-col max-md:bg-[#1A2031] max-md:h-max max-md:w-[350px] max-md:left-[50%] max-md:translate-x-[-50%] max-md:rounded max-md:top-[120px] ease-linear`
            }
          >
            <Link
              to={"/about"}
              className="text-white md:ml-8 max-md:pt-8 max-md:pb-2"
            >
              {t("navbar.menu1")}
            </Link>
            <li className="text-white md:ml-8 max-md:py-2">
              {t("navbar.menu2")}
            </li>
            <li className="md:ml-8 text-white max-md:py-2">
              <select className="bg-[#1A2031] border-none outline-none text-white">
                <option
                  className="bg-[#1A2031]"
                  selected
                  disabled
                  value="Turizm turlari"
                >
                  {t("navbar.menu3")}
                </option>
                <option className="bg-[#1A2031]" value="Sayohatlar">
                  {t("navbar.menu4")}
                </option>
                <option className="bg-[#1A2031]" value="Ichki turizm">
                  {t("navbar.menu5")}
                </option>
                <option className="bg-[#1A2031]" value="Kiruvchi turizm">
                  {t("navbar.menu6")}
                </option>
              </select>
            </li>
            <li className="text-white md:ml-8 max-md:py-2">
              {t("navbar.menu8")}
            </li>
            <li className="text-white md:ml-8 max-md:py-2">
              {t("navbar.menu9")}
            </li>
            <li className="md:ml-8 max-md:pt-2 max-md:pb-8">
              <select
                value={lang}
                onChange={handleChangeLanguage}
                className="bg-[#1A2031] border-none outline-none text-white"
              >
                <option className="bg-[#1A2031]" value={"uz"}>
                  Uz
                </option>
                <option className="bg-[#1A2031]" value={"en"}>
                  En
                </option>
                <option className="bg-[#1A2031]" value={"ru"}>
                  Ru
                </option>
              </select>
            </li>
            {/* <li className="md:ml-8 max-md:pt-2 max-md:pb-8">
              <button
                onClick={modalClick}
                className="py-4 px-6 rounded-xl text-white button_gradient"
              >
                Joy band qilish
              </button>
            </li> */}
          </ul>
          <MdOutlineMenu
            onClick={menuClick}
            className="text-white text-4xl md:hidden cursor-pointer"
          />
        </div>
        {modal.modal && <Modal modalAct={modal} />}
      </div>
    </div>
  );
};

export default Navbar;
