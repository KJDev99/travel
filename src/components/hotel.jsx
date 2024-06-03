import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { useState, useEffect } from "react";

import { IoMdStar } from "react-icons/io";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../index.css";
import { EffectFlip, Navigation, Pagination } from "swiper/modules";

export default function Hotel() {
  const [t, i18n] = useTranslation("global");
  const [hotelList, setHotelList,] = useState([]);

  useEffect(() => {
    const fetchHotelList = async () => {
      try {
        const response = await axios.get(
          "https://admin.atlasluxe.uz/api/hotel/list"
        );
        setHotelList(response.data);
      } catch (error) {
        console.error("Error fetching hotel list:", error);
      }
    };

    fetchHotelList();
  }, []);
  return (
    <div className="bg-[#1A2031] pb-[120px] max-md:pb-16">
      <h2 className="pt-[60px] pb-[100px] text-center text-[50px] text-white max-md:text-3xl max-md:pt-10 max-md:pb-12">
        {t("mehmonxona")}
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        initialSlide={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper container"
      >
        {hotelList.map(
          (hotel, hotelIndex) =>
            hotel.is_exclusive && (
              <SwiperSlide key={hotel.id} className="bg-white rounded-2xl overflow-hidden">
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
                    className="h-[290px]"
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
                <h3 className="text-[#112B3C] text-[22px]  text-left px-[18px] font-semibold">
                  {hotel[`name_${i18n.language}`]}
                </h3>
                <div className="flex justify-between mt-[10px] mb-4 px-[18px]">
                  <span className="text-sm">{hotel[`address_${i18n.language}`]}</span>
                  <div className="flex ">
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
                
              </SwiperSlide>
            )
        )}
      </Swiper>
    </div>
  );
}
