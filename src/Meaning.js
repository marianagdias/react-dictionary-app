import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p className="synonyms">
        <strong>
          Synonyms:{" "}
          {props.meaning.synonyms.map(function (synonyms, index) {
            return <span key={index}> {synonyms} </span>;
          })}
        </strong>
      </p>
      {props.meaning.definitions.map(function (definition, index) {
        if (definition.example) {
          return (
            <div className="content" key={index}>
              {/* <Synonyms synonyms={definition.synonyms} /> */}
              <p>
                <strong>Definition: </strong>
                {definition.definition}
              </p>

              <p>
                <strong>Example: </strong>
                <em>{definition.example}</em>
              </p>
            </div>
          );
        } else {
          return (
            <div className="content" key={index}>
              <p>
                <strong>Definition: </strong>
                {definition.definition}
              </p>
            </div>
          );
        }
      })}
    </div>
  );
}
