import React from "react";
// import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      {props.meanings.map(function (meanings, index) {
        return (
          <div key={index}>
            <h3>{meanings.partOfSpeech}</h3>
            <p>
              <strong>Synonyms: {meanings.synonyms}</strong>
            </p>
            {meanings.definitions.map(function (definition, index) {
              return (
                <div key={index}>
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
            })}
          </div>
        );
      })}
    </div>
  );
}
