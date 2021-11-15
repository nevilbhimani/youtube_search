import "./App.css";
import { useState } from "react";
import YoutubeAPI from "./YoutubeAPI";
function App() {
  const [search, setSearch] = useState("undefined");
  const [nextPageToken, setnextPageToken] = useState("");
  const [API, setAPI] = useState(
    `https://youtube.googleapis.com/youtube/v3/search?q=${search}&part=snippet&pageToken=${nextPageToken}&chart=mostPopular&regionCode=IN&maxResults=50&key=AIzaSyCEU2dBI-LwK5WdJghtJ0kk5RToz8izdkg `
  );
  return (
    <div className="App">
      <YoutubeAPI
        API={API}
        setAPI={setAPI}
        search={search}
        setSearch={setSearch}
        nextPageToken={nextPageToken}
        setnextPageToken={setnextPageToken}
      />
    </div>
  );
}

export default App;
