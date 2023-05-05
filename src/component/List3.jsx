import React from "react";
import ContactInfo from "./ContactInfo";
import contacts from "./Contact";
function createConatct(contact) {
  return (
    <ContactInfo
      id={contact.id}
      key={contact.id}
      name={contact.name}
      imageURL={contact.imgUrl}
    />
  );
}
function List3() {
  return (
    <>
      <div>
        <h2>One-piece Anime Character</h2>
        {contacts.map(createConatct)}
      </div>
    </>
  );
}
export default List3;
