import React from "react";
import styles from "./styles/Menu.module.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const navClicked = ({ isActive }) => {
    return {
      color: isActive ? "rgb(106, 106, 255)" : "#333",
    };
  };
  return (
    <div className={styles.mCon} style={{display: 'flex',justifyContent: "center",alignItems: "center"}}>
      <div>
        <NavLink style={navClicked} to="/">
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink style={navClicked} to="/resume">
          Resume
        </NavLink>
      </div>
      <div>
      <NavLink style={navClicked} to="/projects">
        Projects
      </NavLink>
      </div>
    </div>
  );
};

export default Menu;
