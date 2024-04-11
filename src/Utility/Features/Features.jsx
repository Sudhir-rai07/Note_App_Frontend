import React from "react";
import { FaUserAlt } from "react-icons/fa";

const Features = () => {
  return (
    <div className="px-8 pt-20 text-white bg-[#151314]">
      <div className="flex flex-col items-center justify-center">
        <div className="text-4xl">
          <h2 className="list-disk">
            Sleek interface and user-friendly design
          </h2>
        </div>

        <div className="relative z-10 flex justify-center w-full mt-8">
          <div className="z-10 transition-all duration-200 sm:hover:z-40">
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Rich text editing capabilities
              </div>
              <div className="font-normal text-gray-700 dark:text-gray-400">
                Effortlessly format text, add images, and create visually
                stunning documents with our rich text editing features, all
                within a user-friendly interface.
              </div>
            </div>
          </div>
          <div className="absolute hidden top-4 right-1/2 hover:z-auto sm:flex">
            <p className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Prioritizes privacy and security
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Your privacy and security are paramount. We employ cutting-edge
                encryption and strict data protection measures to safeguard your
                personal information.
              </p>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center w-full mt-20 sm:items-center ">
          <div className="flex items-center text-2xl ">
            <FaUserAlt color="hotpink" />
            <span> Auth</span>
          </div>

          <div className="mt-5 text-3xl sm:text-4xl">Secure login for all users</div>
          <div className="mt-4 text-gray-400 sm:w-3/6">
            Your notes are secure with us. We employ top-notch encryption and
            stringent security measures to keep your data safe, giving you peace
            of mind as you organize your thoughts.
          </div>
        </div>

        <div className="flex flex-col items-start w-full mt-20 sm:items-center">
          <div className="m-4 text-3xl sm:text-4xl">
            <h2>Store, query and manage data</h2>
          </div>
          <div className="text-gray-400 sm:w-3/6">
            <p>
              Our database infrastructure is built for reliability and
              efficiency. With scalable architecture and optimized performance,
              we ensure seamless access to your notes, even as your collection
              grows. Trust us for a robust platform to store and manage your
              valuable information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
