import axios from '../api/axios';
import React, { useContext, useState } from "react";
import noteContext from "../context/contex";
import toast, { Toaster } from "react-hot-toast";
import Loader from './Loader';

const AddNoteForm = ({ view, viewMethod }) => {
  const { setRefresh } = useContext(noteContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  // Add Note Function
  const handleAddNote = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios
      .post("/api/note/addnote", { title, description }, {headers: {'Authorization': "Bearer " +localStorage.getItem("accessToken")}}, {withCredentials: true})
      .then(({ data }) => {
        setTitle("")
        setDescription("")
        setLoading(false)
        viewMethod(false)
        toast.success("Note added")
        setRefresh(prev => !prev)
      })
      .catch((err) => {
        console.log(err.response);
        toast.error("Error")
      })
      .finally(()=> setLoading(false))
      
  };

  return (
    <div
      className={`w-[350px] bg-gray-600 z-50 rounded-lg ${
        view ? "block" : "hidden"
      } py-8 px-4 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]`}
    >
      <div className='text-center'>
      {loading && <Loader />}
      </div>
      {/* {error && <h2 className="text-red-700">Error...</h2>} */}
      <form className="max-w-sm mx-auto " onSubmit={handleAddNote}>
        <div className="mb-5">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            autoFocus={true}
            className="w-full px-4 py-2 text-black border-none rounded-lg outline-none focus:outline-pink-600"
            placeholder="title"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="w-full px-4 py-2 text-black border-none rounded-lg outline-none focus:outline-pink-600"
            required
          />
        </div>
        <div className="flex justify-end w-full">
          <button
          disabled={loading}
            type="reset"
            className="text-white disabled:bg-gray-500 disabled:text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={viewMethod}
          >
            Cancle
          </button>
          <button
          disabled={loading}
            type="submit"
            className="text-white disabled:bg-gray-500 disabled:text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Add
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default AddNoteForm;
