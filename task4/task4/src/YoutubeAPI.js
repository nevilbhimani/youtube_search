import React from "react";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Component from "./component";
const fetchedData = createContext();

function YoutubeAPI() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyCEU2dBI-LwK5WdJghtJ0kk5RToz8izdkg "
    );
    setData(await response.json());
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <>
      <fetchedData.Provider value={data}>
        <Component />
      </fetchedData.Provider>
    </>
  );
}

export default YoutubeAPI;
export { fetchedData };
