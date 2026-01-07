import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

import Download from "../skills/Download.svg";

function Contact() {
  return (
    <div
      id="Contact"
      className="md:w-[90%] w-[95%] mx-auto bg-gradient-65 from-purple-500 to-pink-800 p-4 mt-4 rounded mb-4 md:pl-20"
    >
      <div className="w-full pb-5 md:w-2/3">
        <h1 className="text-[#4C40F7] text-xl md:text-2xl">
          __मुझसे संपर्क करें
        </h1>

        <h2 className="py-3 text-4xl font-semibold text-transparent kanit md:text-5xl bg-gradient-65 from-blue-800 to-purple-800 bg-clip-text">
          Let’s make something amazing together
        </h2>

        <p className="pt-2 text-[#000000ab]">
          I invite you to contact me if you have any questions or collaboration
          ideas.
        </p>

        <a
          href="https://drive.google.com/file/d/1YpV8Lq4Z3odDc8lrCxZJJY-p8pBtUnXL/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex p-4 m-2 bg-gradient-65 from-cyan-400 to-blue-700 md:text-2xl rounded-2xl hover:scale-110 duration-6">
            Resume&nbsp;
            <img src={Download} alt="Download resume" className="w-6 h-6" />
          </button>
        </a>

        <div className="flex flex-col gap-3 text-[#000000ab] mt-4">
          <a href="mailto:yadavsachin7249407392@gmail.com">
            <MailOutlined style={{ fontSize: 30 }} />
            &nbsp; yadavsachin7249407392@gmail.com
          </a>

          <a href="tel:+917249407392">
            <PhoneOutlined style={{ fontSize: 30 }} />
            &nbsp; +91 7249407392
          </a>

          <a
            href="https://www.linkedin.com/in/sachin-yadav-20a79b231"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinOutlined style={{ fontSize: 30 }} />
            &nbsp; Yadav Sachin
          </a>

          <a
            href="https://github.com/SachinYadav2002"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubOutlined style={{ fontSize: 30 }} />
            &nbsp; SachinYadav2002
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
