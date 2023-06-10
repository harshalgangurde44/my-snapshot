import React from "react";
import Container from "./Container";
import "./item.css";
const Item = ({ searchTerm }) => {
  return (
    <div className="flex">
      <center>
        <h2>{searchTerm} Pictures</h2>
        <Container searchTerm={searchTerm} />
      </center>
    </div>
  );
};

export default Item;
