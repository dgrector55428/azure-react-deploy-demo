import React from "react";
import { Link } from "react-router-dom";

function Page2() {
  return (
    <div className="page page2">
      <div className="flagTop" />
      <div className="flagCenter">
        <h1 className="page">PAGE 2</h1>
        <div className="otherLinks">
          <Link to="/page1">PAGE 1</Link>
          <Link to="/">Home</Link>
        </div>
      </div>
      <div className="flagBottom" />
    </div>
  );
}

export default Page2;
