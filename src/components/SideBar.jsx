import React from "react";
import { BsLinkedin, BsFileText } from "react-icons/bs";
import { GrMail, GrGithub } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";

const SideBar = () => {
  return (
    <div className="flex pt-[130px] md:pt-0 md:fixed w-full md:w-[300px] lg:w-[300px] xl:w-[400px] bg-bg-primary h-full transition-all">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="mb-2 flex justify-center">
          <img
            className="w-[180px] rounded-full"
            src={require("../assets/profile1.png")}
            alt="profile"
          />
        </div>
        <div className="mt-5">
          <h1 className="text-xl font-medium text-text-highlight">
            Hi, I'm Kamal Teja
          </h1>
        </div>

        <div className="flex flex-col items-center gap-1 text-text-info p-5">
          <div className="flex gap-4 justify-start w-[150px] p-2 hover:text-text-primary">
            <BsFileText size={22} />
            <span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1LSdLkYhHSX9V6ID-5yyycRvrmW2aC0X7/view?usp=sharing"
              >
                Resume
              </a>
            </span>
            <br />
          </div>
          <div className="flex gap-4 justify-start w-[150px] p-2 hover:text-text-primary">
            <SiLeetcode size={22} />
            <span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://leetcode.com/kamal_94/"
              >
                Leetcode
              </a>
            </span>
            <br />
          </div>
          <div className="flex gap-4 justify-start w-[150px] p-2 hover:text-text-primary">
            <GrGithub size={22} />
            <span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/kamal9494"
              >
                Github
              </a>
            </span>
            <br />
          </div>
          <div className="flex gap-4 justify-start w-[150px] p-2 hover:text-text-primary">
            <BsLinkedin size={22} />
            <span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/kamal-teja/"
              >
                Linkedin
              </a>
            </span>
            <br />
          </div>
          <div className="flex gap-4 justify-start w-[150px] p-2 hover:text-text-primary">
            <GrMail size={22} />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:kamaltejp@gmail.com"
            >
              Email
            </a>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
