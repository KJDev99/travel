import axios from "axios";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { IoMdStar } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../index.css";
import { EffectFlip, Navigation } from "swiper/modules";

const Mehmonxona = () => {
  const [t, i18n] = useTranslation("global");
  const [hotelList, setHotelList] = useState([]);

  useEffect(() => {
    const fetchHotelList = async () => {
      try {
        const response = await axios.get(
          "https://admin.atlasluxe.uz/api/hotel/list"
        );
        setHotelList(response.data);
        console.log(response.data[0].photos);
      } catch (error) {
        console.error("Error fetching hotel list:", error);
      }
    };

    fetchHotelList();
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="mt-[75px] max-md:mt-[40px] text-center font-Volkhov text-[#14183E] text-[50px] font-bold mb-8 max-md:text-3xl">
        {t("navbar.menu2")}
      </h2>
      <div className="grid lg:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-[40px] max-md:gap-[60px] mb-[100px] max-md:mb-10 relative">
        {hotelList.map((hotel, hotelIndex) => (
          <div
            key={hotel.id}
            className="tur_item bg-white rounded-3xl pb-[30px] max-md:pb-5 overflow-hidden"
          >
            <div>
              <Swiper
                effect={"flip"}
                grabCursor={true}
                pagination={true}
                navigation={true}
                modules={[EffectFlip, Navigation]}
                className="mySwiper"
              >
                {hotel.photos.map((photo, photoIndex) => (
                  <SwiperSlide
                    className="h-[360px]"
                    key={`${hotelIndex}-${photoIndex}`}
                  >
                    <img
                      className="w-80% h-full object-cover"
                      src={photo.photo}
                      alt={`Hotel Image ${hotelIndex}-${photoIndex}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <h3 className="mt-4 mb-2 px-[12px] text-title-color font-semibold">
              {hotel[`name_${i18n.language}`]}
            </h3>
            <div className="flex justify-between px-[12px]">
              <div className="flex mb-3">
                <img
                  className="w-6 h-6 mr-2"
                  src="./adress.svg"
                  alt="address"
                />
                <p className="text-black/60">
                  {hotel[`address_${i18n.language}`]}
                </p>
              </div>
              <div className="flex">
                {[...Array(parseInt(hotel.star))].map((_, index) => (
                  <IoMdStar key={index} className="text-[#FFA90F]" />
                ))}
                {[...Array(5 - parseInt(hotel.star))].map((_, index) => (
                  <IoMdStar
                    key={index + parseInt(hotel.star)}
                    className="text-[#E5E7EB]"
                  />
                ))}
              </div>
            </div>
            <p className="text-black/80 px-3 text-justify">
              {hotel[`desc_${i18n.language}`]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mehmonxona;
