import React from "react";
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";
import { CiLink } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  const navigate = useNavigate();
  const toChatBot = () => {
    navigate("/project/1");
  };
  return (
    <div className="flex flex-col bg-bg-primary h-[100%]">
      <SideBar />

      <div className="md:ml-[300px] min-h-screen lg:ml-[300px] xl:ml-[400px] transition-all">
        <div>
          <div className="p-6">
            <h2 className="text-xl py-2 font-medium text-zinc-200">Intro</h2>
            <p className="text-md text-text-primary">
              I am a student at Vellore Institute of Technology, Amaravati,
              currently pursuing the final year of a Bachelor of Engineering in
              Computer Science.
            </p>
            <p className="text-md mt-2 text-text-primary">
              My interests are web development and problem solving.
            </p>
          </div>
          <div className="flex flex-col p-6 justify-center">
            <h2 className="text-xl py-2 font-medium text-zinc-200">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 py-4">
              <div className="rounded-md lg:rounded-lg w-full bg-gray-200 shadow-md md:hover:scale-105 md:transition-all">
                <div>
                  <img
                    className="rounded-t-md lg:rounded-t-lg"
                    src={require("../assets/project_chatbot.png")}
                    alt="project_preview"
                  />
                </div>
                <div className="p-3 flex flex-col justify-center gap-1">
                  <h2 className="font-bold text-sm sm:text-md">
                    Academic ChatBot
                  </h2>
                  <div className="text-xs text-text-primary">
                    React.js, CSS, AWS Amplify, Amazon Lex
                  </div>
                </div>
                <div className="flex justify-between items-center px-3 py-2">
                  <div>
                    <button
                      className="text-xs bg-[#2bd576] text-white p-2 rounded-lg"
                      onClick={toChatBot}
                    >
                      Read more
                    </button>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/kamal9494/acadChatbot"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="bg-gray-300 p-1 rounded-full">
                        <FaGithub size={25} />
                      </div>
                    </a>
                    <a
                      href="https://academicbot.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="bg-gray-300 text-blue-600 p-1 rounded-full">
                        <CiLink size={25} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-md lg:rounded-lg w-full bg-gray-200 shadow-md md:hover:scale-105 md:transition-all">
                <div>
                  <img
                    className="rounded-t-md"
                    src={require("../assets/project_sport.png")}
                    alt="project_preview"
                  />
                </div>
                <div className="p-3 flex flex-col justify-center gap-1">
                  <h2 className="font-bold text-sm sm:text-md">
                    Sport Inventory Management System
                  </h2>
                  <div className="text-xs text-text-primary">
                    React.js, Node.js, Express.js, MongoDB, Tailwind
                  </div>
                </div>
                <div className="flex justify-between items-center px-3 py-2">
                  <a
                    href="https://github.com/kamal9494/sportTracker"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="bg-gray-300 p-1 rounded-full">
                      <FaGithub size={25} />
                    </div>
                  </a>
                  <a
                    href="https://sporttrackpro.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="bg-gray-300 text-blue-600 p-1 rounded-full">
                      <CiLink size={25} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <h2 className="text-xl mb-5 font-medium text-zinc-200">
              What I know
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="bg-card-primary flex flex-col gap-4 p-4 shadow-lg rounded-md">
                <h3 className="text-lg font-medium text-text-primary">
                  Programming Language
                </h3>
                <div className="flex flex-wrap gap-2">
                  <div className="rounded-md bg-bg-primary text-xs text-text-primary p-2">
                    Java
                  </div>
                </div>
              </div>

              <div className="bg-card-primary flex flex-col gap-4 p-4 shadow-lg rounded-md">
                <h3 className="text-lg font-medium text-text-primary">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  <div className="rounded-md bg-bg-primary text-xs text-text-primary p-2">
                    HTML
                  </div>
                  <div className="rounded-md bg-bg-primary text-xs text-text-primary p-2">
                    CSS
                  </div>
                  <div className="rounded-md bg-bg-primary text-xs text-text-primary p-2">
                    Tailwind
                  </div>
                  <div className="rounded-md bg-bg-primary text-xs text-text-primary p-2">
                    Javascript
                  </div>
                  <div className="rounded-md bg-bg-primary text-xs text-text-primary p-2">
                    React.js
                  </div>
                </div>
              </div>

              <div className="bg-card-primary flex flex-col gap-4 p-4 shadow-lg rounded-md">
                <h3 className="text-lg font-medium text-text-primary">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  <div className="rounded-md bg-bg-primary text-xs text-text-primary p-2">
                    Node.js
                  </div>
                  <div className="rounded-md bg-bg-primary text-xs text-text-primary p-2">
                    Express.js
                  </div>
                </div>
              </div>

              <div className="bg-card-primary flex flex-col gap-4 p-4 shadow-lg rounded-md">
                <h3 className="text-lg font-medium text-text-primary">
                  Tools / Platform
                </h3>
                <div className="flex flex-wrap gap-2">
                  <div className="rounded-md bg-bg-primary text-xs text-text-primary p-2">
                    Git
                  </div>
                  <div className="rounded-md bg-bg-primary text-xs text-text-primary p-2">
                    Postman
                  </div>
                  <div className="rounded-md bg-bg-primary text-xs text-text-primary p-2">
                    Figma
                  </div>
                </div>
              </div>

              <div className="bg-card-primary flex flex-col gap-4 p-4 shadow-lg rounded-md">
                <h3 className="text-lg font-medium text-text-primary">
                  Database
                </h3>
                <div className="flex flex-wrap gap-2">
                  <div className="rounded-md bg-bg-primary text-xs text-text-primary p-2">
                    My SQL
                  </div>
                  <div className="rounded-md bg-bg-primary text-xs text-text-primary p-2">
                    MongoDB
                  </div>
                  <div className="rounded-md bg-bg-primary text-xs text-text-primary p-2">
                    Firebase
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-xl mb-5 font-medium text-zinc-200">
              More Frontend Tasks
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 py-2">
              <div className="rounded-md lg:rounded-lg w-full bg-gray-200 shadow-md md:hover:scale-105 md:transition-all">
                <div>
                  <img
                    className="rounded-t-md lg:rounded-t-lg"
                    src={require("../assets/task-1.png")}
                    alt="project_preview"
                  />
                </div>
                <div className="p-3 flex flex-col justify-center gap-1">
                  <h2 className="font-bold text-sm sm:text-md">
                    Ecommerce with Redux
                  </h2>
                  <div className="text-xs text-text-primary">
                    React.js, Tailwind, Redux Toolkit, JSON Server
                  </div>
                </div>
                <div className="flex justify-between items-center px-3 py-2">
                  <a
                    href="https://github.com/kamal9494/tanX-task"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="bg-gray-300 p-1 rounded-full">
                      <FaGithub size={25} />
                    </div>
                  </a>
                  <a
                    href="https://tanx-task.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="bg-gray-300 text-blue-600 p-1 rounded-full">
                      <CiLink size={25} />
                    </div>
                  </a>
                </div>
              </div>

              <div className="rounded-md lg:rounded-lg w-full bg-gray-200 shadow-md md:hover:scale-105 md:transition-all">
                <div>
                  <img
                    className="rounded-t-md lg:rounded-t-lg"
                    src={require("../assets/task-2.png")}
                    alt="project_preview"
                  />
                </div>
                <div className="p-3 flex flex-col justify-center gap-1">
                  <h2 className="font-bold text-sm sm:text-md">
                    Admin Dashboard
                  </h2>
                  <div className="text-xs text-text-primary">
                    React.js, Tailwind, Pagination
                  </div>
                </div>
                <div className="flex justify-between items-center px-3 py-2">
                  <a
                    href="https://github.com/kamal9494/assignment-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="bg-gray-300 p-1 rounded-full">
                      <FaGithub size={25} />
                    </div>
                  </a>
                  <a
                    href="https://assignment-2-hirequotient.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="bg-gray-300 text-blue-600 p-1 rounded-full">
                      <CiLink size={25} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
