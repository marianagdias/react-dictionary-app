import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  const [keyword, setKeyword] = useState(null);
  function handleSearch(event) {
    event.preventDefault();
    alert(keyword);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <form className="Search" onSubmit={handleSearch}>
      <input type="search" autoFocus={true} placeholder="Write a word" />
      <input type="submit" value="Search" onChange={updateKeyword} />
    </form>
  );
}
