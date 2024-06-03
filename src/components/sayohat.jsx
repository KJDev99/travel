import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";
import { useState, useEffect } from "react";
import "../index.css";
import { Autoplay } from "swiper/modules";

import { useTranslation } from "react-i18next";
const Sayohat = () => {
  const [t, i18n] = useTranslation("global");
  const [sayohatLists, setSayohatLists] = useState([]);

  useEffect(() => {
    const fetchSayohatList = async () => {
      try {
        const response = await axios.get(
          "https://admin.atlasluxe.uz/api/travel/list"
        );
        setSayohatLists(response.data);
      } catch (error) {
        console.error("Error fetching sayohat list:", error);
      }
    };
    fetchSayohatList();
  }, []);

  return (
    <div className="mb-16">
      <h2 className="text-center text-[#14183E] text-[50px] font-bold mb-8 mt-[120px] max-md:text-3xl max-md:mt-10 max-md:mb-16">
        {t("sayohat")}
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        initialSlide={2}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper container "
      >
        {sayohatLists.map((sayohat) => (
          <SwiperSlide key={sayohat.id} className="bg-white rounded-2xl ">
            <img
              className="rounded-lg h-[380px] object-cover"
              src={sayohat.photo_uz}
              alt={sayohat.name_uz}
            />
            <h3 className="mt-4 mb-3 mx-8 text-center text-[#14183E] text-[30px] max-md:text-[24px] max-md:mt-3 max-md:mb-2 line-clamp-1">
              {sayohat[`country_${i18n.language}`]}
            </h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Sayohat;
