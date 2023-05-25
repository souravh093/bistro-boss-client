import React from "react";
import googleLogo from "../../assets/icon/google.svg";
import githubLogo from "../../assets/icon/github.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data)
  };



  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white shadow-md rounded-lg p-8 w-1/3">
        <h2 className="text-3xl text-center text-gray-800 font-bold mb-6">
          Register
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500"
              name="name"
              {...register("name", { required: true })}
            />
            {errors.name && <span className="text-red-500">Name is required *</span>}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500"
              name="email"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-red-500">Email is required</span>}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500"
              name="password"
              {...register("password", { required: true, minLength: 6, maxLength: 20 })}
              />
              {errors.password && <span className="text-red-500">Password is min 6, max 20 required</span>}
          </div>
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <div className="flex items-center justify-center mt-6">
          <div className="border-t border-gray-300 w-full" />
          <span className="text-gray-500 w-full mx-4">Or Sign Up With</span>
          <div className="border-t border-gray-300 w-full" />
        </div>
        <div className="flex justify-center mt-6 space-x-4">
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-blue-500 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <img src={googleLogo} alt="" />
          </button>
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <img src={githubLogo} alt="" />
          </button>
        </div>
        <div className="flex justify-center mt-6 text-gray-500">
          <span>Already have an account?</span>
          <Link
            to="/login"
            className="text-blue-500 ml-1 hover:text-blue-700 font-semibold"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
