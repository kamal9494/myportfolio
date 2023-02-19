import React from "react";
import styles from "./styles/Projects.module.css";
import Model from "./common/ProjectItem/Model";
import { data } from "../config/data";

const Projects = () => {

  

  return (
    <div className={styles.container}>
        {data.map((project) => (
          <div key={project.id} className={styles.projects_wrap}>
          <Model project={project} />
          </div>
        ))}
    </div>
  );
};

export default Projects;
