import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiousSecure";
import Swal from "sweetalert2";

const imgHostingToken = import.meta.env.VITE_UPLOAD_TOKEN;

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const imgHostingUrl = `https://api.imgbb.com/1/upload?key=${imgHostingToken}`;
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(imgHostingUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const image = imgResponse.data.display_url;
          const { name, price, category, recipe } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            recipe,
            image: image,
          };

          console.log(newItem);
          axiosSecure.post("/menu", newItem).then((data) => {
            console.log("after posting new menu item", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Item added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };
  return (
    <div className="w-full bg-gray-100 min-h-screen">
      <SectionTitle subHeading={"What's new"} heading={"Add an item"} />
      <Helmet>
        <title>Bistro Boos | Add Item</title>
      </Helmet>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white w-[1000px] mx-auto p-10"
      >
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Recipe Name*</span>
          </label>
          <input
            type="text"
            placeholder="Recipe Name"
            className="input input-bordered w-full"
            {...register("name", { required: true, maxLength: 80 })}
          />
        </div>
        <div className="grid grid-cols-2 gap-10 my-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select
              defaultValue={"Pick One"}
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option disabled>Category</option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Salad</option>
              <option>Drinks</option>
              <option>Desi</option>
              <option>Dessert</option>
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              {...register("price", { required: true, maxLength: 80 })}
              type="number"
              placeholder="Price"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe Details*</span>
          </label>
          <textarea
            {...register("recipe", { required: true, maxLength: 400 })}
            className="textarea textarea-bordered h-52"
            placeholder="Recipe Details"
          ></textarea>
        </div>
        <input
          {...register("image", { required: true })}
          type="file"
          className="file-input w-full max-w-xs my-5"
        />
        <input type="submit" value="Add Item" className="block btn btn-xl" />
      </form>
    </div>
  );
};

export default AddItem;
