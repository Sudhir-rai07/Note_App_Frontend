import React, { useContext } from "react";
import noteContext from "../context/contex";
import { Link } from "react-router-dom";
import axios from "axios";

function UserDashboard() {
  const { user } = useContext(noteContext);
  const {createdAt} = user;
  const userSince = new Date(createdAt);
  const formatedData = userSince.toLocaleDateString()
  console.log(user._id);

if(!(window.localStorage.getItem("isLoggedIn"))){
  return <h2><Link className="hover:text-blue-600" to={'/login'}>Login</Link> First</h2>
}
  return (
    <div className="h-full w-full text-white justify-center items-center flex bg-[#111827] font-poppins">
    <div className="absolute top-0 text-3xl left-5"><Link to={'/note'}>NoteXapp</Link></div>
      <div className="flex flex-col ">
      <div className="absolute top-0 text-5xl font-semibold text-transparent right-5 font-mukta bg-gradient-to-t from-purple-300 to-purple-600 bg-clip-text">User DashBoard</div>
        <div>
        <div>UserName : {user?.username}</div>
        <div>Email: {user?.email}</div>
        <div>Total notes: {user?.list?.length}</div>

        <div>User since: <span className="">{formatedData}</span></div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
