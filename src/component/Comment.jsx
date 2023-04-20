import React from "react";

function Comment(props) {
  return (
    <>
      <div>
        <img src={props.photo.avatarUrl} alt="" />
        <div>{props.photo.name}</div>
      </div>
      <p>{props.text}</p>
    </>
  );
}
export default Comment;
