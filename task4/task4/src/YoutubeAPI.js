import React from "react";
import { createContext } from "react";
import { useContext } from "react";
import { useState, useRef } from "react";
import { useEffect } from "react";
import Component from "./component";
import Divider from "@mui/material/Divider";
import SearchButton from "./searchButton";
import PrimarySearchAppBar from "./topNavBar.js";
// import { dataToBeSearched } from "./searchButton";
import Custom_topNavBar from "./custom_topNavBar";
const fetchedData = createContext();

function YoutubeAPI({
  API,
  setAPI,
  search,
  setSearch,
  nextPageToken,
  setnextPageToken,
}) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  // const searchItem = useContext(dataToBeSearched);
  const [lastCard, setlastCard] = useState();
  const getData = async () => {
    const response = await fetch(API);
    setData(await response.json());
  };
  useEffect(() => {
    setAPI(
      `https://youtube.googleapis.com/youtube/v3/search?q=${search}&part=snippet&pageToken=${nextPageToken}&chart=mostPopular&regionCode=IN&maxResults=50&key=AIzaSyCEU2dBI-LwK5WdJghtJ0kk5RToz8izdkg `
    );
    getData();
  }, [search, API]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setIsFetching(true);
    console.log("Fetch more list items!");
  }
  useEffect(() => {
    if (!isFetching) return;
    setnextPageToken(data.nextPageToken);
    fetchMoreListItems();
  }, [isFetching]);
  const prevData = useRef("");
  useEffect(() => {
    setAPI(
      `https://youtube.googleapis.com/youtube/v3/search?q=${search}&part=snippet&pageToken=${nextPageToken}&chart=mostPopular&regionCode=IN&maxResults=50&key=AIzaSyCEU2dBI-LwK5WdJghtJ0kk5RToz8izdkg `
    );
  }, [nextPageToken]);
  useEffect(() => {
    prevData.current = data;
  }, [data]);
  function fetchMoreListItems() {
    setTimeout(() => {
      console.log();
      setData([{ ...prevData.current }, { ...data }]);
      setIsFetching(false);
    }, 2000);
  }
  console.log([{ ...prevData.current }, { ...data }]);
  console.log(prevData.current);
  // var c = data.concat(prevData.current);
  // console.log(c);
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
