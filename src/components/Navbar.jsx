import { React, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles/Navbar.module.css";
import Menu from "./Menu";
import { useState } from "react";

const Navbar = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const [w, sw] = useState({});

  useEffect(() => {
    const resizeListener = () => {
      const set = {
        wid : window.innerWidth,
      }
      sw(set);
      if(w.wid<1024 && isMenuActive){
        setMenuActive(false);
      }
    };
    window.addEventListener('resize', resizeListener);
    
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, [w,isMenuActive]);

  const clickMenu = () => {
    setMenuActive(false);
  };

  const navItemClicked = ({ isActive }) => {
    return {
      color: isActive ? "rgb(106, 106, 255)" : "#333",
    };
  };

  const menuHandler = () => {
    isMenuActive ? setMenuActive(false) : setMenuActive(true);
  };

  return (
    <>
      <div className={styles.__navbar}>
        <div className={styles.left}>
          <div className={styles.title1}>
            <label>
              <NavLink to="/">Kamal</NavLink>
            </label>
          </div>
          <div className={styles.title2}>
            <label>
              <NavLink to="/"> &nbsp;Teja</NavLink>
            </label>
          </div>
        </div>
        <div className={styles.right}>
          <ul>
            <li>
              <NavLink style={navItemClicked} to="/">
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink style={navItemClicked} to="/resume">
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink style={navItemClicked} to="/projects">
                Projects
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.menu} onClick={menuHandler}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        className={styles.menucon}
        onClick={clickMenu}
        style={{ display: isMenuActive ? "block" : "none" }}
      >
        <Menu />
      </div>
    </>
  );
};

export default Navbar;
