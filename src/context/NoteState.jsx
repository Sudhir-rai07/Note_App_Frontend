import React, { useState } from "react";
import noteContext from "./contex";
import axios from '../api/axios';
import toast from "react-hot-toast";

const NoteState = (props) => {
  const [loading,setLoading] = useState(false)
  const [notes, setNotes] = useState([]);
  const [user, setUser] = useState([]);
  const [refresh, setRefresh] = useState(false)

  // All notes
const allNotes = async () =>{
  setLoading(true)
  await axios.get(`/api/note/allnotes`, {withCredentials: true})
  .then((res)=>{
    setNotes(res.data)
    setLoading(false)
  })
  .catch((err)=>{
    console.log(err.response)
  })
}

  // Get user
  const getUser = async () => {
    setLoading(true);
    await axios
      .get(`/api/auth/getuser`, {withCredentials: true})
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
        refresh,
        setRefresh, 
      }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
