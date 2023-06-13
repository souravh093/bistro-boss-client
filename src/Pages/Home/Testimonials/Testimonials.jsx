import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://bistro-boss-server-neon-iota.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className="my-20">
      <SectionTitle
        subHeading={"What Our Clients Say"}
        heading={"Testimonials"}
      />
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {review.map((rev) => (
            <SwiperSlide key={rev._id}>
              <div className="my-16 mx-24 gap-5 flex flex-col items-center">
                <Rating style={{ maxWidth: 180 }} value={rev.rating} />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  width="64"
                  height="64"
                >
                  <rect width="256" height="256" fill="none" />
                  <path d="M116,72v88a48,48,0,0,1-48,48,8,8,0,0,1,0-16,32.1,32.1,0,0,0,32-32v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56h60A16,16,0,0,1,116,72ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32.1,32.1,0,0,1-32,32,8,8,0,0,0,0,16,48,48,0,0,0,48-48V72A16,16,0,0,0,216,56Z" />
                </svg>
                <p className="text-center">{rev.details}</p>
                <h3 className="text-2xl text-orange-400">{rev.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
