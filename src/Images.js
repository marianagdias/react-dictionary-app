import React from "react";
import "./Images.css";

export default function Images(props) {
  if (props.photos) {
    return (
      <div className="Images container">
        <div className="row">
          {props.photos.map(function (photos, index) {
            if (index <= 5) {
              return (
                <div className="col-lg">
                  <img
                    className="img-fluid"
                    width="200px"
                    src={photos.src.landscape}
                    alt={photos.alt}
                  />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
