import {
  AppBar,
  TextField,
  Typography,
  MenuItem,
  CssBaseline,
} from "@material-ui/core";
import React from "react";
import "./Header.css";
import categories from "../data/category";
const Header = ({ category, setCategory, word, setWord }) => {
  const handleChange = (language) => {
    setCategory(language);
    setWord("");
  };
  return (
    <div>
      <CssBaseline />
      <AppBar className="appbar">
        <Typography variant="h6" style={{ textAlign: "center" }}>
          LEXICON
        </Typography>
      </AppBar>
      <div className="inputs">
        <TextField
          id="search"
          label="Search"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          className="search"
        />
        <TextField
          select
          value={category}
          onChange={(e) => handleChange(e.target.value)}
          label="Language"
          className="search"
        >
          {categories.map((option) => (
            <MenuItem key={option.lable} value={option.label}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </div>
  );
};

export default Header;
