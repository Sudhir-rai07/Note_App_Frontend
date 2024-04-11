import axios from "axios";
import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaFilePen } from "react-icons/fa6";
import { MdDeleteSweep } from "react-icons/md";
import noteContext from "../context/contex";
import UpdateModal from "./UpdateModal";

const NoteCard = ({ title, desc, id, time }) => {
  const {notes, setNotes} = useContext(noteContext)
  const [view, setView] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setRefresh } = useContext(noteContext);

  const CreatedAt = new Date(time)
  const formatedDate = CreatedAt.toDateString();
  // Delete Note Method
const deleteNote = async (id) =>{
  setLoading(true)
  await axios
    .delete(`/api/note/deletenote/${id}`)
    .then((res)=>{
      console.log(res.data)
      console.log("note id : ", id)
      setLoading(false)
      toast.success("Deleted")
    })
    .catch((err)=>{
      console.log(err.response.data)
      toast.error("Error")
    })
    setRefresh(prev => !prev)
}


  return (
    <div className="flex flex-col w-56 px-4 py-4 mx-2 my-2 border-2 border-gray-500 rounded-lg bg-slate-800 hover:shadow-white hover:shadow-sm">
      <Toaster />
      <div className="text-2xl">
        <h2 className="tracking-widest">{title}</h2>
      </div>
      <div className="text-gray-400">
        <p>
          {desc}
          <span className="text-sm text-blue-300 cursor-pointer hover:text-blue-600"></span>
        </p>
      </div>

      <div>
        <p className="text-[10px] text-slate-400 opacity-55 mt-3 tracking-wider">
        {formatedDate}
        </p>
      </div>

      <div className="flex mt-2 text-2xl">
        <button
          className="mr-4 hover:text-orange-500"
          onClick={() => setView(true)}
        >
          <FaFilePen />
        </button>
        <button
          className="text-3xl hover:text-red-600"
          onClick={(e) => {
            // e.preventDefault();
            deleteNote(id);
          }}
        >
          <MdDeleteSweep />
        </button>
      </div>

      <UpdateModal
        title={title}
        desc={desc}
        view={view}
        setView={setView}
        id={id}
      />
    </div>
  );
};

export default NoteCard;
