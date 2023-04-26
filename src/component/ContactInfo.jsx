import React from "react";
function ContactInfo(props) {
  return (
    <div className="">
      <div className="top">
        {props.id}

        <img className="anime-image" src={props.imageURL} alt={props.name} />
        <p className="name">{props.name}</p>
      </div>
    </div>
  );
}
export default ContactInfo;
