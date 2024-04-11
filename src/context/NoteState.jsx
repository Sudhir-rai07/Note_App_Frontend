import React, { useState } from "react";
import noteContext from "./contex";
import axios from "axios";
import toast from "react-hot-toast";
import {  useNavigate } from "react-router-dom";

const NoteState = (props) => {
  const [loading,setLoading] = useState(false)
  const [notes, setNotes] = useState([]);
  const [user, setUser] = useState([]);
  const [refresh, setRefresh] = useState(false)

  // All notes
const allNotes = async () =>{
  setLoading(true)
  await axios.get(`/api/note/allnotes`)
  .then((res)=>{
    setNotes(res.data)
    setLoading(false)
  })
  .catch((err)=>{
    console.log(err.response)
  })
}
  // Add Note Completed --> AddNote Component

  // Delete note :: Completed

  // Update Note
  const updateNote = async (title, description, id) => {
    const userPayload = { title, description };
    await axios
      .put(`/api/note/updatenote/` + id, userPayload)
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
  };

  // Get user
  const getUser = async () => {
    setLoading(true);
    await axios
      .get(`/api/auth/getuser`)
      .then(({ data }) => {
        setUser(data);
        console.log(user);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error", err.response);
      });
  };


  return (
    <noteContext.Provider
      value={{
        notes,
        setNotes,
        user,
        allNotes,
        getUser,
        updateNote,
        refresh,
        setRefresh, 
      }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
