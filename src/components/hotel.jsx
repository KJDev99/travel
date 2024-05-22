import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "../index.css";

import { IoMdStar } from "react-icons/io";

export default function Hotel() {
  return (
    <div className="bg-[#1A2031] pb-[200px]">
      <h2 className="pt-[60px] pb-[100px] text-center text-[50px] text-white max-md:text-4xl">
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
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="bg-white rounded-lg">
          <img className="rounded-lg" src="./test.png" alt="" />
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
          <img className="rounded-lg" src="./test.png" alt="" />
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
          <img className="rounded-lg" src="./test.png" alt="" />
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
          <img className="rounded-lg" src="./test.png" alt="" />
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
          <img className="rounded-lg" src="./test.png" alt="" />
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
          <img className="rounded-lg" src="./test.png" alt="" />
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
          <img className="rounded-lg" src="./test.png" alt="" />
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
          <img className="rounded-lg" src="./test.png" alt="" />
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
          <img className="rounded-lg" src="./test.png" alt="" />
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
