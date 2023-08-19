/* eslint-disable no-unused-vars */
import React from "react";
import "./help.css"

const Score = () => {
//   const { selectedFarm, setSelectedFarm,season,setSeason } = useContext(dataContext);
//   const kharifproperty = '2023_Kharib';
//   const rabiproperty = '2023_Rabi';

  // Access and console log the value of the dynamic property
  // console.log(selectedFarm[dynamicPropertyName]);
  return (
    <div className="bhoomiscore-wrapper">
      <div className="bhoomi-header">
        <div
          style={{ display: "flex", flexDirection: "row", marginLeft: ".5vw" }}
        >
          <div className="img-containerwheat">
        
          </div>
          <h1>Bhoomiscore</h1>
        </div>
        <div className="header-right">
          <h2>Know More</h2>{" "}
        </div>
      </div>

      <div className="score">
         9/10
      </div>
    </div>
  );
};

export default Score;