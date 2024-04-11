import React, { useContext, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import noteContext from "../context/contex";

const UpdateModal = ({ title, desc, view, id, setView }) => {
  const { updateNote } = useContext(noteContext);
  const [eTitle, setETitle] = useState(title);
  const [eDesc, setEDesc] = useState(desc);

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
      </div>
      <div className="flex flex-col">
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
          onClick={(e) => {e.preventDefault();setView(false);updateNote(eTitle, eDesc, id)}}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateModal;
