import axios from "axios";
import React, { useRef, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";
import SearchedItem from "./SearchedItem";

function Searchbar() {
  const [searched, setSearched] = useState([]);
  const [search, setSearch] = useState("");
  const [character, setCharacter] = useState(true);
  const inputRef = useRef();
  const [isOutsideClick, setIsOutsideClick] = useClickOutside(inputRef);
  console.log(isOutsideClick);

  const handleChange = (e) => {
    setSearch(e.target.value);
    fetchData(e.target.value);
    
  };

  const fetchData = async (search) => {
    if (!search) {
      setSearched([]);
      return;
    }

    const res = await axios.get(
      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&apikey=75ff82aee4aef7e1bdb522eea36271d4`
    );
    if (res.data.data.results.length === 0) {
      setSearched([{ name: "Karakter Bulunamadı" }]);
      setCharacter(false);
      return;
    }
    if (res.statusText === "OK") {
      setSearched(res.data.data.results);
      setCharacter(true);
    }
  };

  return (
    <div className="input-area" >
      <div className="input-container" ref={inputRef}>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleChange}
          onClick={() => setIsOutsideClick(false)}
          
        />
        <ul>
          {!isOutsideClick && (
            <>
              {searched?.slice(0, 5).map((item) => {
                return (
                  <li key={item.id}>
                    <SearchedItem item={item} character={character} />
                  </li>
                );
              })}
            </>
          ) }
        </ul>
      </div>
    </div>
  );
}

export default Searchbar;
