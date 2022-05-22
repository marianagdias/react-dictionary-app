import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  const [keyword, setKeyword] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  function handleSearch(event) {
    event.preventDefault();
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`)
      .then(handleResponse);
  }

  return (
    <form className="Search" onSubmit={handleSearch}>
      <input type="search" autoFocus={true} placeholder="Write a word" />
      <input type="submit" value="Search" onChange={updateKeyword} />
    </form>
  );
}
