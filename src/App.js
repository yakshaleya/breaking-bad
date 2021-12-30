import "./styles.css";
import Header from "./components/Header";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterGrid from "./components/CharacterGrid";
import Search from "./components/Search";

export default function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      console.log(result);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);
  return (
    <div className="bg">
      <Header />
      <Search
        getQuery={(name) => {
          setQuery(name);
        }}
      />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}
