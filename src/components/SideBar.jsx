import React from "react";
import styles from "./styles/SideBar.module.css";
import { BsLinkedin ,BsFileText} from "react-icons/bs";
import { GrMail, GrGithub } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";
// import { useNavigate } from "react-router-dom";

const SideBar = () => {
  // const navigate = useNavigate();
  // const toProjects = () => {
  //   navigate("/projects");
  // };

  return (
    <div className={styles.left}>
      <div className={styles.leftWrap}>
        <div className={styles.image_wrap}>
          <img
            className={styles.img_profile}
            src={require("../assets/profile1.png")}
            alt="pic"
          />
        </div>
        <div className={styles.title}>
          <label>Kamal Teja</label>
        </div>

        {/* contact  */}
        <div className={styles.contact}>
          <div>
          <div className={styles.con}>
              <BsFileText size={22} />
              <label>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1HTkpEPOvAil-LLJByrjAoQgxWd85Ssfo/view?usp=sharing"
                >
                  cv
                </a>
              </label>
              <br />
            </div>
            <div className={styles.con}>
              <SiLeetcode size={22} />
              <label>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://leetcode.com/kamal_94/"
                >
                  leetcode
                </a>
              </label>
              <br />
            </div>
            <div className={styles.con}>
              <GrGithub size={22} />
              <label>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/kamal9494"
                >
                  kamal9494
                </a>
              </label>
              <br />
            </div>
            <div className={styles.con}>
              <BsLinkedin size={22} />
              <label>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/kamal-teja/"
                >
                  connect
                </a>
              </label>
              <br />
            </div>
            <div className={styles.con}>
              <GrMail size={22} />
              <label>kamaltejp@gmail.com</label>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
