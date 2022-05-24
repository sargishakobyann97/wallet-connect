import React, { useState } from "react";
import Aside from "../Aside";
import Header from "../Header";
import MainContent from "../Main-Content";
import ReceiveModal from "../ReceiveModal";
import "./style.scss";

function Container() {
  const [showReceiveModal, setShowReceiveModal] = useState(false)

  return (
    <div>
      <div className="container">
        <Header />
        <Aside />
        <MainContent setShowReceiveModal={setShowReceiveModal} />
        {showReceiveModal && <ReceiveModal setShowReceiveModal={setShowReceiveModal} />}
      </div>
    </div>
  );
}

export default Container;
