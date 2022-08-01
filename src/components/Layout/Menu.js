import React, { useState } from "react";
import classes from "./Menu.module.css";
import ProductList from "../Product/ProductList";
import { data } from "../../assets/dummy-data/data";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import SearchError from '../Error Messages/SearchError'
const Menu = () => {
  const [search, setSearch] = useState("");

  const searchChangeHandler = (event) => {
    setSearch(event.target.value);
  };
  const filteredData = data.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  });
  console.log(filteredData);
  return (
    <div className={classes.menu}>
      <h1>
        Menu
        <DinnerDiningIcon style={{ fontSize: "5rem" }} />
      </h1>
      <div className={classes.search} id="menu">
        <input
          type="text"
          placeholder="&#128269; Search for your favourite food!"
          onChange={searchChangeHandler}
        />
      </div>
      {filteredData.length !==0 && <ProductList food={filteredData} />}
      {filteredData.length === 0 && <SearchError/> }
    </div>
  );
};

export default Menu;
