import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Module/Header.module.css";

const Header = () => {

  return (
    <div className={styles.nav}>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "red" } : { color: "black" }
        }
        className={styles.navlink}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "red" } : { color: "black" }
        }
        className={styles.navlink}
        to="/review"
      >
        review
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "red" } : { color: "black" }
        }
        className={styles.navlink}
        to="/dashboard"
      >
        dashboard
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "red" } : { color: "black" }
        }
        className={styles.navlink}
        to="/blogs"
      >
        blogs
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "red" } : { color: "black" }
        }
        className={styles.navlink}
        to="/about"
      >
        about
      </NavLink>
    </div>
  );
};

export default Header;
