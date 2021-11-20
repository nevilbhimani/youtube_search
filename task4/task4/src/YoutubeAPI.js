import React from "react";
import { createContext } from "react";
import { useContext } from "react";
import { useState, useRef } from "react";
import { useEffect } from "react";
import Component from "./component";
import Infinitescroll from "./Infinitescroll";
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
  setNextPageToken,
  items,
  setItems,
}) {
  const [data, setData] = useState([]);
  const [once, setOnce] = useState(true);
  // const searchItem = useContext(dataToBeSearched);

  const getData = async () => {
    const response = await fetch(API);
    setData(await response.json());

    // if (!once) return;
    // console.log(data);
    // console.log(data.items);
    // setItems([data.items]);
    // console.log(items);
    // if (items.length === 50) setOnce(false);
  };
  useEffect(() => {
    setAPI(
      `https://youtube.googleapis.com/youtube/v3/search?q=${search}&part=snippet&pageToken=${nextPageToken}&chart=mostPopular&regionCode=IN&maxResults=50&key=AIzaSyDzWn3REZH7cU0GX7XMv-H9IpE4ukrSj88`
    );
    getData();
    console.log(data);
  }, [search, API]);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // function handleScroll() {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop !==
  //     document.documentElement.offsetHeight
  //   )
  //     return;
  //   console.log("Fetch more list items!");
  // }
  // console.log(data.items);
  // const [items, setItems] = useState(data.items);
  // useEffect(() => {
  //   setAPI(
  //     `https://youtube.googleapis.com/youtube/v3/search?q=${search}&part=snippet&pageToken=${nextPageToken}&chart=mostPopular&regionCode=IN&maxResults=50&key=AIzaSyDzWn3REZH7cU0GX7XMv-H9IpE4ukrSj88`
  //   );
  // }, [nextPageToken]);

  // useEffect(() => {
  //   console.log(data.items);
  //   prevData.current = data.items;
  //   // console.log(prevData.current);
  //   // setItems([prevData.current]);
  // }, [nextPageToken]);

  // useEffect(() => {
  //   console.log(items);
  //   setItems([...items, data.items]);
  //   console.log(items);
  //   console.log(data.items);
  // }, [data]);

  // console.log(data.items.push(prevData.current.items));

  // var c = data.concat(prevData.current);

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
        <Infinitescroll
          API={API}
          setAPI={setAPI}
          search={search}
          setSearch={setSearch}
          nextPageToken={nextPageToken}
          setNextPageToken={setNextPageToken}
          items={items}
          setItems={setItems}
        />
      </fetchedData.Provider>
    </>
  );
}

export default YoutubeAPI;
export { fetchedData };
