import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <p className="Synonyms">
        <strong>Synonyms: {props.synonyms}</strong>
      </p>
    );
  } else {
    return null;
  }
}
