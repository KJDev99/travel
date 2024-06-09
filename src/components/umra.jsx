import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
const Umra = ({ modal }) => {
  const [active, setActive] = useState(true);

  const [t, i18n] = useTranslation("global");
  const [turList, setTurList] = useState([]);

  useEffect(() => {
    const fetchTurList = async () => {
      try {
        const response = await fetch("https://admin.atlasluxe.uz/api/tur/list");
        const data = await response.json();
        setTurList(data);
      } catch (error) {
        console.error("Error fetching tur list:", error);
      }
    };

    fetchTurList();
  }, []);

  function modalClick() {
    setActive(true);
    modal.setModal(!modal.modal);
  }
  return (
    <div className="container mx-auto">
      <h2 className="mt-[58px] mb-4 text-[#14183E] text-[50px] font-bold text-center max-md:text-4xl capitalize">
        {t("umra")}
      </h2>
      <p className="font-medium mb-4 md:text-lg">{t("umra1")}</p>
      <p className="font-medium mb-4 md:text-lg">{t("umra2")}</p>
      <div className="flex flex-col mt-20">
        {turList.map(
          (tur) =>
            tur.type === "umra" && (
              <div
                key={tur.id}
                className="mb-6 flex max-md:mx-2 max-md:flex-col bg-white rounded-2xl overflow-hidden"
              >
                <div className="w-1/4 max-md:w-full ">
                  <img
                    className="w-full h-[325px]"
                    src={tur.photo_uz}
                    alt={tur.name_uz}
                  />
                </div>
                <div className="flex flex-col w-3/4 max-md:w-full md:ml-6 max-md:px-4">
                  <h3 className="text-2xl text-title-color mb-3 mt-4">
                    {tur[`name_${i18n.language}`]}
                  </h3>
                  <div className="flex justify-between md:mr-8">
                    <div className="flex mb-3">
                      <img
                        className="w-6 h-6 mr-2"
                        src="./adress.svg"
                        alt="address"
                      />
                      <p className="text-black/60 ">
                        {tur[`name_${i18n.language}`]}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <img className="h-6" src="./clock.svg" alt="clock icon" />
                      <p className="ml-4 text-[#5E6282] lowercase">
                        {tur.date}&nbsp;{t("kun")}
                      </p>
                    </div>
                  </div>

                  <p className="text-black/80 grow text-justify md:mr-8 line-clamp-5 mb-8">
                    {tur[`desc_${i18n.language}`]}
                  </p>
                  <div className="flex justify-between">
                    <div className="flex mb-3 items-center">
                      <img
                        className="w-6 h-6 mr-2"
                        src="./money.svg"
                        alt="money"
                      />
                      <p className="text-text-color text-xl font-medium max-md:text-sm">
                        {tur.price}
                      </p>
                    </div>
                    <button
                      onClick={modalClick}
                      className="py-4 px-6 rounded-xl text-white button_gradient w-[200px] mb-4 md:mr-8 max-md:px-3 max-md:py-2 max-md:w-[160px]"
                    >
                      {t("button")}
                    </button>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Umra;
