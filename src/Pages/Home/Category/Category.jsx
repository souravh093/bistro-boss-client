import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import catSlide1 from "../../../assets/home/slide1.jpg";
import catSlide2 from "../../../assets/home/slide2.jpg";
import catSlide3 from "../../../assets/home/slide3.jpg";
import catSlide4 from "../../../assets/home/slide4.jpg";
import catSlide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section className="mb-24">
      <SectionTitle subHeading={"From 11.00am to 10.00pm"} heading={"Order Online"} />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="flex">
          <img src={catSlide1} alt="" />
          <h3 className="text-4xl uppercase text-center text-white shadow-sm -mt-16">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={catSlide2} alt="" />
          <h3 className="text-4xl uppercase text-center text-white shadow-sm -mt-16">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={catSlide3} alt="" />
          <h3 className="text-4xl uppercase text-center text-white shadow-sm -mt-16">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={catSlide4} alt="" />
          <h3 className="text-4xl uppercase text-center text-white shadow-sm -mt-16">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={catSlide5} alt="" />
          <h3 className="text-4xl uppercase text-center text-white shadow-sm -mt-16">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
