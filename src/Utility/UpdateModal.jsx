import React, { useContext, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import axios from "../api/axios";
import toast, { Toaster } from "react-hot-toast";
import noteContext from "../context/contex";


const UpdateModal = ({ title, desc, view, id, setView }) => {
  const {setRefresh} = useContext(noteContext)
  const [eTitle, setETitle] = useState(title);
  const [eDesc, setEDesc] = useState(desc);

    // Update Note
    const updateNote = async (title, description, id) => {
      const userPayload = { title, description };
      await axios
        .put(`/api/note/updatenote/` + id, userPayload,{headers: {'Authorization': "Bearer " +localStorage.getItem("accessToken")}}, {withCredentials: true})
        .then((response) => {
          console.log(response);
          toast.success("Note Updated");
          setRefresh(prev => !prev)
        })
        .catch((err) => {
          if (err.response) {
            console.log(err.response.data);
          }
        });
        setView(false)
    };

  return (
    <div
      className={`${
        view ? "flex" : "hidden"
      } flex flex-col h-[400px] w-[400px] fixed top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] border-2 border-black text-black px-4 bg-slate-600 items-stretch justify-center z-50 rounded-lg`}
    >
      <div className="text-center">
        <button
          onClick={() => setView(false)}
          className="text-3xl text-center text-white"
        >
          <IoIosCloseCircle />
        </button>
        <Toaster />
      </div>
      <form onSubmit={(e) => {e.preventDefault();updateNote(eTitle, eDesc, id)}} className="flex flex-col">
        <input
          type="text"
          placeholder="title"
          value={eTitle}
          onChange={(e) => setETitle(e.target.value)}
          className="px-2 py-2 mt-10 rounded focus:ring-2 focus:ring-pink-600 focus:outline-none"
        />
        <input
          type="text"
          placeholder="descrip"
          value={eDesc}
          onChange={(e) => setEDesc(e.target.value)}
          className="px-2 py-2 mt-4 rounded focus:ring-2 focus:ring-pink-600 focus:outline-none"
        />
        <button
          type="submit"
          className="py-2 mt-5 text-white transition-all duration-200 rounded-lg bg-violet-600 hover:bg-violet-500 active:scale-95 active:bg-violet-700"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateModal;
