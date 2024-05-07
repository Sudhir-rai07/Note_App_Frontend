import React, {useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from '../api/axios';
import bg from "../Images/bg.mp4";
import toast, { Toaster } from "react-hot-toast";
import noteContext from "../context/contex";
import Loader from "../Utility/Loader";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Fucked Up with this
  useEffect(() => {
    if (window.localStorage.getItem("isLoggedIn")) {
      return navigate("/note");
    }
  }, []);

  // handle login api :: /api/auth/login
  const handleLogin = async () => {
    setLoading(true);
    await axios
      .post(`/api/auth/login`, { email, password })
      .then((res) => {
        console.log(res.data);
        setEmail("");
        setPassword("");
        setLoading(false);
        window.localStorage.setItem("isLoggedIn", true);
        navigate("/note");
      })
      .catch((err) => {
        console.log(err.response);
        toast.error(err.response.data?.message);
      });
    setLoading(false);
  };
  return (
    <div className="flex items-center justify-center w-full h-screen bg-[#151314] text-white sm:justify-start">
      <Toaster />
      <div className="relative sm:w-[350px] h-full hidden sm:flex ">
        <div className="absolute top-0 left-0 w-full h-full">
          <video
            muted
            loop
            autoPlay
            className="object-cover object-center w-full h-full"
          >
            <source src={bg} />
          </video>
        </div>
      </div>
      <div className="ml-8 w-[400px] h-4/5">
        <form
          className="relative flex flex-col items-center justify-center w-full h-full"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          {/* {loading && <Loading />} */}
          <div className="absolute top-0 left-0">
            <h2 className="text-xl font-semibold ">
              Sign in to{" "}
              <span className="tracking-wider font-babas">
                <span className="text-red-700"></span>_Notes
              </span>
            </h2>
          </div>
          {loading && <Loader />}
          {/* {error && <h2 className="text-red-700">Try with valid creds...</h2>} */}
          <div className="w-4/5 px-4">
            <label htmlFor="email" className="text-[14px] font-semibold">
              Email
            </label>
            <input
              type="email"
              placeholder=""
              name="email"
              id="email"
              className="w-full px-2 py-3 mt-1 border text-black border-gray-200/[0.9] outline-none rounded-lg text-sm focus:outline-none focus:shadow-[0px_0px_2px_1px_#fbb6ce] focus:border-[#f687b3] hover:shadow-[0px_0px_3px_1px_#fed7e2] transition-all duration-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-4/5 px-4 mt-8">
            <div className="flex justify-between">
              <label htmlFor="password" className="text-[14px] font-semibold">
                Password
              </label>
              <span className="text-[12px] hover:text-blue-500 align-baseline cursor-pointer underline">
                Forget ?
              </span>
            </div>
            <input
              type="password"
              placeholder=""
              id="password"
              name="password"
              className="w-full px-2 py-3 text-black mt-1 border border-gray-200/[0.9] outline-none rounded-lg text-sm focus:outline-none focus:shadow-[0px_0px_2px_1px_#fbb6ce] focus:border-[#f687b3]/[0.8] hover:shadow-[0px_0px_3px_1px_#fed7e2] transition-all duration-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* {error && <h2 className="text-red-500">Error</h2>} */}
          </div>

          <div className="flex flex-col items-center justify-center w-4/5 ">
            <button
              type="submit"
              className="w-4/5 px-4 py-3 mt-10 text-black border-gray-200 rounded-full bg-fuchsia-500"
            >
              Log in
            </button>
            <div className="text-[11px] mt-4">
              Doesn't have an account?{" "}
              <Link
                to={"/signup"}
                className="text-blue-400 hover:text-blue-800"
              >
                create account
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
