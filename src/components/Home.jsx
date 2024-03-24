import React from "react";
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";
import { CiLink } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const ProjectThumb = ({ title, tech, img, github, demo, readMoreClick }) => {
  return (
    <div className="rounded-md lg:rounded-lg w-full bg-gray-200 shadow-md md:hover:scale-105 md:transition-all">
      <div>
        <img className="rounded-t-md" src={img} alt={title} />
      </div>
      <div className="p-3 flex flex-col justify-center gap-1">
        <h2 className="font-bold text-sm sm:text-md">{title}</h2>
        <div className="text-xs text-text-primary">{tech}</div>
      </div>
      <div className="flex justify-between items-center px-3 py-2">
        {readMoreClick && (
          <div>
            <button
              className="text-xs bg-btn-primary text-white p-2 rounded-lg"
              onClick={readMoreClick}
            >
              Read more
            </button>
          </div>
        )}
        <div
          className={`${
            readMoreClick ? "flex gap-3" : "flex justify-between w-full"
          }`}
        >
          <a href={github} target="_blank" rel="noreferrer">
            <div className="bg-gray-300 p-1 rounded-full">
              <FaGithub size={25} />
            </div>
          </a>
          <a href={demo} target="_blank" rel="noreferrer">
            <div className="bg-gray-300 text-blue-600 p-1 rounded-full">
              <CiLink size={25} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const navigate = useNavigate();
  const projects = [
    {
      title: "Sport Inventory Management System",
      tech: "React.js, Node.js, Express.js, MongoDB, Tailwind",
      img: require("../assets/project_sport.png"),
      github: "https://github.com/kamal9494/sportTracker",
      demo: "https://sporttrackpro.vercel.app/",
      readMoreClick: null,
    },
    {
      title: "Academic ChatBot",
      tech: "React.js, CSS, AWS Amplify, Amazon Lex",
      img: require("../assets/project_chatbot.png"),
      github: "https://github.com/kamal9494/acadChatbot",
      demo: "https://academicbot.netlify.app/",
      readMoreClick: () => navigate("/project/8nZp3QYK"),
    },
  ];

  const tasks = [
    {
      id: "task-1",
      title: "Ecommerce with Redux",
      tech: "React.js, Tailwind, Redux Toolkit, JSON Server",
      img: require("../assets/task-1.png"),
      github: "https://github.com/kamal9494/tanX-task",
      demo: "https://tanx-task.vercel.app/",
      readMoreClick: null,
    },
    {
      id: "task-2",
      title: "KoinX Crypto",
      tech: "React.js, Tailwind, Context-API, React-Router-DOM, Carousel's, CoinGecko API, TradingView Widget",
      img: require("../assets/task-3.png"),
      github: "https://github.com/kamal9494/koinx-task",
      demo: "https://task-koinx.vercel.app/bitcoin",
      readMoreClick: null,
    },
    {
      id: "task-3",
      title: "Admin Dashboard",
      tech: "React.js, Tailwind, Pagination",
      img: require("../assets/task-2.png"),
      github: "https://github.com/kamal9494/assignment-2",
      demo: "https://assignment-2-hirequotient.netlify.app/",
      readMoreClick: null,
    },
    {
      id: "task-4",
      title: "Online IDE Platform",
      tech: "React.js, Express.js, Tailwind, MySQL, Redis, Judge0 API",
      img: require("../assets/task-4.png"),
      github: "https://github.com/kamal9494/tuf-task",
      demo: "https://task-tuf.vercel.app/",
      readMoreClick: null,
    },
  ];

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
              {projects &&
                projects.map((project, index) => (
                  <ProjectThumb
                    key={index}
                    title={project.title}
                    tech={project.tech}
                    img={project.img}
                    github={project.github}
                    demo={project.demo}
                    readMoreClick={project.readMoreClick}
                  />
                ))}
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
              {tasks &&
                tasks.map((task, index) => (
                  <ProjectThumb
                    key={task.id}
                    title={task.title}
                    tech={task.tech}
                    img={task.img}
                    github={task.github}
                    demo={task.demo}
                    readMoreClick={task.readMoreClick}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
