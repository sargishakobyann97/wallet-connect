import React from "react";
import Aside from "../Aside";
import Header from "../Header";
import MainContent from "../Main-Content";
import "./style.scss";

function Container() {
  return (
    <div>
      <div className="container">
        <Header />
        <Aside />
        <MainContent />
      </div>
    </div>
  );
}

export default Container;
