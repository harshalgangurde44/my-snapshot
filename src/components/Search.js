import React from "react";
import Container from "./Container";

const Search = ({ searchTerm }) => {
  return (
    <div>
      <center>
        <h2>{searchTerm} </h2>
        <Container searchTerm={searchTerm} />
      </center>
    </div>
  );
};

export default Search;
