import React, { useState } from "react";

import { InputMask } from "primereact/inputmask";

const Modal = () => {
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [person, setPerson] = useState();

  function bron() {
    location.reload();
  }

  return (
    <div className="bg-[#1A2031] w-[505px] max-sm:w-full absolute top-[100px] z-10 left-[50%] translate-x-[-50%] flex flex-col ">
      <h2 className="text-[24px] text-center mt-[65px] mb-10 text-white">
        Bron qilish
      </h2>

      <label
        htmlFor="fish"
        className="font-bold block ml-[60px] text-white mb-2"
      >
        FISH:
      </label>
      <InputMask
        className="w-[384px] h-[56px] px-4 bg-[#282D40] rounded mx-auto mb-6 text-white outline-none"
        id="fish"
        value={name}
        onChange={(e) => setName(e.target.name)}
        mask="aaaaaaaaaaaaaaaa"
        placeholder="FISH"
      />
      <label
        htmlFor="phone"
        className="font-bold block ml-[60px] text-white mb-2"
      >
        Telefon raqam
      </label>
      <InputMask
        className="w-[384px] h-[56px] px-4 bg-[#282D40] rounded mx-auto mb-6 text-white outline-none"
        id="phone"
        value={number}
        onChange={(e) => setNumber(e.target.number)}
        mask="+999 99 999 99 99"
        placeholder="+998 --- -- --"
      />
      <label
        htmlFor="person"
        className="font-bold block ml-[60px] text-white mb-2 "
      >
        Kishi soni
      </label>
      <InputMask
        className="w-[384px] h-[56px] px-4 bg-[#282D40] rounded mx-auto mb-6 text-white outline-none"
        id="person"
        value={person}
        onChange={(e) => setPerson(e.target.person)}
        mask="999"
        placeholder="Kishi soni"
      />

      <button
        onClick={bron}
        className="py-4 w-[384px] mx-auto rounded-xl text-white button_gradient mb-[66px]"
      >
        Jo’natish
      </button>
    </div>
  );
};

export default Modal;
