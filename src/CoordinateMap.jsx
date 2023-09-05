import React, { useEffect, useRef, useState } from "react";
import "./App.css"
import Score from "./components/Score";
import SoilHealth from "./components/SoilHealth";
import Weather from "./components/Weather";
import DoughnutChart from "./components/DoughnutChart";
import LineChartComponent from "./components/LineChart";
 

const CoordinateMap = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [selectedCoordinate, setSelectedCoordinate] = useState(null);
  // const [list,setList] = useState([])

  useEffect(() => {
    if (!map) {
      // Initialize the map only once when it's null
      const mapInstance = new window.google.maps.Map(mapRef.current, {
        center: { lat: 0, lng: 0 },
        zoom: 3,
        mapTypeId: window.google.maps.MapTypeId.SATELLITE,
      });
      setMap(mapInstance);

      // Add a click event listener to the map
      mapInstance.addListener("click", (event) => {
        const clickedLatLng = {
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
        };

        setSelectedCoordinate(clickedLatLng);
       
      });
    }
  }, [map]);

  useEffect(() => {
    // Automatically add a new marker when selectedCoordinate changes
    if (selectedCoordinate) {
      const newMarker = new window.google.maps.Marker({
        position: selectedCoordinate,
        map: map,
      });

      setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
      
      
    }
  }, [selectedCoordinate, map]);

  // Remove all markers from the map
  const deleteMarkers = () => {
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    setMarkers([]);
  };

  // Hide all markers from the map
  const hideMarkers = () => {
    markers.forEach((marker) => {
      marker.setMap(null);
    });
  };

  // Show all hidden markers on the map
  const showMarkers = () => {
    markers.forEach((marker) => {
      marker.setMap(map);
    });
  };

  // console.log(markers)
  const coord = markers.map((x)=>x.position)
  

  const bermudaTriangle = new window.google.maps.Polygon({
    paths: coord,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  bermudaTriangle.setMap(map);


  

  return (
    <>
    <div className="home-container">  
      <div ref={mapRef} style={{ width: "100%", height: "calc(100vh - 100px)" }} className={
            (markers.length>2) ? "home-left" : "home-left home-left-only"
          }></div>
      {selectedCoordinate && (
        <div
          style={{
            position: "fixed",
            bottom: 50,
            left: 0,
            right: 0,
            height: "50px",
            background: "#f0f0f0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button onClick={deleteMarkers}>Delete Markers</button>
          <button onClick={hideMarkers}>Hide Markers</button>
          <button onClick={showMarkers}>Show Markers</button>
        </div>
      )}
      {selectedCoordinate && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            height: "50px",
            background: "#f0f0f0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span>
            Selected Coordinate: {selectedCoordinate.lat}, {selectedCoordinate.lng}
          </span>
        </div>
      )}

      <div
          className={`animated-component ${
            (markers.length>3) ? "home-right" : ""
          }`}
        >
          {(markers.length>3) ? (
            <>
              <div className="top_right_container">
                <Score />
                <SoilHealth/>
              </div>
              <div className="chart-weather">
                <div className="weather-comp">
                  <Weather />{" "}
                </div>
                <div className="chart-comp">
                  <DoughnutChart />
                </div>
              </div>
              <LineChartComponent/>
            </>
          ):<></>}
        </div> 

      
    </div>  
    </>
  );
};

export default CoordinateMap;
