import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import axios from "axios";
import { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";

import "../index.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Header = ({ modal }) => {
  const [t, i18n] = useTranslation("global");
  const [bannerLists, setBannerLists] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axios.get(
          "https://admin.atlasluxe.uz/api/banner/list"
        );
        setBannerLists(response.data);
        console.log(bannerLists);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBanners();
  }, []);

  return (
    <div className="container mx-auto mt-[66px] mb-[120px] max-md:mt-8 max-md:mb-12">
      <Swiper
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper  rounded"
      >
        {bannerLists.map((banner) => (
          <SwiperSlide key={banner.id} className="bg-transparent relative">
            <img
              src={banner.photo}
              alt={banner.photo}
              className="!w-full mx-auto object-cover rounded-xl"
              style={{ height: window.innerWidth <= 768 ? "auto" : "494px" }}
              onClick={() => modal.setModal(!modal.modal)}
            />
            <h1 className="text-6xl font-Poppins px-20 w-2/3 max-md:w-full max-md:px-5 max-md:text-2xl absolute z-50 top-[30%] left-0 text-left uppercase font-semibold text-white translate-y-[-50%]">
              {banner[`title_${i18n.language}`]}
              {/* BU Yerda text bo'ladi taxminan 2 qator */}
            </h1>
            <button
              onClick={() => modal.setModal(!modal.modal)}
              className="py-4  rounded-xl text-white button_gradient px-10 mx-20 max-md:mx-5 mt-5 absolute bottom-10 max-md:bottom-4 max-md:px-5 max-md:py-2 max-md:text-sm max-md:rounded-lg left-0"
            >
              {t("button")}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Header;

// onClick={() => modal.setModal(!modal.modal)}
