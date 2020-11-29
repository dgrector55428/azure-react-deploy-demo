import React from "react";
import { Link } from "react-router-dom";

function Page1() {
  return (
    <div className="page page1">
      <div className="flagTop" />
      <div className="flagCenter">
        <h1 className="page">PAGE 1</h1>
        <div className="otherLinks">
          <Link to="/page2">PAGE 2</Link>
          <Link to="/">Home</Link>
        </div>
      </div>
      <div className="flagBottom" />
    </div>
  );
}

export default Page1;
