import React from "react";
import classes from "./SearchError.module.css";
const SearchError = () => {
  return (
    <div className={classes["search__error"]}>
      <h2>NOTHING MATCHES YOUR SEARCH</h2>
      <p>
        But don't give up - check the spelling or try less specific search
        terms.
      </p>
    </div>
  );
};

export default SearchError;
