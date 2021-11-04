import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import YoutubeAPI from "./YoutubeAPI";
import { createContext } from "react";
const dataToBeSearched = createContext();
export default function SearchButton() {
  const [search, setSearch] = useState([]);
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="search"
          variant="outlined"
          onChange={(content) => setSearch(content.target.value)}
        />
      </Box>
      <dataToBeSearched.Provider value={search}>
        <YoutubeAPI />
      </dataToBeSearched.Provider>
    </>
  );
}
export { dataToBeSearched };
