import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Typography } from "@material-ui/core";
import useStyles from "./style";
import Header from "./Component/Header";
import Definitions from "./Component/Definitions";

function App() {
  const classes = useStyles();
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const [word, setWord] = useState("");

  useEffect(() => {
    const dictionaryApi = async () => {
      try {
        const data = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`,
          { method: "GET" }
        );
        setMeanings(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    dictionaryApi();
  }, [word, category]);

  console.log(meanings);
  return (
    <div
      className="App"
      style={{ color: "white", height: "100vh", backgroundColor: "" }}
    >
      <Container maxWidth="md" className={classes.container}>
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />
        {meanings && (
          <Definitions word={word} meanings={meanings} category={category} />
        )}
      </Container>
    </div>
  );
}

export default App;
