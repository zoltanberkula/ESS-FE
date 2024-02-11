//DEFAULT IMPORTS
import React from "react";
import "../App.css";
//DEFAULT IMPORTS

export const HomePageHeader = (props) => {
  return (
    <header className="header">
      <h2>{props.caption}</h2>
    </header>
  );
};
