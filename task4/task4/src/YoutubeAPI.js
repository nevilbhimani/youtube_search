import React from "react";
import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Component from "./component";
import Divider from "@mui/material/Divider";
import SearchButton from "./searchButton";
import PrimarySearchAppBar from "./topNavBar.js";
import { dataToBeSearched } from "./searchButton";
import Custom_topNavBar from "./custom_topNavBar";
const fetchedData = createContext();

function YoutubeAPI({ API, setAPI, search, setSearch }) {
  const [data, setData] = useState([]);
  const searchItem = useContext(dataToBeSearched);

  const getData = async () => {
    const response = await fetch(API);
    setData(await response.json());
  };
  useEffect(() => {
    setAPI(
      `https://youtube.googleapis.com/youtube/v3/search?q=${search}&part=snippet&key=AIzaSyCEU2dBI-LwK5WdJghtJ0kk5RToz8izdkg `
    );
    getData();
    console.log(search);
    console.log(API);
  }, [search]);

  console.log(search);
  // console.log(
  //   `https://youtube.googleapis.com/youtube/v3/search?q=${search}&part=snippet&key=AIzaSyCEU2dBI-LwK5WdJghtJ0kk5RToz8izdkg `
  // );
  console.log(data);
  return (
    <>
      <div>
        <Custom_topNavBar
          API={API}
          setAPI={setAPI}
          search={search}
          setSearch={setSearch}
        />
      </div>
      {/* <Divider className="divider" /> */}
      <fetchedData.Provider value={data}>
        <Component />
      </fetchedData.Provider>
    </>
  );
}

export default YoutubeAPI;
export { fetchedData };
