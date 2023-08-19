/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./help.css"
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

const Weather = () => {
  const [openDate, setOpenDate] = useState(false);
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const [date, setDate] = useState(today);
 

//   useEffect(() => {
//     console.log(lat, long, "kya pata from weather");
//   }, [lat, long]);
//   const formatDate = (date) => {
//     // Format the date to "YYYY-MM-DD" format
//     if (!date) return "";
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, "0");
//     const day = String(date.getDate()).padStart(2, "0");
//     return `${year}-${month}-${day}`;
//   };
//   const formattedDate = formatDate(today);
//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//     setDate(formatDate(new Date(selectedDate)));
//   };
//   console.log(date);
//   const { finalcoordinates, setFinalCoordinates } = useContext(dataContext);

//   const fetchDataWeather = async () => {
//     try {
//       const response = await fetch(
//         `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,rain,soil_moisture_0_1cm&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,precipitation_probability_max&current_weather=true&timezone=Asia%2FBangkok&forecast_days=1&start_date=${
//           selectedDate ? formatDate(new Date(selectedDate)) : formattedDate
//         }&end_date=${
//           selectedDate ? formatDate(new Date(selectedDate)) : formattedDate
//         }`
//       );
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       throw new Error("Error fetching data");
//     }
//   };

//   // useEffect(()=>[
//   // ], [finalcoordinates,setFinalCoordinates])
//   // useEffect(()=>{

//   const { data, isLoading, error, refetch } = useQuery(
//     "myData",
//     fetchDataWeather
//   );
//   useEffect(() => {
//     refetch();
//   }, [date, lat]);
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }
//   const calculateAverageSoilMoisture = () => {
//     if (data?.hourly?.soil_moisture_0_1cm.length === 0) {
//       return 0; // Handle the case when the array is empty to avoid division by zero
//     }

//     // Calculate the sum of all elements in the array using reduce
//     const sum = data?.hourly?.soil_moisture_0_1cm.reduce(
//       (acc, value) => acc + value,
//       0
//     );

//     // Calculate the average
//     const average = sum / data?.hourly?.soil_moisture_0_1cm.length;
//     const averageWithTwoDecimals = (average * 100).toFixed(2);

//     return averageWithTwoDecimals;
//   };

//   const calculateAverage = () => {
//     if (data?.hourly?.relativehumidity_2m.length === 0) {
//       return 0; // Handle the case when the array is empty to avoid division by zero
//     }

//     // Calculate the sum of all elements in the array using reduce
//     const sum = data?.hourly?.relativehumidity_2m.reduce(
//       (acc, value) => acc + value,
//       0
//     );

//     // Calculate the average
//     const average = sum / data?.hourly?.relativehumidity_2m.length;

//     const averageWithTwoDecimals = average.toFixed(2);

//     return averageWithTwoDecimals;
//   };

  return (
    <>
      <div className="Weather-container">
        <div className="weather-header">
          <h1>Weather Forecast</h1>
          <p>7 days accurate weather forecast</p>
        </div>
        <div className="weatherdata">
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "45%",
            }}
          >
            {/* <img src={humidity} alt="" /> */}
            <p style={{ fontSize: 16, fontWeight: 500 }}> Temperature</p>
          </div>
          <div className="dataa">
            {/* {data?.current_weather?.temperature} */}
            32
            </div>
        </div>
        <div className="weatherdata">
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "45%",
            }}
          >
            {/* <img src={humidity} alt="" /> */}
            <p style={{ fontSize: 16, fontWeight: 500 }}> Humidity</p>
          </div>
          <div className="dataa">92 %</div>
        </div>
        <div className="weatherdata">
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "30%",
            }}
          >
            {/* <img src={rain} alt="" /> */}
            <p style={{ fontSize: 16, fontWeight: 500 }}> Rain</p>
          </div>
          <div className="dataa">
            {/* {data?.daily?.precipitation_probability_max[0]}% */}
            19%
          </div>
        </div>
        <div className="hori-line"></div>
        <div className="weatherdata" style={{ marginTop: -4 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "60%",
            }}
          >
            {/* <img src={calendar} alt="" /> */}
            {/* {selectedDate && <p>{formatDate(new Date(selectedDate))}</p>} */}
          </div>
          <div
            className="dataa"
            style={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={() => {
              setOpenDate(!openDate);
            }}
          >
            change
          </div>
        </div>
        {openDate ? (
          <div
            style={{
              width: "10vw",
              height: "30px",
              /* Add any additional styles you want here */
            }}
          >
            {" "}
            <label htmlFor="dateInput">Select a date:</label>
            
          </div>
        ) : (
          ""
        )}
        <div
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            marginTop: -10,
          }}
        >
          {/* <img src={location} alt="" /> */}
          <p
            style={{
              fontSize: 13,
              fontFamily: "Lato",
              marginLeft: 5,
              fontWeight: 600,
            }}
          >
            Roorkee, Uttarakhand, India
          </p>
        </div>
      </div>
      {/* <div
        className="weatherdata"
        style={{ marginTop: 14, background: "#FFF" }}
      >
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <img src={soilmoisture} alt="" />
          <p style={{ fontSize: 16, fontWeight: 500 }}> Soil Moisture</p>
        </div>
        <div className="dataa">{calculateAverageSoilMoisture()}%</div>
      </div> */}
    </>
  );
};

export default Weather;