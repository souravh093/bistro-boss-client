import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img from "../../../assets/home/01.jpg";

const Recommends = () => {
  return (
    <div className="mb-20">
      <div>
        <SectionTitle
          heading={"CHEF RECOMMENDS"}
          subHeading={"---Should Try---"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="card w-full bg-base-100 shadow-xl">
          <figure>
            <img src={img} alt="Shoes" />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-3xl font-semibold">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <button className="mx-auto uppercase w-1/3 btn btn-outline hover:bg-orange-50 hover:text-black border-0 border-b-2 border-orange-400 mt-5">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommends;
