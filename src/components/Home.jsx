import React from "react";
import styles from "./styles/Home.module.css";
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const toProjects = () => {
    navigate("/projects");
  };
  const toChatBot = () => {
    navigate("/project/1");
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <SideBar />
        </div>

        <div className={styles.right}>
          <div>
            <div className={styles.content}>
              <label className={styles.SecTitle}>Intro</label>
              <p className={styles.about}>
                I'm Kamal Teja, currently pursuing my final year of a bachelor's
                degree in Computer Science Engineering. My interests are web
                development and problem solving.
              </p>
            </div>
            <div className={styles.content}>
              <div className={styles.SecTitleWrap}>
                <h2 className={styles.SecTitle}>Projects</h2>
                <button type="button" onClick={() => toProjects()}>Browse all</button>
              </div>
              <div className={styles.about}>
                <span
                  className={styles.project_btn}
                  onClick={() => toChatBot()}
                >
                  ChatBot Web Application using AWS Amplify as backend
                </span>
                <a className={styles.live} rel="noreferrer" target="_blank" href="https://academicbot.netlify.app">live demo</a>
              </div>
            </div>
            <div className={styles.dash}>
              <div>
                <h2 className={styles.SecTitle}>Skills</h2>
                <div className={styles.skills}>
                  <p className={styles.skill_title}>Java</p>
                  <p className={styles.skill_title}>JavaScript</p>
                  <p className={styles.skill_title}>React JS</p>
                  <p className={styles.skill_title}>HTML & CSS</p>
                  {/* <p className={styles.skill_title}>PHP</p>
                  <p className={styles.skill_title}>MongoDB</p> */}
                </div>
              </div>
            </div>
          </div>
          {/* <div>
          <h2 className={styles.SecTitle}>Certifications</h2>
          <div className={styles.certify_wrap}>
            <a target="_blank" rel="noreferrer" href="https://www.coursera.org/account/accomplishments/verify/R3YRY7DTBF73">Server-side Development with NodeJS, Express and MongoDB</a>
          </div>
        </div> */}
        </div>
      </div>
    </>
  );
}
