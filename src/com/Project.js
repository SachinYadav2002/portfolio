import { useState } from "react";
import services1 from "../skills/services1.png";
import project1 from "../skills/pro1.png";
import project2 from "../skills/pro2.png";

const project = [
  {
    id: 1,
    img: project1,
    name: "Stock Smart",
    tech: "Next Js,Typescript,Tailwind CSS, Node Js,Mongo Db",
  },
  {
    id: 2,
    img: project2,
    name: "Headphone",
    tech: "React Js,Next Js,Tailwind CSS",
  },
];
function Project() {
  // const [show, setShow] = useState(false);
  const [count, setCount] = useState(1);
  return (
    <div
      id="Project"
      className="md:w-[90%] w-[95%]  mx-auto  justify-center items-center bg-gradient-65 from-purple-300 to-pink-500 md:p-15 p-4 mt-4 rounded"
    >
      <div className="max-w-[2000px] xl:px-[150px] md:px-[30px] lg:px-[90px] sm:px-[20px] justify-center items-center md:flex">
        <div className="w-full md:w-1/2">
          <h1 className="text-[#4C40F7] text-xl md:text-2xl">__मेरा काम</h1>
          <h2 className="flex w-full py-3 text-3xl font-bold text-transparent kanit md:text-4xl lg:text-7xl md:pt-6 bg-gradient-65 from-purple-600 to-blue-500 bg-clip-text">
            My Projects
          </h2>
          <img
            src={services1}
            alt=""
            className="flex justify-center md:justify-start"
          />
        </div>
        <div className="w-full md:w-1/2 ">
          <div className="flex flex-col gap-5">
            <h1>
              I am a full-stack developer with a passion for building beautiful
              and user-friendly web applications.
            </h1>
            <div className="relative">
              {project.map((data) =>
                data.id === count ? (
                  <div
                    key={data.id}
                    // onMouseEnter={() => setShow(true)}
                    // onMouseLeave={() => setShow(false)}
                    className="rounded-md overflow-hidden relative flex-col flex justify-center items-center text-4xl text-[#4C40F7] transition-all duration-500 ease-in-out"
                  >
                    <img
                      src={data.img}
                      width={400}
                      height={400}
                      alt="project1"
                      className="h-full w-full object-cover min-w-[400px] lg:min-w-0 transition-opacity duration-500 ease-in-out"
                    />
                    <button
                      className="absolute right-0 z-50 mr-2"
                      // onMouseEnter={() => setShow(false)}
                      // onMouseLeave={() => setShow(true)}
                      onClick={() => {
                        if (count === 1) {
                          setCount(2);
                        } else {
                          setCount(1);
                        }
                      }}
                    >
                      &#10095;
                    </button>
                    <button
                      className="absolute left-0 z-50 ml-2"
                      // onMouseEnter={() => setShow(false)}
                      // onMouseLeave={() => setShow(true)}
                      onClick={() => {
                        if (count === 2) {
                          setCount(1);
                        } else {
                          setCount(2);
                        }
                      }}
                    >
                      &#10094;
                    </button>
                  </div>
                ) : (
                  " "
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
