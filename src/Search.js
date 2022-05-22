import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Results from "./Results";

export default function Search() {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
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
    <div className="Search">
      <form onSubmit={handleSearch}>
        <input
          type="search"
          autoFocus={true}
          placeholder="Write a word"
          className="search-bar form form-control"
        />

        <input
          type="submit"
          value="Search"
          onChange={updateKeyword}
          className="btn btn-dark"
        />
      </form>
      <Results data={results} />
    </div>
  );
}
