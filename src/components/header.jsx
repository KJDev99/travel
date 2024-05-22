import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../index.css";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Header = ({ modal }) => {
  return (
    <div className="container mx-auto mt-[66px] mb-[120px] max-md:mt-8 max-md:mb-12">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper h-[495px] max-md:h-[280px] rounded"
      >
        <SwiperSlide className="bg-transparent h-[495px] max-md:h-[280px]">
          <img
            src="./hero1.jpg"
            alt="hero"
            className="!h-[495px] max-md:h-[280px] !w-[1200px] mx-auto"
            // onClick={() => modal.setModal(!modal.modal)}
          />
        </SwiperSlide>
        <SwiperSlide className="bg-transparent h-[495px] max-md:h-[280px]">
          <img
            src="./hero2.jpg"
            alt="hero"
            className="!h-[495px] max-md:h-[280px] !w-[1200px] mx-auto"
            // onClick={() => modal.setModal(!modal.modal)}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;

// onClick={() => modal.setModal(!modal.modal)}
