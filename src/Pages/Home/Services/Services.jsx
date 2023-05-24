import React from "react";
import Bg from "../../../assets/home/chef-service.jpg";

const Services = () => {
  return (
    <div
      className="hero py-28 px-28 bg-fixed"
      style={{
        backgroundImage: `url(${Bg})`,
      }}
    >
      <div className="hero-overlay bg-white"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl py-16">
          <h1 className="mb-5 text-5xl text-gray-700 font-bold">Bistro Boss</h1>
          <p className="mb-5 text-gray-700">
            Experience an exquisite culinary journey at our fine dining
            restaurant. Indulge in a sophisticated ambiance where every detail
            is carefully crafted to create a memorable dining experience. Our
            expert chefs have curated a menu featuring an array of gourmet
            dishes made from the finest ingredients sourced locally and
            internationally. Impeccable service, elegant decor, and a
            thoughtfully curated wine list complement our
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
