import React, { useEffect, useState } from "react";
function UseEffectApi() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    //console.log(response);
    setData(await response.json());
    //console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <h2>Fetched data</h2>

      {data
        .map((element) => {
          return (
            <>
              <div
                style={{
                  display: "inline-block",
                  backgroundColor: "#eeeeee",
                  margin: 10,
                }}
              >
                <p>{element.id}</p>
                <p>{element.title}</p>
                <img
                  src={element.url}
                  alt="img"
                  style={{ width: 400, height: 400 }}
                />
              </div>
            </>
          );
        })
        .slice(0, 6)}
    </>
  );
}
export default UseEffectApi;
