import "./App.css";
import { useState, useEffect } from "react";
import YoutubeAPI from "./YoutubeAPI";
import Infinitescroll from "./Infinitescroll";
function App() {
  const [search, setSearch] = useState("undefined");
  const [nextPageToken, setNextPageToken] = useState("");
  const [items, setItems] = useState([]);
  const [API, setAPI] = useState(
    `https://youtube.googleapis.com/youtube/v3/search?q=${search}&part=snippet&pageToken=${nextPageToken}&chart=mostPopular&regionCode=IN&maxResults=50&key=AIzaSyDzWn3REZH7cU0GX7XMv-H9IpE4ukrSj88`
  );

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
  return (
    <div className="App">
      <YoutubeAPI
        API={API}
        setAPI={setAPI}
        search={search}
        setSearch={setSearch}
        nextPageToken={nextPageToken}
        setNextPageToken={setNextPageToken}
        items={items}
        setItems={setItems}
      />
      {/* <Infinitescroll
        API={API}
        setAPI={setAPI}
        search={search}
        setSearch={setSearch}
        nextPageToken={nextPageToken}
        setNextPageToken={setNextPageToken}
        items={items}
        setItems={setItems}
      /> */}
    </div>
  );
}

export default App;
