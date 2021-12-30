import react, { useState } from "react";
const Search = ({ getQuery }) => {
  const [text, setText] = useState("");
  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };
  return (
    <section>
      <form>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          placeholder="Search the characters"
        />
      </form>
    </section>
  );
};

export default Search;
