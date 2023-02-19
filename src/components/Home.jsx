import React from "react";
import styles from "./styles/Home.module.css";
import SideBar from "./SideBar";

export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <SideBar />
      </div>

      <div className={styles.right}>
        <div className={styles.content}>
          <label className={styles.SecTitle}>About Me</label>
          <p className={styles.about}>
            I am Kamal Teja, student at Vellore Institute of Technology,
            Amaravati currently pursuing 3<sup>rd</sup> year Bachelor's in
            Computer Science Engineering.
          </p>
        </div>
        {/* Education -- start */}
        <div className={styles.edudiv}>
          <label className={styles.SecTitle}>Education</label>
          <div>
            <label className={styles.eduTitle}>
              <p>Vellore Institute of Technology, Andhra Pradesh.</p>
            </label>
            <p>Bachelor's Degree, Computer Science</p>
            <p>2020 - 2024</p>
          </div>
        </div>
        {/* Education -- end */}
        <div className={styles.dash}>
          <div className={styles.content}>
            <h2 className={styles.SecTitle}>Skills</h2>
            <div className={styles.skills}>
              <p className={styles.skill_title}>Java</p>
              <p className={styles.skill_title}>JavaScript</p>
              <p className={styles.skill_title}>React JS framework</p>
              <p className={styles.skill_title}>HTML & CSS</p>
              <p className={styles.skill_title}>PHP</p>
              <p className={styles.skill_title}>MongoDB</p>
            </div>
          </div>
          <div>
            <h2 className={styles.SecTitle}>Interests</h2>
            <ul>
              <li className={styles.skill_title}>Full Stack Development</li>
              <li className={styles.skill_title}>Problem Solving</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className={styles.SecTitle}>Certifications</h2>
          <div className={styles.certify_wrap}>
            <a target="_blank" rel="noreferrer" href="https://www.coursera.org/account/accomplishments/verify/R3YRY7DTBF73">Server-side Development with NodeJS, Express and MongoDB</a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
