import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useMenu } from "../../../hooks/useMenu";
import { Helmet } from "react-helmet-async";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiousSecure";

const ManageItem = () => {
  // Question what is mean this comma what it need to index by work
  const [menu, , refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure();

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
        axiosSecure.delete(`/menu/${id}`).then((res) => {
          console.log(res.data);
          if(res.data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };
  return (
    <div className="w-full min-h-screen bg-gray-300">
      <Helmet>
        <title>Bistro Boos | Manage Items</title>
      </Helmet>
      <div>
        <SectionTitle heading={"Manage All Item"} subHeading={"Hurry up"} />
      </div>
      <div className="w-[1000px] rounded-md bg-white p-10 mx-auto">
        <div className="uppercase mb-5 flex items-center justify-between ">
          <h2 className="text-xl font-bold">total Items: {menu.length}</h2>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => {
                const { image, name, price, _id, category } = item;
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
                    <td>{category}</td>
                    <td>{price}</td>
                    <td>
                      <button className="btn btn-warning text-white btn-xs">
                        <AiFillEdit />
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-error text-white btn-xs"
                      >
                        <AiFillDelete />
                      </button>
                    </td>
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

export default ManageItem;
