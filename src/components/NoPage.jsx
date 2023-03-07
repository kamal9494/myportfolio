import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles/NoPage.module.css";

const NoPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <div style={{ fontSize: "4rem" }}>404</div>
      </div>
      <label>Page not exist</label>
      <div className={styles.travel}>
        <div>
          Would you like to view my {<NavLink to="/profile/home">Profile</NavLink>} ?
        </div>
      </div>
    </div>
  );
};
export default NoPage;
