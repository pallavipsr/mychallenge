




import React, { useState } from "react";
import "./light.css";

function LightingBulb() {
  let [toggledOne, setToggleOne] = useState(false);
  let [toggledTwo, setToggleTwo] = useState(false);
  const [colorOne, setColorOne] = useState(false);
  const [colorTwo, setColorTwo] = useState(false);
  let [lightOne, setLightOne] = useState(false);
  let [lightTwo, setLightTwo] = useState(false);
 

  const toggleOne = function () {
    if (colorOne) {
      setColorOne(false);
      setToggleOne(!toggledOne);
    } else {
      setColorOne(true);
      setLightOne(!lightOne);
      setToggleOne(!toggledOne);
    }
  };

  const toggleTwo = function () {
    if (colorTwo) {
      setColorTwo(false);
      setToggleTwo(!toggledTwo);
    } else {
      setColorTwo(true);
      setLightTwo(!lightTwo);
      setToggleTwo(!toggledTwo);
    }
  };

  return (
    <div>
      <div className="board">
        <div className="column">
          <div className="bulbOne" style={{ backgroundColor: colorOne ? "orange" : "gray" }} ></div>
          <button className="switchone" onClick={toggleOne}>{toggledOne ? "On" : "Off"}  </button>
          </div>
          <div className="column">
          <div className="bulbTwo" style={{ backgroundColor: colorTwo ? "orange" : "gray" }}></div>
          <button className="switchtwo" onClick={toggleTwo}>{toggledTwo ? "On" : "Off"}  </button>       
          </div>
      </div>
    </div>
  );
}

export default LightingBulb;
