import React from "react";
import image from "./image/fuu.png";
import Message from "../skills/Message.svg";

const Introduction = () => {
  return (
    <div className=" md:w-[90%] w-[95%]  mx-auto  justify-center  bg-gradient-65 from-purple-300 to-pink-500 md:p-10 p-4 mt-4 rounded ">
      <div className="items-center justify-center mx-auto md:flex ">
        <div className="md:w-1/2 md:pl-12 ">
          <h1 className="text-2xl text-blue-600 md:text-4xl">__मेरा परिचय</h1>
          <br />
          <h1 className="text-3xl font-bold text-transparent md:text-5xl bg-gradient-65 from-purple-600 to-blue-600 bg-clip-text ">
            Hey There,
          </h1>
          <h1 className="text-3xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">
            I’m Sachin
          </h1>{" "}
          <br />
          <p className="py-4 text-gray-600 md:text-2xl">
            I am a
            <span className="font-bold text-black ">
              {" "}
              Full Stack Developer{" "}
            </span>
            with expertise in creating seamless client experiences through
            responsive designs. I specialize in front-end technologies like
            <span className="font-bold text-black">
              React JS, Next JS, and Tailwind CSS ,
            </span>
            and I am proficient in backend development using
            <span className="font-bold text-black">
              {" "}
              Node.js, Express.js, MongoDB, and MySQL.
            </span>
          </p>
          <div className="flex">
            <a href="#Contact">
              <button className="flex p-2 m-2 bg-gradient-65 from-cyan-400 to-blue-700 md:text-2xl rounded-2xl hover:scale-110 duration-6">
                Contact_Me
                <img className="h-6" src={Message} alt="" />
              </button>
            </a>
            <a href="#Project">
              <button className="flex p-2 m-2 duration-6 bg-gradient-65 from-cyan-400 to-blue-700 rounded-2xl md:text-2xl hover:scale-110">
                Explore_Project
                <img className="h-6" src={Message} alt="" />
              </button>
            </a>
          </div>
        </div>
        <div className="flex justify-center md:w-1/2 ">
          <img src={image} className="rounded-2xl " alt="sachin" />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
