/* eslint-disable no-unused-vars */
import React from "react";
import "./help.css"
const SoilHealth = () => {
  
    // console.log(first)
  return (
    <div className="soil-wrapper">
      <div className="soil-header">
        <div
          style={{ display: "flex", flexDirection: "row", margin: "0 15px" }}
        >
          <div className="img-containersoil">
            {/* <img src={spil} alt="" /> */}
          </div>
          <h1>Soil Health</h1>
        </div>
      </div>
      {(true) ? (
        <div className="soil-score">9/10</div>
      ) :  console.log("else")
      ?
      <><div className="soil-score">8/10</div></>
      :
      (
        <div className="soil-score">Select a farm</div>
      )}
      <div className="soil-line"></div>
    </div>
  );
};

export default SoilHealth;
