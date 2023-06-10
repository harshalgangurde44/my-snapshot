import React from "react";
import "./item.css";
const Image = ({ url, title }) => (
  <center>
    <div className="image">
      {" "}
      <img height="200px" width="200px" src={url} alt={title} />{" "}
    </div>
  </center>
);

export default Image;
