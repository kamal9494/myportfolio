import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProjectDes.module.css";
import { useNavigate } from "react-router-dom";
import { data } from "../../../config/data";
import NoPage from "../../NoPage";
import { GrGithub } from "react-icons/gr";

const ProjectDes = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    let project = data.find((project) => project.id === parseInt(id));
    if (project) {
      setProject(project);
    }
  }, [id]);

  return (
    <div className={styles.container}>
      <div className={styles.content_wrap}>
        {project ? (
          <div className={styles.container_wrap}>
            <div className={styles.back_wrap}>
              <button onClick={() => nav("/projects")}>&#x2190; Back</button>
              <div className={styles.source}>
                <GrGithub size={22} />
                <a target="_blank" rel="noreferrer" href={project.details.repo}>
                  View Repository
                </a>
              </div>
            </div>
            <div className={styles.thumb}>
              <img src={project.img} alt={project.title} />
            </div>
            <div className={styles.title_wrap}>
              <div className={styles.title}>{project.title}</div>
              <div className={styles.createdDate}>
                Created on {project.createdOn}
              </div>
            </div>
            {/* <div className={styles.image_wrap}>
              <img src={project.img} alt={project.title} />
            </div> */}
            <div className={styles.section_wrap_top}>
              <h1>Tech Stack</h1>
              <ul>
                {project.details.stack.map((stack) => (
                  <li key={stack}>
                    <label key={stack}>{stack}</label>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.section_wrap}>
              <h1>Overview</h1>
              <div className={styles.content}>
                <p>{project.details.overview}</p>
                <div className={styles.url}>
                  <p>{project.details.working}</p>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={project.details.deployURL}
                  >
                    {project.details.deployURL}
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.section_wrap}>
              <h1>Architecture Diagram & Services</h1>
              <div className={styles.image_wrap}>
                <img src={project.details.architecture} alt={project.title} />
              </div>
            </div>

            <div className={styles.section_wrap_top}>
              <h1>Dependencies</h1>
              <p></p>
              <div className={styles.ref_content}>
                {project.details.packageList.map((d) => (
                  <details>
                    <summary className={styles.sum_div} key={d.title}>
                      {d.title}
                    </summary>
                    <p className={styles.des}>{d.des}</p>
                    <a
                      className={styles.ref}
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
