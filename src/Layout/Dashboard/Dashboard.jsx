import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  AiFillBook,
  AiFillShopping,
  AiOutlineMenu,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaHome, FaWallet } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { VscPreview } from "react-icons/vsc";
import { MdEmail } from "react-icons/md";
import { useCart } from "../../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
          {/* <!-- Sidebar content here --> */}
          <div className="flex flex-col mb-10 pl-2">
            <h2 className="text-4xl font-bold">Bistro Boss</h2>
            <p className="font-medium text-3xl">Restaurant</p>
          </div>
          <li>
            <NavLink to="/dashboard/home">
              <FaHome /> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <SlCalender /> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history">
              <FaWallet /> Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/mycart">
              <AiOutlineShoppingCart /> My Cart
              <span className="badge badge-sm">{cart.length || 0}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <VscPreview /> Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/booking">
              <AiFillBook /> My Booking
            </NavLink>
          </li>

          <div className="divider"></div>

          <li>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <AiOutlineMenu /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <AiFillShopping /> Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <MdEmail /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
