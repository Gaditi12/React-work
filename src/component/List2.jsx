import React from "react";

import Person from "./Person";
import people from "./People";
function personDetail(detail) {
  return (
    <Person
      id={detail.id}
      key={detail.id}
      imgUrl={detail.imgUrl}
      name={detail.name}
      profession={detail.profession}
    />
  );
}
function List2() {
  return (
    <>
      <div className="another">
        <h2>SCIENTIST</h2>
        {people.map(personDetail)}
      </div>
    </>
  );
}
export default List2;
