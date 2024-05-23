import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';

import "../index.css";

// import required modules
import { Pagination } from 'swiper/modules';

const Header = ({ modal }) => {
  return (
    <div className="container mx-auto mt-[66px] mb-[120px] max-md:mt-8 max-md:mb-12">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper  rounded"
      >
        <SwiperSlide className="bg-transparent ">
          <img
            src="./hero1.jpg"
            alt="hero"
            className="!w-full mx-auto"
            // onClick={() => modal.setModal(!modal.modal)}
          />
        </SwiperSlide>
        <SwiperSlide className="bg-transparent ">
          <img
            src="./hero2.jpg"
            alt="hero"
            className="!w-full mx-auto"
            // onClick={() => modal.setModal(!modal.modal)}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;

// onClick={() => modal.setModal(!modal.modal)}
