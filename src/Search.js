import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Results from "./Results";
import Images from "./Images";

export default function Search() {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);
  const [images, setImages] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  function handlePexelsResponse(response) {
    setImages(response.data.photos);
  }

  function handleSearch(event) {
    event.preventDefault();
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`)
      .then(handleResponse);

    const pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}`;
    const token = "563492ad6f91700001000001a329a3f741c14070ac5caa781252f9a6";
    axios({
      method: "get",
      url: `${pexelsUrl}`,
      headers: { Authorization: `Bearer ${token}` },
    }).then(handlePexelsResponse);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSearch}>
        <input
          type="search"
          autoFocus={true}
          placeholder="Write a word"
          className="search-bar form form-control"
          onChange={updateKeyword}
        />

        <input type="submit" value="Search" className="btn btn-dark" />
      </form>
      <Results data={results} />
      <Images photos={images} />
    </div>
  );
}
