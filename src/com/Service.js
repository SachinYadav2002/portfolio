import React from "react";
import image1 from "./image/service.png";
const Service = () => {
  return (
    <div className="md:w-[90%] w-[95%]  mx-auto  justify-center items-center bg-gradient-65 from-purple-300 to-pink-500 md:p-15 p-4 mt-4 rounded">
      <div className="items-center justify-center mx-auto md:flex">
        <div className="md:px-[30px]">
          <h1 className="text-2xl text-blue-600 md:text-4xl">__मेरी सेवाएं</h1>
          <br />
          <h1 className="text-3xl font-bold text-transparent md:text-5xl bg-gradient-65 from-purple-600 to-blue-600 bg-clip-text ">
            Services I Offer
          </h1>
          <div className="flex justify-center">
            <img
              src={image1}
              alt=" server"
              className="flex justify-center"
            ></img>
          </div>
        </div>
        <div className="justify-center p-4 ">
          <div>
            <p className="w-full border-b-4 border-indigo-500 "></p>
            <h1 className="w-2/3 text-3xl font-bold text-transparent md:text-5xl bg-gradient-65 from-purple-600 to-blue-600 bg-clip-text">
              1.Full Stack Web Development
            </h1>
            <br />
            <div className="flex justify-between p-2 px-4">
              <h1 className="font-bold text-blue-500">Advanced</h1>
              <h1 className="font-bold text-gray-500">Proficiency</h1>
            </div>
          </div>
          <div>
            <p className="w-full border-b-4 border-indigo-500 "></p>
            <h1 className="w-2/3 text-3xl font-bold text-transparent md:text-5xl bg-gradient-65 from-purple-600 to-blue-600 bg-clip-text">
              2.Website UI Development
            </h1>
            <br />
            <div className="flex justify-between p-2 px-4">
              <h1 className="font-bold text-blue-500">Advanced</h1>
              <h1 className="font-bold text-gray-500">Proficiency</h1>
            </div>
          </div>
          <div>
            <p className="w-full border-b-4 border-indigo-500 "></p>
            <h1 className="w-2/3 text-3xl font-bold text-transparent md:text-5xl bg-gradient-65 from-purple-600 to-blue-600 bg-clip-text">
              3.Website UI/UX Design
            </h1>
            <br />
            <div className="flex justify-between p-2 px-4">
              <h1 className="font-bold text-blue-500">Advanced</h1>
              <h1 className="font-bold text-gray-500">Proficiency</h1>
            </div>
            <p className="w-full border-b-4 border-indigo-500 "></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
