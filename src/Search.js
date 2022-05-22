import React from "react";
import "./Search.css";

export default function Search() {
  function handleSearch(event) {
    event.preventDefault();
  }
  return (
    <form className="Search" onSubmit={handleSearch}>
      <input type="search" autoFocus={true} placeholder="Write a word" />
      <input type="submit" value="Search" />
    </form>
  );
}
