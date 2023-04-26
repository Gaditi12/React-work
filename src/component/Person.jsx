import React from "react";
function Person(props) {
  return (
    <>
      <div className="card">
        <img className="anime-image" src={props.imgUrl} alt={props.name} />

        <div className="name">
          <strong> {props.name},</strong>
        </div>

        <div className="name">{props.profession}</div>
      </div>
    </>
  );
}
export default Person;
