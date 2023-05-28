import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { name, image, price, recipe } = item;
  const handleAddToCart = (item) => {
    const { name, image, price, _id } = item;
    if (user && user.email) {
      const cartItem = { itemId: _id, name, image, price, email: user.email };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire("Good job!", "You Are Add To Cart", "success");
          }
        });
    } else {
      Swal.fire({
        title: "Please Login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card w-full bg-base-100 shadow-md">
      <figure className="relative">
        <img className="w-full" src={image} alt="Shoes" />
        <p className="absolute right-5 top-5 bg-gray-800 text-white font-bold px-5 py-2 rounded-md">
          ${price}
        </p>
      </figure>
      <div className="card-body">
        <h2 className="text-3xl font-semibold">{name}</h2>
        <p>{recipe}</p>
        <button
          onClick={() => handleAddToCart(item)}
          className="mx-auto uppercase w-1/3 btn btn-outline hover:bg-orange-50 hover:text-black border-0 border-b-2 border-orange-400 mt-5"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
