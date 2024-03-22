"use client";

import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function Chanells() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={chanells}
      sx={{ width: 300, borderRadius: 30 }}
      renderInput={(params) => <TextField {...params} label="Chanells" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const chanells = [
  { label: "Instagram", value: "instagram" },
  { label: "Twitter", value: "twitter" },
  { label: "TikTok", value: "tiktok" },
  { label: "Linkedin", value: "linkedin" },
  { label: "Snapchat", value: "snapchat" },
  { label: "Factbook", value: "facebook" }
];
