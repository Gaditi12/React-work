import React from "react";

function DisplayingData() {
  const userData = {
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/SUSzE6J.jpeg",
    imageSize: 50,
  };

  return (
    <>
      <div className="div-box">
        <h1>{userData.name}</h1>
        <img
          src={userData.imageUrl}
          alt=""
          style={{ height: userData.imageSize, width: userData.imageSize }}
          className="hedy"
        />
      </div>
    </>
  );
}
export default DisplayingData;
