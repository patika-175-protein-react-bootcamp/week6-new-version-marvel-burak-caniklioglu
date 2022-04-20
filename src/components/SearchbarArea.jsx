import React from "react";
import Searchbar from "../components/Searchbar";
import Langs from "./Langs";

function SearchbarArea() {
  return (
    <>
      <div className="searchbar-area">
        <div className="searchbar-container">
          <Searchbar />
          <div>
            <Langs />
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchbarArea;
