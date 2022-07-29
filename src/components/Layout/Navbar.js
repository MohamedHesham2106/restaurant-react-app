import React, { useState } from "react";
import CartButton from "../Cart/CartButton";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [bgColor, setBgColor] = useState(false);
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
  };
  window.addEventListener("scroll", changeColor);

  return (
    <header className={`${classes.navbar} ${bgColor ? classes.bg : ""}`}>
      <h1>Groove</h1>
      <nav>
        <ul>
          <li onClick={scrollToSection}>about</li>
          <li onClick={scrollToSection}>menu</li>
          <li>contact</li>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
