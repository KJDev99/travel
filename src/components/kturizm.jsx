import { useState } from "react";
const Kturizm = ({ modal }) => {
  const [active, setActive] = useState(true);
  function modalClick() {
    setActive(true);
    modal.setModal(!modal.modal);
  }
  return (
    <div className="container mx-auto">
      <h2 className="mt-[58px] mb-4 text-[#14183E] text-[50px] font-bold text-center max-md:text-4xl">
        Kiruvchi Turizm
      </h2>
      <div className="flex flex-col">
        <div className="mb-6 flex max-md:mx-10 max-md:flex-col">
          <div className="w-1/4 max-md:w-full ">
            <img className="w-full" src="./hotel1.png" alt="hotel" />
          </div>
          <div className="flex flex-col w-3/4 max-md:w-full md:ml-6 ">
            <h3 className="text-2xl text-title-color mb-3">
              CLUB PRIVE BY RIXOS GOCEK
            </h3>
            <div className="flex mb-3">
              <img className="w-6 h-6 mr-2" src="./adress.svg" alt="adress" />
              <p className="text-black/60">Antalya</p>
            </div>
            <div className="flex mb-3 items-center">
              <img className="w-6 h-6 mr-2" src="./money.svg" alt="adress" />
              <p className="text-text-color text-xl font-medium">1 mln so’m</p>
            </div>
            <p className="text-black/80 grow">
              Mehmonxona Naama ko'rfazidan 8 km uzoqlikda, Hadaba hududida,
              ko'plab restoran va kafelar joylashgan El Merkato markazidan 5
              daqiqalik piyoda, Naama ko'rfazi markazidan 6 km va Eski shahardan
              4 km uzoqlikda joylashgan. . Mehmonxona birinchi marta 2005 yilda
              mehmonlarga o'z eshiklarini ochgan va oxirgi ta'mirlash 2017 yilda
              amalga oshirilgan. Mehmonxona faol, oilaviy va iqtisodiy dam olish
              uchun mos keladi.
            </p>
            <button
              onClick={modalClick}
              className="py-4 px-6 rounded-xl text-white button_gradient w-[200px]"
            >
              Joy band qilish
            </button>
          </div>
        </div>
        <div className="mb-6 flex max-md:mx-10 max-md:flex-col">
          <div className="w-1/4 max-md:w-full ">
            <img className="w-full" src="./hotel1.png" alt="hotel" />
          </div>
          <div className="flex flex-col w-3/4 max-md:w-full md:ml-6 ">
            <h3 className="text-2xl text-title-color mb-3">
              CLUB PRIVE BY RIXOS GOCEK
            </h3>
            <div className="flex mb-3">
              <img className="w-6 h-6 mr-2" src="./adress.svg" alt="adress" />
              <p className="text-black/60">Antalya</p>
            </div>
            <div className="flex mb-3 items-center">
              <img className="w-6 h-6 mr-2" src="./money.svg" alt="adress" />
              <p className="text-text-color text-xl font-medium">1 mln so’m</p>
            </div>
            <p className="text-black/80 grow">
              Mehmonxona Naama ko'rfazidan 8 km uzoqlikda, Hadaba hududida,
              ko'plab restoran va kafelar joylashgan El Merkato markazidan 5
              daqiqalik piyoda, Naama ko'rfazi markazidan 6 km va Eski shahardan
              4 km uzoqlikda joylashgan. . Mehmonxona birinchi marta 2005 yilda
              mehmonlarga o'z eshiklarini ochgan va oxirgi ta'mirlash 2017 yilda
              amalga oshirilgan. Mehmonxona faol, oilaviy va iqtisodiy dam olish
              uchun mos keladi.
            </p>
            <button
              onClick={modalClick}
              className="py-4 px-6 rounded-xl text-white button_gradient w-[200px]"
            >
              Joy band qilish
            </button>
          </div>
        </div>
        <div className="mb-6 flex max-md:mx-10 max-md:flex-col">
          <div className="w-1/4 max-md:w-full ">
            <img className="w-full" src="./hotel1.png" alt="hotel" />
          </div>
          <div className="flex flex-col w-3/4 max-md:w-full md:ml-6 ">
            <h3 className="text-2xl text-title-color mb-3">
              CLUB PRIVE BY RIXOS GOCEK
            </h3>
            <div className="flex mb-3">
              <img className="w-6 h-6 mr-2" src="./adress.svg" alt="adress" />
              <p className="text-black/60">Antalya</p>
            </div>
            <div className="flex mb-3 items-center">
              <img className="w-6 h-6 mr-2" src="./money.svg" alt="adress" />
              <p className="text-text-color text-xl font-medium">1 mln so’m</p>
            </div>
            <p className="text-black/80 grow">
              Mehmonxona Naama ko'rfazidan 8 km uzoqlikda, Hadaba hududida,
              ko'plab restoran va kafelar joylashgan El Merkato markazidan 5
              daqiqalik piyoda, Naama ko'rfazi markazidan 6 km va Eski shahardan
              4 km uzoqlikda joylashgan. . Mehmonxona birinchi marta 2005 yilda
              mehmonlarga o'z eshiklarini ochgan va oxirgi ta'mirlash 2017 yilda
              amalga oshirilgan. Mehmonxona faol, oilaviy va iqtisodiy dam olish
              uchun mos keladi.
            </p>
            <button
              onClick={modalClick}
              className="py-4 px-6 rounded-xl text-white button_gradient w-[200px]"
            >
              Joy band qilish
            </button>
          </div>
        </div>
        <div className="mb-6 flex max-md:mx-10 max-md:flex-col">
          <div className="w-1/4 max-md:w-full ">
            <img className="w-full" src="./hotel1.png" alt="hotel" />
          </div>
          <div className="flex flex-col w-3/4 max-md:w-full md:ml-6 ">
            <h3 className="text-2xl text-title-color mb-3">
              CLUB PRIVE BY RIXOS GOCEK
            </h3>
            <div className="flex mb-3">
              <img className="w-6 h-6 mr-2" src="./adress.svg" alt="adress" />
              <p className="text-black/60">Antalya</p>
            </div>
            <div className="flex mb-3 items-center">
              <img className="w-6 h-6 mr-2" src="./money.svg" alt="adress" />
              <p className="text-text-color text-xl font-medium">1 mln so’m</p>
            </div>
            <p className="text-black/80 grow">
              Mehmonxona Naama ko'rfazidan 8 km uzoqlikda, Hadaba hududida,
              ko'plab restoran va kafelar joylashgan El Merkato markazidan 5
              daqiqalik piyoda, Naama ko'rfazi markazidan 6 km va Eski shahardan
              4 km uzoqlikda joylashgan. . Mehmonxona birinchi marta 2005 yilda
              mehmonlarga o'z eshiklarini ochgan va oxirgi ta'mirlash 2017 yilda
              amalga oshirilgan. Mehmonxona faol, oilaviy va iqtisodiy dam olish
              uchun mos keladi.
            </p>
            <button
              onClick={modalClick}
              className="py-4 px-6 rounded-xl text-white button_gradient w-[200px]"
            >
              Joy band qilish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kturizm;
