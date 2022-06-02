import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning container">
      <h3 className="row">{props.meaning.partOfSpeech}</h3>
      {props.meaning.synonyms && (
        <div className="row synonyms">
          <div className="col-md-2">
            <strong>Synonyms:</strong>
          </div>
          <div className="col-md-9">
            {props.meaning.synonyms.map(function (synonyms, index) {
              return (
                <strong className="synonym" key={index}>
                  {synonyms}{" "}
                </strong>
              );
            })}
          </div>
        </div>
      )}
      {props.meaning.definitions.map(function (definition, index) {
        if (definition.example) {
          return (
            <div className="content" key={index}>
              {/* <Synonyms synonyms={definition.synonyms} /> */}
              <p className="row">
                <strong className="col-md-2">Definition: </strong>
                <div className="col-md-9"> {definition.definition}</div>
              </p>

              <p className="row example">
                <strong className="col-md-2"></strong>
                <em className="col-md-9">{definition.example}</em>
              </p>
            </div>
          );
        } else {
          return (
            <div className="content" key={index}>
              <p className="row">
                <strong className="col-md-2">Definition: </strong>
                <div className="col-md-9"> {definition.definition}</div>
              </p>
            </div>
          );
        }
      })}
    </div>
  );
}
