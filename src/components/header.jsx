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
  const { i18n } = useTranslation("global");
  const [bannerLists, setBannerLists] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axios.get(
          "https://admin.atlasluxe.uz/api/banner/list"
        );
        setBannerLists(response.data);
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
          <SwiperSlide key={banner.id} className="bg-transparent ">
            <img
              src={banner[`photo_${i18n.language}`]}
              alt={banner[`photo_${i18n.language}`]}
              className="!w-full mx-auto object-cover rounded-xl"
              style={{ height: window.innerWidth <= 768 ? 'auto' : '494px' }}
              onClick={() => modal.setModal(!modal.modal)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Header;

// onClick={() => modal.setModal(!modal.modal)}
