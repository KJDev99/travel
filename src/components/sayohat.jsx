import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "../index.css";
import { Autoplay } from "swiper/modules";

import { useTranslation } from "react-i18next";
const Sayohat = () => {
  const [t] = useTranslation("global");
  return (
    <div className="mb-16">
      <h2 className="text-center text-[#14183E] text-[50px] font-bold mb-8 mt-[120px] max-md:text-3xl max-md:mt-10 max-md:mb-16">
        {t("sayohat")}
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        initialSlide={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
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
        modules={[Autoplay]}
        className="mySwiper container"
      >
        <SwiperSlide className="bg-transparent rounded-2xl">
          <img className="w-full rounded-lg" src="./sayohat1.png" alt="test" />
          <h3 className="mt-4 mb-3 mx-8 text-center text-[#14183E] text-[30px] max-md:text-[24px] max-md:mt-3 max-md:mb-2">
            Rome, Italty
          </h3>
        </SwiperSlide>
        <SwiperSlide className="bg-transparent rounded-2xl ">
          <img className="w-full rounded-lg" src="./sayohat2.png" alt="test" />
          <h3 className="mt-4 mb-3 mx-8 text-center text-[#14183E] text-[30px] max-md:text-[24px] max-md:mt-3 max-md:mb-2">
            Indonesia
          </h3>
        </SwiperSlide>
        <SwiperSlide className="bg-transparent rounded-2xl ">
          <img className="w-full rounded-lg" src="./sayohat3.png" alt="test" />
          <h3 className="mt-4 mb-3 mx-8 text-center text-[#14183E] text-[30px] max-md:text-[24px] max-md:mt-3 max-md:mb-2">
            Maldives
          </h3>
        </SwiperSlide>
        <SwiperSlide className="bg-transparent rounded-2xl">
          <img className="w-full rounded-lg" src="./sayohat1.png" alt="test" />
          <h3 className="mt-4 mb-3 mx-8 text-center text-[#14183E] text-[30px] max-md:text-[24px] max-md:mt-3 max-md:mb-2">
            Rome, Italty
          </h3>
        </SwiperSlide>
        <SwiperSlide className="bg-transparent rounded-2xl ">
          <img className="w-full rounded-lg" src="./sayohat2.png" alt="test" />
          <h3 className="mt-4 mb-3 mx-8 text-center text-[#14183E] text-[30px] max-md:text-[24px] max-md:mt-3 max-md:mb-2">
            Indonesia
          </h3>
        </SwiperSlide>
        <SwiperSlide className="bg-transparent rounded-2xl ">
          <img className="w-full rounded-lg" src="./sayohat3.png" alt="test" />
          <h3 className="mt-4 mb-3 mx-8 text-center text-[#14183E] text-[30px] max-md:text-[24px] max-md:mt-3 max-md:mb-2">
            Maldives
          </h3>
        </SwiperSlide>
        <SwiperSlide className="bg-transparent rounded-2xl">
          <img className="w-full rounded-lg" src="./sayohat1.png" alt="test" />
          <h3 className="mt-4 mb-3 mx-8 text-center text-[#14183E] text-[30px] max-md:text-[24px] max-md:mt-3 max-md:mb-2">
            Rome, Italty
          </h3>
        </SwiperSlide>
        <SwiperSlide className="bg-transparent rounded-2xl ">
          <img className="w-full rounded-lg" src="./sayohat2.png" alt="test" />
          <h3 className="mt-4 mb-3 mx-8 text-center text-[#14183E] text-[30px] max-md:text-[24px] max-md:mt-3 max-md:mb-2">
            Indonesia
          </h3>
        </SwiperSlide>
        <SwiperSlide className="bg-transparent rounded-2xl ">
          <img className="w-full rounded-lg" src="./sayohat3.png" alt="test" />
          <h3 className="mt-4 mb-3 mx-8 text-center text-[#14183E] text-[30px] max-md:text-[24px] max-md:mt-3 max-md:mb-2">
            Maldives
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Sayohat;
