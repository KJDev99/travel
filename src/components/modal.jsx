import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { InputMask } from "primereact/inputmask";

const Modal = ({ modalAct }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [count, setCount] = useState("");
  const [message, setMessage] = useState("");

  function bron() {
    const data = {
      id: 4, // Bu ID kerak bo'lsa dinamik tarzda o'zgartirilishi mumkin
      name,
      phone,
      count: parseInt(count),
      created: new Date().toISOString(),
    };

    fetch("https://api.atlasluxe.uz/api/lead/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("Tarmoq javobi yaxshi emas");
        }
        return response.json();
      })
      .then(() => {
        setMessage("Muvaffaqiyatli jo'natildi!");
        setTimeout(() => {
          modalAct.setModal(false);
        }, 2000); // Modalni yopishdan oldin 2 soniya kutish
      })
      .catch((error) => {
        console.error("Xatolik:", error);
        setMessage("Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
      });
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="h-full w-full bg-black/50 fixed left-0 top-0 flex items-center justify-center z-10">
      <div
        className={`text-center absolute top-10 w-[300px] bg-slate-700 text-white h-12 rounded flex items-center justify-center ease-linear ${
          message ? "right-4" : "right-[-300px]"
        }`}
      >
        {message}
      </div>
      {/* {message && (
        <div className="text-center absolute right-4 top-10 ">{message}</div>
      )} */}
      <div className="bg-white w-[505px] max-md:w-[90%] flex flex-col rounded-md absolute">
        <IoClose
          onClick={() => modalAct.setModal(false)}
          className="absolute text-4xl text-title-color top-5 right-5 cursor-pointer max-md:top-2 max-md:right-2"
        />
        <h2 className="text-[24px] text-center mt-[65px] mb-10 text-title-color font-Poppins max-md:mt-8 max-md:mb-4">
          Bron qilish
        </h2>

        <label
          htmlFor="fish"
          className="font-bold block ml-[60px] text-title-color mb-2"
        >
          FISH:
        </label>
        <input
          type="text"
          className="w-[384px] max-md:w-[320px] max-md:h-12 h-[56px] px-4 bg-[rgb(241,241,241)] rounded mx-auto mb-6 text-title-color outline-none"
          id="fish"
          value={name}
          onChange={(e) => setName(e.target.value)}
          mask="aaaaaaaaaaaaaaaa"
          placeholder="FISH"
        />
        <label
          htmlFor="phone"
          className="font-bold block ml-[60px] text-title-color mb-2"
        >
          Telefon raqam
        </label>
        <InputMask
          className="w-[384px] max-md:w-[320px] max-md:h-12 h-[56px] px-4 bg-[rgb(241,241,241)] rounded mx-auto mb-6 text-title-color outline-none"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          mask="+999 99 999 99 99"
          placeholder="+998 --- -- --"
        />
        <label
          htmlFor="count"
          className="font-bold block ml-[60px] text-title-color mb-2 "
        >
          Kishi soni
        </label>
        <InputMask
          className="w-[384px] max-md:w-[320px] max-md:h-12 h-[56px] px-4 bg-[rgb(241,241,241)] rounded mx-auto mb-6 text-title-color outline-none"
          id="count"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          mask="99"
          placeholder="Kishi soni"
        />

        <button
          onClick={bron}
          className="py-4 w-[384px] max-md:w-[320px] max-md:h-12 mx-auto rounded-xl text-white button_gradient mb-[66px] max-md:mb-[40px]"
        >
          Jo’natish
        </button>
      </div>
    </div>
  );
};

export default Modal;
