import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <span className="Phonetics">
      <h3>{props.phonetics.text}</h3>
      <audio controls src={props.phonetics.audio}>
        This element is not supported by your browser
      </audio>
    </span>
  );
}
