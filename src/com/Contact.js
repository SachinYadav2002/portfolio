import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

function Contact() {
  return (
    <div
      id="Contact"
      className="md:w-[90%] w-[95%]  mx-auto  justify-center items-center bg-gradient-65 from-purple-500 to-pink-800 md:p-15 p-4 mt-4 rounded mb-4 md:pl-20"
    >
      <div className="">
        <div className="w-full pb-5 md:w-2/3">
          <h1 className="text-[#4C40F7] text-xl md:text-2xl ">
            __मुझसे संपर्क करें
          </h1>
          <h2 className="w-full py-3 text-4xl font-semibold text-transparent kanit md:text-5xl md:pt-6 bg-gradient-65 from-blue-800 to-purple-800 bg-clip-text">
            Let’s make something amazing together Start By{" "}
          </h2>
          <p className=" pt-2 text-[#000000ab]">
            I invite you to contact me if you have any questions, inquiries, or
            would like to discuss collaborating on a project. I am always happy
            to connect with others and share my passion for Web Development.
          </p>
          <p className="text-[#000000ab] pt-2">
            Feel free to contact me for business services, web development, and
            other professional inquiries!
          </p>

          <div className="contacts flex justify-evenly flex-col gap-3  text-[#000000ab] ">
            <a href="mailto: yadavsachin7249407392@gmail.com" className="">
              <span>
                <MailOutlined style={{ fontSize: "30px" }} />
                &nbsp;&nbsp;yadavsachin7249407392@gmail.com
              </span>
            </a>
            <a href="tel:+917249407392" className="">
              <span>
                <PhoneOutlined style={{ fontSize: "30px" }} />
                &nbsp; +91 7249407392
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/sachin-yadav-20a79b231"
              className=""
            >
              <span>
                <LinkedinOutlined style={{ fontSize: "30px" }} />
                &nbsp; Yadav Sachin
              </span>
            </a>
            <a href="https://github.com/SachinYadav2002" className="">
              <span>
                <GithubOutlined style={{ fontSize: "30px" }} />
                &nbsp; SachinYadav2002
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
