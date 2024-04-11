import React, { useEffect } from "react";
import bg from "../Utility/bg_svg.svg";
import { MdOutlineEditNote } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Utility/Footer";
import Features from "../Utility/Features/Features";
import { easeInOut, motion } from "framer-motion";

const Home = () => {
const navigate = useNavigate()

useEffect(()=>{
  if(window.localStorage.getItem("isLoggedIn")){
    navigate("/note")
  }
},[])

  return (
    <div className="h-full relative w-full bg-[#151314]" id="home">
      <div className="sticky top-0 flex items-center justify-between w-full text-white sm:px-8 h-14 backdrop-blur-lg">
        <div className="flex items-center">
          <MdOutlineEditNote fontSize={"1.7rem"} color="white" />
          <h2> NoteXapp</h2>
        </div>
        <div className="flex items-center justify-center h-8">
          <button className="w-20 h-full mr-4 transition-all duration-200 border-2 border-white rounded hover:bg-violet-600/80 hover:border-violet-600 ">
            <Link to={"/signup"}>Sign up</Link>
          </button>
          <button className="w-20 h-full mr-4 transition-all duration-200 border-2 border-white rounded hover:bg-violet-600/80 hover:border-violet-600 ">
            <Link to={"/login"}>Login</Link>
          </button>
        </div>
      </div>

      <div className="flex items-start justify-between w-full px-8 mt-40 text-white">
        <motion.div initial={{scale: 0.3}} animate={{scale: 1, transition:{duration: 0.4, ease: easeInOut}}} className="pr-4 text-4xl sm:text-6xl sm:w-1/2">
          <h1>
            Capture thoughts,{" "}
            <span className="text-transparent bg-gradient-to-t from-fuchsia-500 to-slate-100 bg-clip-text">
              ideas, and inspirations
            </span>{" "}
            instantly
          </h1>
        </motion.div>
        <motion.div initial={{scale: 0.3}} animate={{scale: 1, transition:{duration: 0.4, ease: easeInOut}}} className="flex-col items-start hidden w-1/2 pl-4 text-xl sm:flex">
          <div>
            Capture your thoughts, ideas, and inspirations in a heartbeat with
            our intuitive note-taking app. Whether you're a busy professional, a
            passionate student, or a creative soul, our app is designed to
            seamlessly integrate into your daily life, keeping your thoughts
            organized and accessible whenever inspiration strikes.
          </div>
          <button className="px-4 py-2 mt-8 border-none rounded bg-gradient-to-t from-fuchsia-500 to-fuchsia-300">
            Get Started
          </button>
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-between px-8 text-white pt-44 bg-[#151314]">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl text-transparent bg-gradient-to-t from-pink-600 to-pink-200 bg-clip-text">
            {" "}
            Create account and be our early User
          </h2>
          <h2 className="hidden sm:block">Write Your feedback to help and contribute in app.</h2>
        </div>
        <button className="px-4 py-2 mt-4 border-none rounded bg-gradient-to-t from-pink-600 to-pink-200"><Link to={'/signup'}>Create account</Link></button>
      </div>
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
