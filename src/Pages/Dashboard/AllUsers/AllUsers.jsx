import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaTrash, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiousSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        console.log(data);
      });
  };

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="w-full bg-gray-100 min-h-screen">
      <Helmet>
        <title>Bistro Boss | All Users</title>
      </Helmet>
      <SectionTitle heading={"Manage All Items"} subHeading={"Hurry Up!"} />
      <div className="bg-white w-[1000px] mx-auto p-10">
        <h2 className="text-3xl mb-5 font-bold">Total Users: {users.length}</h2>
        <div>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => {
                  const { _id, name, email } = user;
                  return (
                    <tr key={_id}>
                      <th>{index + 1}</th>
                      <td>{name}</td>
                      <td>{email}</td>
                      <td>
                        {user.role === "admin" ? (
                          "admin"
                        ) : (
                          <button
                            onClick={() => handleMakeAdmin(user)}
                            className="btn btn-warning text-white btn-xs"
                          >
                            <FaUserShield />
                          </button>
                        )}
                      </td>
                      <td>
                        <button
                          onClick={() => handleDelete(_id)}
                          className="btn btn-error text-white btn-xs"
                        >
                          <FaTrash />
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
    </div>
  );
};

export default AllUsers;
