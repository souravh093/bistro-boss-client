import React, { useContext, useEffect, useRef, useState } from "react";
import googleLogo from "../../assets/icon/google.svg";
import githubLogo from "../../assets/icon/github.svg";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [disable, setDisable] = useState(true);
  const captchaRef = useRef();
  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value) == true) {
      setDisable(false);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white shadow-md rounded-lg p-8 md:w-1/3">
        <h2 className="text-3xl text-center text-gray-800 font-bold mb-6">
          Login
        </h2>
        <form onSubmit={handleLogin}>
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
              required
              name="email"
            />
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
              required
              name="password"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="captcha"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              <LoadCanvasTemplate />
            </label>
            <input
              id="captcha"
              type="text"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500"
              required
              ref={captchaRef}
              name="captcha"
            />
            <button
              onClick={handleValidateCaptcha}
              className="btn btn-primary my-3"
            >
              Validate
            </button>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="rememberPassword"
                className="text-blue-500 rounded focus:ring-blue-500"
                name="checkbox"
              />
              <label htmlFor="rememberPassword" className="text-gray-700 ml-2">
                Remember me
              </label>
            </div>
            <div className="mb-6">
              <a href="#" className="text-blue-500 text-sm hover:text-blue-700">
                Forgot password?
              </a>
            </div>
          </div>
          <button
            className={`w-full ${
              disable || 'bg-blue-500 hover:bg-blue-400'
            } bg-blue-300 hover:bg-blue-300  text-white font-semibold py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
            type="submit"
            disabled={disable}
          >
            Sign In
          </button>
        </form>
        <div className="flex items-center justify-center mt-6">
          <div className="border-t border-gray-300 w-full" />
          <span className="text-gray-500 mx-10 w-full">Or Sign In With</span>
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
          <span>Don not have an account?</span>
          <Link
            to="/register"
            className="text-blue-500 ml-1 hover:text-blue-700 font-semibold"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
