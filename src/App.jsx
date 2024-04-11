import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Feed from "./Components/Feed";
import NoteState from "./context/NoteState";
import UserDashboard from "./Utility/UserDashboard";


const App = () => {
  return (
    <div className="w-full h-screen scrollbar-none">
    <NoteState>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/note" element={<Feed />} />
            // TODO: Dashboard Update and Style
            <Route path="/user/dashboard" element={<UserDashboard />} />
          </Routes>
        </BrowserRouter>
        </NoteState>
      </div>
  );
};

export default App;
