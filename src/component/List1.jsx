import React from "react";
import Comment from "./Comment";
const comment = {
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "http://placekitten.com/g/64/64",
  },
};
function List1() {
  return (
    <>
      <Comment photo={comment.author} text={comment.text} />
    </>
  );
}
export default List1;
