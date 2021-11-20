import React from "react";
import { fetchedData } from "./YoutubeAPI";
import Component from "./component";
import { useRef, useState, useEffect, useContext, createContext } from "react";
import YoutubeAPI from "./YoutubeAPI";
const fetchedItems = createContext();
const Infinitescroll = ({
  API,
  setAPI,
  search,
  setSearch,
  nextPageToken,
  setNextPageToken,
  items,
  setItems,
}) => {
  const [isFetching, setIsFetching] = useState(false);
  const [tempAPI, setTempAPI] = useState(API);

  const data = useContext(fetchedData);
  var tempItem = [];
  // const [tempItem, setTempItem] = useState([data.items]);
  console.log(tempItem);
  if (tempItem.length === 0) {
    tempItem = data.items;
  }

  //   useEffect(() => {}, [once]);

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
    console.log("Fetch more list items!");
    setIsFetching(true);
  }

  const fetchMoreListItems = async () => {
    // console.log(tempAPI);
    const response = await fetch(tempAPI);

    setItems(await response.json());
    // console.log(items);
    setIsFetching(false);
  };
  useEffect(() => {
    if (!isFetching) return;

    setNextPageToken(data.nextPageToken);
    // console.log(tempItem.length);
    if (tempItem.length > 50) {
      // console.log(items.nextPageToken);
      setNextPageToken(items.nextPageToken);
    }
    console.log(nextPageToken);
  }, [isFetching]);
  useEffect(() => {
    setTempAPI(
      `https://youtube.googleapis.com/youtube/v3/search?q=${search}&part=snippet&pageToken=${nextPageToken}&chart=mostPopular&regionCode=IN&maxResults=50&key=AIzaSyDzWn3REZH7cU0GX7XMv-H9IpE4ukrSj88`
    );
  }, [nextPageToken]);
  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [tempAPI]);
  // console.log(data);
  // console.log();
  // console.log(data);

  useEffect(() => {
    if (items.length !== 0) {
      for (var i = 0; i < items.items.length; i++) {
        var arr = items.items.slice(i, i + 1);
        // console.log(arr);
        // setTempItem(tempItem.push(arr));
        tempItem.push(...arr);
      }
    }
  }, [items]);
  // console.log(tempItem);

  //   useEffect(() => {

  //   }, [data]);
  // console.log(items);
  return (
    <>
      {" "}
      <fetchedItems.Provider value={tempItem}>
        <Component />
      </fetchedItems.Provider>
    </>
  );
};

export default Infinitescroll;
export { fetchedItems };
