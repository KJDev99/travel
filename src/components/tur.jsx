import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
const Tur = () => {
  const [t, i18n] = useTranslation("global");

  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get(
          "https://admin.atlasluxe.uz/api/tur/list"
        );
        setTours(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto">
      <h2 className="text-center text-[#14183E] text-[50px] font-bold mb-8 max-md:text-3xl">
        {t("tur")}
      </h2>
      <div className="grid lg:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-[40px] max-md:gap-[60px] mb-[100px] max-md:mb-10 relative">
        {tours
          .filter((tour) => tour.is_xit)
          .map((tour) => (
            <div
              key={tour.id}
              className="tur_item bg-white rounded-3xl pb-[30px] max-md:pb-5"
            >
              <img
                className="w-full h-[400px] object-cover rounded-3xl max-md:h-[280px]"
                src={tour.photo_uz}
                alt={tour.name_uz}
              />
              <h3 className="mt-4 mb-3 mx-8 text-[#5E6282]">{tour[`name_${i18n.language}`]}</h3>
              <div className="flex justify-between px-8">
                <div className="flex">
                  <img src="./clock.svg" alt="clock icon" />
                  <p className="ml-4 text-[#5E6282]">10 kun</p>
                </div>
                <p className="text-[#5E6282]">
                  {tour.price.toLocaleString()} so’m
                </p>
              </div>
            </div>
          ))}

        <div className="max-md:hidden absolute right-[-65px] z-[-1] top-12">
          <img src="./Decore.svg" alt="" />
        </div>
        <div className="max-md:hidden absolute left-[-65px] z-[-1] bottom-20 rotate-180">
          <img src="./Decore.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Tur;
