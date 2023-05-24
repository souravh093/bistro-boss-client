import React from "react";

const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
  return (
    <div className="card w-full bg-base-100 shadow-md">
      <figure className="relative">
        <img className="w-full" src={image} alt="Shoes" />
        <p className="absolute right-5 top-5 bg-gray-800 text-white font-bold px-5 py-2 rounded-md">${price}</p>
      </figure>
      <div className="card-body">
        <h2 className="text-3xl font-semibold">{name}</h2>
        <p>{recipe}</p>
        <button className="mx-auto uppercase w-1/3 btn btn-outline hover:bg-orange-50 hover:text-black border-0 border-b-2 border-orange-400 mt-5">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
