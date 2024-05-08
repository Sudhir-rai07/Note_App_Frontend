import React, { useContext, useEffect, useState } from "react";
import UserCard from "../Utility/UserCard";
import NoteCard from "../Utility/NoteCard";
import AddNoteForm from "../Utility/AddNoteForm";
import noteContext from "../context/contex";
import axios from "../api/axios";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Utility/Footer";
import Loader from "../Utility/Loader";

const Feed = () => {
  const { refresh, allNotes, notes, getUser, user, loading: contextLoading} = useContext(noteContext);
  const rand = Math.floor(Math.random()) * 100;
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  // New Note Form
  const handleFormView = () => {
    setShowForm(!showForm);
  };

  // Fetching all notes
  useEffect(() => {
    allNotes();
  }, [refresh]);

  useEffect(() => {
    getUser();
  }, []);

  // Logout :: /api/auth/logout
  const logout = async () => {
    setLoading(true)
    window.localStorage.removeItem("isLoggedIn");
    await axios
      .post(`/api/auth/logout`)
      .then((res) => {
        console.log(res.data);
        console.log("Logged Out");
        window.localStorage.removeItem("isLoggedIn");
        setLoading(false)
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response);
      });

    console.log("Hitted Logout");
  };

  return (
    <div className="h-full w-full bg-[#151314] text-white flex flex-col items-center ">
      <div className="flex items-center justify-between w-full px-2 bg-gray-800 h-14 sm:px-8">
        <div className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded text-sm px-5 py-2.5 text-center me-2 mb-2">
          Hi, {user?.username}
        </div>
        <div className="text-xl font-bold cursor-pointer text-slate-400 hover:text-white/70">
          NoteXapp
        </div>
        <div className="relative flex">
          <div className="w-8 h-8 bg-gray-600 rounded-full group">
            <button>
              <Link to={"/user/dashboard"}>
                {" "}
                <img
                  src={`https://xsgames.co/randomusers/assets/avatars/${user?.gender}/${rand}.jpg`}
                  alt="User Profile"
                  className="w-full h-full bg-center bg-cover rounded-full"
                />
              </Link>
            </button>
          </div>

          {contextLoading && <Loader />}
          {window.localStorage.getItem("isLoggedIn") ? (
            <div>
              <button
                onClick={logout}
                className="px-1 py-1 mx-2 mb-2 font-medium text-center text-white rounded shadow-lg bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 me-2"
              >
                Logout {loading &&<Loader />}
              </button>
            </div>
          ) : (
            <h2 className="px-1 py-1 mx-2 text-black rounded bg-violet-400 hover:bg-violet-500">
              <Link to={"/login"}>Login</Link>
            </h2>
          )}
        </div>
      </div>

      {window.localStorage.getItem("isLoggedIn") ? (
        <div className="relative w-full h-full px-4 overflow-x-hidden overflow-y-scroll bg-gray-900 sm:px-0 sm:w-3/4 scrollbar-none">
          <div
            onClick={handleFormView}
            className="cursor-pointer mt-4 sticky top-0 left-0 w-28 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Add Note
          </div>
          <AddNoteForm view={showForm} viewMethod={handleFormView} />
          {/* {loading && <Loading />} */}

          {/* Note length on UI */}
          {notes.length == 0 ? (
            <h1>No Notes Available</h1>
          ) : (
            <h1>Total Notes : {notes.length}</h1>
          )}

          {/* Mapping all notes */}
          <div className="flex flex-row flex-wrap justify-evenly">
            {notes &&
              notes.map((note, idx) => {
                return (
                  <NoteCard
                    time={note?.createdAt}
                    title={note?.title}
                    desc={note?.description}
                    id={note?._id}
                    key={note._id}
                  />
                );
              })}
          </div>
        </div>
      ) : (
        <h2>Login First</h2>
      )}

      <Footer />
    </div>
  );
};

export default Feed;
