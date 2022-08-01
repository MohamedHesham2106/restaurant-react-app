import React, { useState } from "react";
import CartButton from "../Cart/CartButton";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [bgColor, setBgColor] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const ExpandNavHandler = () => {
    setIsNavExpanded(!isNavExpanded);
  };
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  };
  const scrollToSection = (event) => {
    document.querySelector(`#${event.target.innerHTML}`).scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    setIsNavExpanded(false);
  };
  window.addEventListener("scroll", changeColor);

  return (
    <header className={`${classes.navbar} ${bgColor ? classes.bg : ""}`}>
      <h1>Groove</h1>
      <nav>
        <ul
          className={
            isNavExpanded
              ? `${classes["nav-menu"]} ${classes["active"]}`
              : classes["nav-menu"]
          }
        >
          <li onClick={scrollToSection}>about</li>
          <li onClick={scrollToSection}>menu</li>
          <li onClick={ExpandNavHandler}>
            <CartButton />
          </li>
        </ul>
        <div
          className={classes["navbar__menu-icon"]}
          onClick={ExpandNavHandler}
        >
          <i
            className={
              isNavExpanded
                ? `fas fa-times  ${classes.times}`
                : `fas fa-bars  ${classes.bars}`
            }
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
