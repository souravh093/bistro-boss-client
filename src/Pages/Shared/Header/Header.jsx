import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useCart } from "../../../hooks/useCart";
import { useAdmin } from "../../../hooks/useAdmin";

const Header = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin()
  const { logoutUser, user } = useContext(AuthContext);
  const handleLogout = () => {
    logoutUser()
      .then(() => {})
      .catch((error) => console.log(error.message));
  };
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
      <li>
        <Link to={isAdmin ? '/dashboard/adminhome' : '/dashboard/userhome'}>Dashboard</Link>
      </li>
      <li>
        <Link to="dashboard/mycart">
          <label className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">{cart?.length || 0}</span>
            </div>
          </label>
        </Link>
      </li>

      {user ? (
        <div className="flex items-center">
          <button onClick={handleLogout} className="btn btn-ghost">
            Logout
          </button>
        </div>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-black text-white max-w-screen-2xl bg-opacity-30">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-700 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Get started</a>
      </div>
    </div>
  );
};

export default Header;
