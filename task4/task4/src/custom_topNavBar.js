import React from "react";
import SearchButton from "./searchButton";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Button from "@mui/material/Button";

import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MicIcon from "@mui/icons-material/Mic";
import Youtubenew_generated from "./Youtubenew_generated.jpg";
const Custom_topNavBar = ({ search, setSearch, API, setAPI }) => {
  console.log(API);
  return (
    <>
      <Button className="menuiconButton">
        <MenuIcon className="iconButton" style={{ color: "black" }} />
      </Button>
      <Button className="yticon">
        {/* <YouTubeIcon fontSize="large" style={{ color: "red" }} />
        YouTube */}
        <img src={Youtubenew_generated} className="yticon"></img>
      </Button>
      <SearchButton
        API={API}
        setAPI={setAPI}
        search={search}
        setSearch={setSearch}
      />
      <Button className="micbttn">
        <MicIcon />
      </Button>
      <Button className="bellbttn">
        <NotificationsIcon className="bell" />
      </Button>
      <Button className="appbttn">
        <AppsIcon className="app" />
      </Button>
      <Button className="createbtn">
        <VideoCallIcon className="create" />
      </Button>
    </>
  );
};

export default Custom_topNavBar;
