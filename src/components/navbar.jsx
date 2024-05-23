import { useState, createContext } from "react";
import { MdOutlineMenu } from "react-icons/md";
import Modal from "./modal";
import { Link } from "react-router-dom";

export const MyContext = createContext();
const Navbar = ({ modal }) => {
  const [active, setActive] = useState(true);

  function menuClick() {
    setActive(!active);
  }

  // function modalClick() {
  //   setActive(true);
  //   modal.setModal(!modal.modal);
  // }

  return (
    <div className="bg-[#1A2031] h-[92px]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-[92px]">
          <Link to={"/"} className="logo flex items-center h-full">
            <img className="max-md:w-[190px] w-[230px]" src="./Atlas luxe logo.png" alt="" />
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
              Biz haqimizda
            </Link>
            <li className="text-white md:ml-8 max-md:py-2">Mehmonhonalar</li>
            <li className="md:ml-8 text-white max-md:py-2">
              <select className="bg-[#1A2031] border-none outline-none text-white">
                <option
                  className="bg-[#1A2031]"
                  selected
                  disabled
                  value="Turizm turlari"
                >
                  Turizm turlari
                </option>
                <option className="bg-[#1A2031]" value="Sayohatlar">
                  Sayohatlar
                </option>
                <option className="bg-[#1A2031]" value="Ichki turizm">
                  Ichki turizm
                </option>
                <option className="bg-[#1A2031]" value="Kiruvchi turizm">
                  Kiruvchi turizm
                </option>
              </select>
            </li>
            <li className="text-white md:ml-8 max-md:py-2">Xizmarlar</li>
            <li className="text-white md:ml-8 max-md:py-2">Bog’lanish</li>
            <li className="md:ml-8 max-md:pt-2 max-md:pb-8">
              <select className="bg-[#1A2031] border-none outline-none text-white">
                <option className="bg-[#1A2031]">Uz</option>
                <option className="bg-[#1A2031]">En</option>
                <option className="bg-[#1A2031]">Ru</option>
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
