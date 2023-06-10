import React from "react";
import Form from "./Form";
import Navigation from "./Navigation";

const Header = ({ history, handleSubmit }) => {
  const heading = {
    color: "white",
    fontSize: "20px",
    backgroundColor: "blue",
    padding: "20px",
  };
  return (
    <div>
      <center>
        <h1 style={heading}>SNAPSHOT</h1>

        <Form history={history} handleSubmit={handleSubmit} />
        <Navigation />
      </center>
    </div>
  );
};

export default Header;
