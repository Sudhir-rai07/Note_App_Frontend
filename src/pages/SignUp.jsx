import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from '../api/axios';
import toast, { Toaster } from "react-hot-toast";
import bg from "../Images/bg.mp4";
import Loader from '../Utility/Loader'
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [loadng, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()
useEffect(()=>{
  if(window.localStorage.getItem("isLoggedIn")){
    return navigate("/note")
  }
}, [])

const handlePasswordView = () =>{
  setShowPassword(prev => !prev)
}

  const handleSignUp = async (e) => {
    e.preventDefault();
    // setLoading(true)
    const userPayload = {
      username,
      email,
      password,
      confirmPassword,
      gender,
    };

    if(!username || !password || !email || !confirmPassword || !gender) return toast.error("All fields are required")
    
      if(password != confirmPassword) return toast.error("Password does not match")
      window.localStorage.removeItem("accessToken")
    setLoading(true)
    await axios
      .post(`/api/auth/signup`, userPayload)
      .then(({data}) => {
        setUsername("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        setGender("")
        toast.success(data?.message)
        console.log(data)
        setLoading(false)
        window.localStorage.setItem("isLoggedIn", true)
        window.localStorage.setItem("accessToken", data?.token)
        navigate("/login")
        }
      )
      .catch((err) => {
        console.log("object")
        
        if(err.response){
          toast.error(err.response.data.message)
        } else {
          toast.error(err.message)
        }
      })
      .finally(()=>{
        setLoading(false)
      })
  };


  return (
    <div className="relative flex items-center justify-center w-full h-screen text-black bg-white">
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
      <Toaster />
      <div className="flex flex-col items-center justify-center w-full sm:flex-row sm:w-4/5 h-4/5">
        <div className="flex flex-col items-center justify-center mb-4 sm:mb-0">
          <h2 className="block text-xl font-semibold text-start sm:hidden">
            Be a member of <br className="hidden sm:block" />{" "}
            <span className="tracking-wider font-babas">
              <span className="text-red-700"></span>X_Notes
            </span>
          </h2>
        </div>
        <form
          className="relative flex flex-col items-center justify-center w-full h-full sm:w-1/2"
          onSubmit={handleSignUp}
        >
        <div className="text-center">
              {loadng && <Loader />  }
            </div>
          <div className="w-[90%] px-4">
            <label htmlFor="username" className="text-[14px] font-semibold">
              Username
            </label>
            <input
              type="text"
              placeholder=""
              id="username"
              className="w-full px-2 py-3 mt-1 border border-gray-200/[0.9] outline-none rounded-lg text-sm focus:outline-none focus:shadow-[0px_0px_2px_1px_#fbb6ce] focus:border-[#f687b3] hover:shadow-[0px_0px_3px_1px_#fed7e2] transition-all duration-200"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="w-[90%] px-4 mt-2">
            <label htmlFor="email" className="text-[14px] font-semibold">
              Email
            </label>
            <input
              type="email"
              placeholder=""
              id="email"
              className="w-full px-2 py-3 mt-1 border border-gray-200/[0.9] outline-none rounded-lg text-sm focus:outline-none focus:shadow-[0px_0px_2px_1px_#fbb6ce] focus:border-[#f687b3] hover:shadow-[0px_0px_3px_1px_#fed7e2] transition-all duration-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-[90%] px-4 mt-2">
            <div className="flex justify-between">
              <label htmlFor="password" className="text-[14px] font-semibold">
                Password
              </label>
            </div>
            <input
               type={showPassword ? "text": "password"}
              placeholder=""
              id="password"
              className={`w-full px-2 py-3 mt-1 border border-gray-200/[0.9] outline-none rounded-lg text-sm focus:outline-none focus:shadow-[0px_0px_2px_1px_#fbb6ce] focus:border-[#f687b3]/[0.8] hover:shadow-[0px_0px_3px_1px_#fed7e2] transition-all duration-200`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="w-[90%] px-4 mt-2 relative">
            <div className="flex justify-between">
              <label
                htmlFor="confirmPassword"
                className="text-[14px] font-semibold"
              >
                Confirm Password
              </label>
            </div>
            <input
               type={showPassword ? "text": "password"}
              placeholder=""
              id="confirmPassword"
              className="w-full px-2 py-3 mt-1 border border-gray-200/[0.9] outline-none rounded-lg text-sm focus:outline-none focus:shadow-[0px_0px_2px_1px_#fbb6ce] focus:border-[#f687b3]/[0.8] hover:shadow-[0px_0px_3px_1px_#fed7e2] transition-all duration-200"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="absolute text-black cursor-pointer right-5 top-10" onClick={handlePasswordView}>
              {showPassword ? <FaEyeSlash />: <FaEye />}
            </div>
          </div>

          <div className="flex justify-start w-4/5 mt-2">
            <div className="flex items-center mr-4">
              <input

                id="male"
                type="radio"
                value={gender}
                name="gender"
                className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 text-bl"
                onChange={() => setGender("male")}
              />
              <label
                htmlFor="male"
                className="text-sm font-medium text-black ms-2"
              >
                Male
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="female"
                type="radio"
                value={gender}
                name="gender"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                onChange={() => setGender("female")}
              />
              <label
                htmlFor="female"
                className="text-sm font-medium text-black ms-2"
              >
                Female
              </label>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-[90%] ">
            <button
              type="submit"
              className="w-4/5 px-4 py-3 mt-10 text-white bg-black border border-gray-200 rounded-full"
            >
              Sign up
            </button>
            <div className="text-[11px] mt-4">
              Already have an account?
              <Link to={"/login"} className="text-blue-400 hover:text-blue-800">
                login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
