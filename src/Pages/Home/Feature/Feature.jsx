import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featureImg from "../../../assets/home/featured.jpg";
import "./Feature.css";

const Feature = () => {
  return (
    <div className="feature  bg-fixed pt-10 my-20">
      <div>
        <SectionTitle subHeading={"check it out"} heading={"Featured Item"} />
      </div>
      <div className="md:flex text-white justify-center items-center pt-12 py-20 px-36">
        <div>
          <img src={featureImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2030</p>
          <p className="uppercase">Where can i get some</p>
          <p className="my-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
            atque harum porro itaque tempore nostrum incidunt magnam eaque
            ducimus perferendis esse, aliquid asperiores, voluptate eum sit a id
            ipsa dolores veniam quisquam.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
