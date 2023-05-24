import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({ bg, title, des }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={bg}
      bgImageAlt="the dog"
      strength={-200}
      className="h-[700px]"
    >
      <div className="hero py-28 h-[700px] px-28">
        <div className="hero-overlay bg-black opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl py-16">
            <h1 className="mb-5 text-5xl text-gray-100 font-bold">{title}</h1>
            <p className="mb-5 text-gray-100">{des}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
