import React from "react";
import spinner from '../assets/spinner.svg'
const Loader = () => {
  return (
    <div>
      <div class="flex justify-center items-center h-full">
        <img
          class="h-14 w-14 rounded-full"
          src={spinner}
          alt=""
        />
      </div>
    </div>

  );
};

export default Loader;
