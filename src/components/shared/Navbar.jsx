import React from "react";

import { Link, useLocation } from "react-router-dom";

// Styles
import styles from "./Navbar.module.css";

const Navbar = () => {
  let name = useLocation().pathname;
  console.log(name);
  return (
    <div className={styles.container}>
      <div className={`${styles.task} ${name === "/" && styles.active}`}>
        <Link to="/">To Do List</Link>
      </div>
      {/* <div className={`${styles.task} ${name === "/task" && styles.active}`}>
        <Link to="/task">Task</Link>
      </div> */}
    </div>
  );
};

export default Navbar;
