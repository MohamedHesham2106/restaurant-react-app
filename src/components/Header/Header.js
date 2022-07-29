import React from "react";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes["header-text"]}>
        <p>Easy way to order your food!</p>
        <h1>
          Order Tasty &amp; Fresh Food <span>anytime!</span>
        </h1>
        <p>Just confirm your order and enjoy our delicious fastest delivery</p>
      </div>
    </div>
  );
};

export default Header;
