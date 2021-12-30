import React from "react";
import CharacterItem from "./CharacterItem";
import "./card.css";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="snip1515">
      <section className="primary">
        {items.map((item) => (
          <CharacterItem key={item.char_id} item={item}></CharacterItem>
        ))}
      </section>
    </div>
  );
};

export default CharacterGrid;
