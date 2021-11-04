import React from "react";
import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Component from "./component";
import SearchButton from "./searchButton";
import { dataToBeSearched } from "./searchButton";
const fetchedData = createContext();

function YoutubeAPI() {
  const [data, setData] = useState([]);
  const searchItem = useContext(dataToBeSearched);
  const getData = async () => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCAvj5CzKCj97WC39KBxQ0ka1O4fVrumvE `
    );
    setData(await response.json());
  };
  useEffect(() => {
    getData();
  }, [searchItem]);

  console.log(searchItem);
  console.log(data);
  return (
    <>
      <div>
        <SearchButton />
      </div>
      <fetchedData.Provider value={data}>
        <Component />
      </fetchedData.Provider>
    </>
  );
}

export default YoutubeAPI;
export { fetchedData };
