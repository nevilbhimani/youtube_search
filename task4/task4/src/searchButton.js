import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import YoutubeAPI from "./YoutubeAPI";
import { createContext } from "react";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
const dataToBeSearched = createContext();
export default function SearchButton({ search, setSearch, API, setAPI }) {
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const [input, setInput] = useState("");

  const handleSearch = (event) => {
    setInput(event.target.value);
  };
  // console.log(API);
  // console.log(search);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (input) {
      setSearch(input);
      // setAPI()
    }
  };
  return (
    <>
      <div
        className="searchBox"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <form onSubmit={handleSubmit}>
          <TextField id="fullWidth" label="search" onChange={handleSearch} />

          <button type="submit" className="search_icon">
            <SearchIcon />
          </button>
        </form>
      </div>
      {/* <dataToBeSearched.Provider value={search}>
        <YoutubeAPI />
      </dataToBeSearched.Provider> */}
    </>
  );
}
export { dataToBeSearched };
