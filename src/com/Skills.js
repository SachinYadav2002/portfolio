import Html from "../skills/1 Html.svg";
import Node from "../skills/11 Node JS.svg";
import Express from "../skills/12 Express JS.svg";
import MongoDB from "../skills/14 MongoDB.svg";
import MySQL from "../skills/15 MySQL.svg";
import Css from "../skills/2 Css.svg";
import Tailwind from "../skills/3 Tailwind Css.svg";

import JavaScript from "../skills/6 JavaScript.svg";
import TypeScript from "../skills/7 TypeScript.svg";
import react from "../skills/8 React JS.svg";
import Next from "../skills/9 Next JS.svg";

import java from "../skills/java.jpg";

export default function Skill() {
  return (
    <div className="md:w-[90%] w-[95%]  mx-auto  justify-center items-center bg-gradient-65 from-purple-300 to-pink-500 md:p-15 p-4 mt-4 rounded ">
      <div className="max-w-[2000px] xl:px-[150px] md:px-[30px] lg:px-[90px] sm:px-[20px] ">
        <div className="flex w-full ">
          <div className="flex flex-col">
            <span className="text-xl text-blue-600 md:text-2xl">__कौशल</span>
            <span className="text-4xl font-bold text-transparent kanit md:text-5xl bg-gradient-65 from-purple-600 to-blue-600 bg-clip-text">
              Skills
            </span>
            <span className="text-md kanit text-slate-600">
              Languages,Technologies and tools that I have learned and applied
              to my projects
            </span>
          </div>
        </div>
        <div className="flex flex-wrap justify-around flex-grow">
          <div className="flex justify-center p-5 lg:w-1/6">
            <div>
              <img className=" w-28 h-28 md:w-32 md:h-32" src={Html} alt="" />
              <span className="flex justify-center ">HTML5</span>
            </div>
          </div>

          <div className="flex justify-center p-5 lg:w-1/6">
            <div>
              <img className=" w-28 h-28 md:w-32 md:h-32" src={Css} alt="" />
              <span className="flex justify-center ">CSS3</span>
            </div>
          </div>

          <div className="flex justify-center p-5 lg:w-1/6">
            <div>
              <img
                className="w-28 h-28 md:w-32 md:h-32"
                src={Tailwind}
                alt=""
              />
              <span className="flex justify-center ">Tailwind-CSS</span>
            </div>
          </div>
          <div className="flex justify-center p-5 lg:w-1/6">
            <div>
              <img
                className=" w-28 h-28 md:w-32 md:h-32"
                src={JavaScript}
                alt=""
              />
              <span className="flex justify-center ">JavaScript</span>
            </div>
          </div>
          <div className="flex justify-center p-5 lg:w-1/6">
            <div>
              <img
                className=" w-28 h-28 md:w-32 md:h-32"
                src={TypeScript}
                alt=""
              />
              <span className="flex justify-center ">TypeScript</span>
            </div>
          </div>

          <div className="flex justify-center p-5 lg:w-1/6">
            <div>
              <img className=" w-28 h-28 md:w-32 md:h-32" src={react} alt="" />
              <span className="flex justify-center ">React JS</span>
            </div>
          </div>

          <div className="flex justify-center p-5 lg:w-1/6">
            <div>
              <img className=" w-28 h-28 md:w-32 md:h-32" src={Next} alt="" />
              <span className="flex justify-center ">NEXT JS</span>
            </div>
          </div>

          <div className="flex justify-center p-5 lg:w-1/6">
            <div>
              <img className=" w-28 h-28 md:w-32 md:h-32" src={Node} alt="" />
              <span className="flex justify-center ">Node JS</span>
            </div>
          </div>
          <div className="flex justify-center p-5 lg:w-1/6">
            <div>
              <img className="w-28 h-28 md:w-32 md:h-32" src={Express} alt="" />
              <span className="flex justify-center ">Express JS</span>
            </div>
          </div>
          <div className="flex justify-center p-5 lg:w-1/6">
            <div>
              <img
                className=" w-28 h-28 md:w-32 md:h-32"
                src={MongoDB}
                alt=""
              />
              <span className="flex justify-center ">MongoDB</span>
            </div>
          </div>
          <div className="flex justify-center p-5 lg:w-1/6">
            <div>
              <img className=" w-28 h-28 md:w-32 md:h-32" src={MySQL} alt="" />
              <span className="flex justify-center ">MySQL</span>
            </div>
          </div>

          <div className="flex justify-center p-5 lg:w-1/6">
            <div>
              <img className=" w-28 h-28 md:w-32 md:h-32" src={java} alt="" />
              <span className="flex justify-center ">java</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
