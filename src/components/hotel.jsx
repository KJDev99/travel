import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "../index.css";
import { Pagination } from "swiper/modules";

import { IoMdStar } from "react-icons/io";

export default function Hotel() {
  return (
    <div className="bg-[#1A2031] pb-[120px] max-md:pb-16">
      <h2 className="pt-[60px] pb-[100px] text-center text-[50px] text-white max-md:text-3xl max-md:pt-10 max-md:pb-12">
        Ekskluziv mehmonxonalar
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
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
        <SwiperSlide className="bg-white rounded-lg">
          <img className="rounded-lg" src="./hotel1.png" alt="" />
          <div className="flex justify-between mt-[10px] mb-2 px-[18px]">
            <span>Antalya</span>
            <div className="flex ">
              <IoMdStar className="text-[#FFA90F]" />
              <IoMdStar className="text-[#FFA90F]" />
              <IoMdStar className="text-[#FFA90F]" />
              <IoMdStar className="text-[#FFA90F]" />
              <IoMdStar className="text-[#FFA90F]" />
            </div>
          </div>
          <h3 className="text-[#112B3C] text-[18px] mb-8 text-left px-[18px]">
            CLUB PRIVE BY RIXOS GOCEK
          </h3>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-lg ">
          <img className="rounded-lg" src="./hotel2.png" alt="" />
          <div className="flex justify-between mt-[10px] mb-2 px-[18px]">
            <span>Antalya</span>
            <div className="flex ">
              <IoMdStar className="text-[#FFA90F]" />
              <IoMdStar className="text-[#FFA90F]" />
              <IoMdStar className="text-[#FFA90F]" />
              <IoMdStar className="text-[#FFA90F]" />
              <IoMdStar className="text-[#FFA90F]" />
            </div>
          </div>
          <h3 className="text-[#112B3C] text-[18px] mb-8 text-left px-[18px]">
            CLUB PRIVE BY RIXOS GOCEK
          </h3>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-lg ">
          <img className="rounded-lg" src="./hotel3.png" alt="" />
          <div className="flex justify-between mt-[10px] mb-2 px-[18px]">
            <span>Antalya</span>
            <div className="flex ">
              <IoMdStar className="text-[#FFA90F]" />
              <IoMdStar className="text-[#FFA90F]" />
              <IoMdStar className="text-[#FFA90F]" />
              <IoMdStar className="text-[#FFA90F]" />
              <IoMdStar className="text-[#FFA90F]" />
            </div>
          </div>
          <h3 className="text-[#112B3C] text-[18px] mb-8 text-left px-[18px]">
            CLUB PRIVE BY RIXOS GOCEK
          </h3>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-lg ">
          <img className="rounded-lg" src="./hotel4.png" alt="" />
          <div className="flex justify-between mt-[10px] mb-2 px-[18px]">
            <span>Antalya</span>
            <div className="flex ">
              <IoMdStar className="text-[#FFA90F]" />
              <IoMdStar className="text-[#FFA90F]" />
              <IoMdStar className="text-[#FFA90F]" />
              <IoMdStar className="text-[#FFA90F]" />
              <IoMdStar className="text-[#FFA90F]" />
            </div>
          </div>
          <h3 className="text-[#112B3C] text-[18px] mb-8 text-left px-[18px]">
            CLUB PRIVE BY RIXOS GOCEK
          </h3>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-lg ">
          <img className="rounded-lg" src="./hotel1.png" alt="" />
          <div className="flex justify-between mt-[10px] mb-2 px-[18px]">
            <span>Antalya</span>
            <div className="flex ">
              <IoMdStar className="text-[#FFA90F]" />
              <IoMdStar className="text-[#FFA90F]" />
              <IoMdStar className="text-[#FFA90F]" />
              <IoMdStar className="text-[#FFA90F]" />
              <IoMdStar className="text-[#FFA90F]" />
            </div>
          </div>
          <h3 className="text-[#112B3C] text-[18px] mb-8 text-left px-[18px]">
            CLUB PRIVE BY RIXOS GOCEK
          </h3>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-lg ">
          <img className="rounded-lg" src="./hotel2.png" alt="" />
          <div className="flex justify-between mt-[10px] mb-2 px-[18px]">
            <span>Antalya</span>
            <div className="flex ">
              <IoMdStar className="text-[#FFA90F]" />
              <IoMdStar className="text-[#FFA90F]" />
              <IoMdStar className="text-[#FFA90F]" />
              <IoMdStar className="text-[#FFA90F]" />
              <IoMdStar className="text-[#FFA90F]" />
            </div>
          </div>
          <h3 className="text-[#112B3C] text-[18px] mb-8 text-left px-[18px]">
            CLUB PRIVE BY RIXOS GOCEK
          </h3>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-lg ">
          <img className="rounded-lg" src="./hotel3.png" alt="" />
          <div className="flex justify-between mt-[10px] mb-2 px-[18px]">
            <span>Antalya</span>
            <div className="flex ">
              <IoMdStar className="text-[#FFA90F]" />
              <IoMdStar className="text-[#FFA90F]" />
              <IoMdStar className="text-[#FFA90F]" />
              <IoMdStar className="text-[#FFA90F]" />
              <IoMdStar className="text-[#FFA90F]" />
            </div>
          </div>
          <h3 className="text-[#112B3C] text-[18px] mb-8 text-left px-[18px]">
            CLUB PRIVE BY RIXOS GOCEK
          </h3>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-lg ">
          <img className="rounded-lg" src="./hotel4.png" alt="" />
          <div className="flex justify-between mt-[10px] mb-2 px-[18px]">
            <span>Antalya</span>
            <div className="flex ">
              <IoMdStar className="text-[#FFA90F]" />
              <IoMdStar className="text-[#FFA90F]" />
              <IoMdStar className="text-[#FFA90F]" />
              <IoMdStar className="text-[#FFA90F]" />
              <IoMdStar className="text-[#FFA90F]" />
            </div>
          </div>
          <h3 className="text-[#112B3C] text-[18px] mb-8 text-left px-[18px]">
            CLUB PRIVE BY RIXOS GOCEK
          </h3>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-lg ">
          <img className="rounded-lg" src="./hotel1.png" alt="" />
          <div className="flex justify-between mt-[10px] mb-2 px-[18px]">
            <span>Antalya</span>
            <div className="flex ">
              <IoMdStar className="text-[#FFA90F]" />
              <IoMdStar className="text-[#FFA90F]" />
              <IoMdStar className="text-[#FFA90F]" />
              <IoMdStar className="text-[#FFA90F]" />
              <IoMdStar className="text-[#FFA90F]" />
            </div>
          </div>
          <h3 className="text-[#112B3C] text-[18px] mb-8 text-left px-[18px]">
            CLUB PRIVE BY RIXOS GOCEK
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
