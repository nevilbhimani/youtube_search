import { fetchedData } from "./YoutubeAPI";
import React, { useContext } from "react";

function Component() {
  const context = useContext(fetchedData);
  console.log(context);
  return <div></div>;
}

export default Component;
