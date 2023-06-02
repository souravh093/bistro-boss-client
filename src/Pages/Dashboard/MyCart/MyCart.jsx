import React from "react";
import { Helmet } from "react-helmet-async";
import { useCart } from "../../../hooks/useCart";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((acu, curr) => acu + curr.price, 0).toFixed(2);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="w-full min-h-screen bg-gray-300">
      <Helmet>
        <title>Bistro Boos | My Cart</title>
      </Helmet>
      <div>
        <SectionTitle heading={"WANNA ADD MORE?"} subHeading={"My cart"} />
      </div>
      <div className="w-[1000px] rounded-md bg-white p-10 mx-auto">
        <div className="uppercase mb-5 flex items-center justify-between ">
          <h2 className="text-xl font-bold">total orders: {cart.length}</h2>
          <h2 className="text-xl font-bold">total price: ${total}</h2>
          <Link to="/dashboard/payment" className="btn btn-warning btn-sm">pay</Link>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => {
                const { image, name, price, _id } = item;
                return (
                  <tr key={_id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </td>
                    <td>{name}</td>
                    <td>{price}</td>
                    <th>
                      <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-error text-white btn-xs"
                      >
                        <AiFillDelete />
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
