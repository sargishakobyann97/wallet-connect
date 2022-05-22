import React from "react";
import Aside from "../Aside";
import Header from "../Header";
import "./style.scss";

function Container() {
  return (
    <div>
      <div className="container">
        <Header />
        <Aside />
      </div>
    </div>
  );
}

export default Container;
