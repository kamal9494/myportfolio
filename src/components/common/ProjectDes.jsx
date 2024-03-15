import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { data } from "../../config/data";
import NoPage from "../NoPage";
import { GrGithub } from "react-icons/gr";
import Loading from "../Loading";

const ProjectDes = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let project = data.find((project) => project.id === id);
    if (project) {
      setProject(project);
      setLoading(false);
    } else setLoading(false);
  }, [id]);

  return <div>{loading ? <Loading /> : <View project={project} />}</div>;
};

const View = ({ project }) => {
  const nav = useNavigate();
  return (
    <div className="bg-bg-primary">
      <div className="px-5 md:px-20 pt-10 md:mx-40">
        {project ? (
          <div>
            <div className="flex py-5 justify-between">
              <button
                className="bg-btn-secondary p-2 rounded-lg text-text-secondary"
                type="button"
                onClick={() => nav("/")}
              >
                Profile
              </button>
              <div className="flex gap-2 text-text-primary items-center hover:text-white">
                <GrGithub size={22} />
                <a target="_blank" rel="noreferrer" href={project.details.repo}>
                  View Repository
                </a>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <img
                className="rounded-lg mt-5"
                src={project.img}
                alt={project.title}
              />
            </div>
            <div className="flex mt-5 flex-col gap-1">
              <div className="font-medium text-white text-3xl">
                {project.title}
              </div>
              <div className="text-text-info">
                Created on {project.createdOn}
              </div>
            </div>
            <div className="pt-[35px]">
              <h1 className="text-2xl text-text-highlight">Tech Stack</h1>
              <ul className="text-text-primary leading-[25px] m-[20px] list-disc">
                {project.details.stack.map((stack) => (
                  <li key={stack}>
                    <label key={stack}>{stack}</label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-[20px]">
              <h1 className="text-2xl text-text-highlight">Overview</h1>
              <div className="mt-[10px] text-text-primary">
                <p>{project.details.overview}</p>
                <div className="my-[20px] p-[20px] bg-card-primary">
                  <p>{project.details.working}</p>
                  <a
                    className="hover:text-blue-500"
                    target="_blank"
                    rel="noreferrer"
                    href={project.details.deployURL}
                  >
                    {project.details.deployURL}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h1 className="text-2xl text-text-highlight">
                Architecture Diagram & Services
              </h1>
              <div className="mt-5 flex justify-center items-center">
                <img src={project.details.architecture} alt={project.title} />
              </div>
            </div>

            <div className="mt-10 pb-10">
              <h1 className="text-2xl text-text-highlight">Dependencies</h1>
              <div className="mt-[20px] flex flex-col gap-2">
                {project.details.packageList.map((d,i) => (
                  <details key={i}>
                    <summary className="text-text-highlight" key={d.title}>
                      {d.title}
                    </summary>
                    <p className="text-text-primary m-3">{d.des}</p>
                    <a
                      className="text-blue-500 m-3"
                      href={d.ref}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {d.title}
                    </a>
                  </details>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <NoPage />
        )}
      </div>
    </div>
  );
};

export default ProjectDes;
