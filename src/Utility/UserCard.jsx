import React, { useContext } from "react";
import noteContext from "../context/contex";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const UserCard = ({showCard}) => {
  const {user} = useContext(noteContext)
  const navigate = useNavigate()
      //  Logout
      const logout = async () =>{
        await axios.post(`/api/auth/logout`)
        .then((res)=>{
          toast.success("Logged out")
          window.localStorage.removeItem("isLoggedIn")
          navigate("/login")
          console.log("object")
        })
        .catch((error)=>{
          if(error.response){
            console.log(error.response.data?.message)
          }
        })
      }
    

  return (
    <div className={`absolute z-50 w-40 ${showCard ? "flex-col": "hidden"} transition-all duration-300 bg-gray-800 rounded-lg top-12 -left-36`} id="user-dropdown">
      <div className="flex flex-col items-start justify-between">
        <div className="pl-4">
          <div className="mt-4">{user?.username}</div>
          <div className="text-gray-500">{user?.email}</div>
        </div>
        <hr className="w-full h-[2px] bg-gray-600 border-none rounded-full" />
        <div className="w-full">
            <h2 className="w-full px-4 py-2 mt-2 rounded-lg cursor-pointer hover:bg-gray-700"><Link to={'/user/dashboard'}>Profile</Link></h2>
            {/* <h2 className="w-full px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-700">Setting</h2> */}
            <h2 className="w-full px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-700" onClick={() => logout()}>Logout</h2>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
