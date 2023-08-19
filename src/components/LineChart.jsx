/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./help.css";
 

const LineChartComponent = () => {
  
  const CustomXAxisTick = (props) => {
    const { x, y, payload } = props;
    return (
      <g
        transform={`translate(${x},${y})`}
        style={{ fontSize: "10px", textAnchor: "end" }}
      >
        {/* {payload.value} */}
        <text x={0} y={0} dy={16} fill="#666" transform="rotate(-40)">
          {payload.value}
        </text>
      </g>
    );
  };
//   const data = [40,25,35]
const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

//   console.log(option);
  return (
    <div className="Line-Wrapper">
      {(true) ? (
        <>
          <div className="chart_header">
            <p>Score Analysis </p>
            <div className="id_select">
           
            </div>
          </div>

          { true ? (
            <LineChart width={600} height={200} data={data}>
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              {/* <XAxis dataKey="name" tick={<CustomXAxisTick />} /> */}
              <XAxis
                dataKey="name"
                label={{
                  value: "",
                  angle: 0,
                  position: "insidemiddle",
                }}
                domain={[0, 10]}
              />
              <YAxis
                dataKey="amt"
                label={{
                  value: "",
                  angle: -90,
                  position: "insidemiddle",
                }}
                domain={[0, 10]}
              />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="amt" stroke="#8884d8" />
            </LineChart>
          ) : (
            <LineChart width={600} height={250} data={data}>
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis dataKey="name" tick={<CustomXAxisTick />} />
              <YAxis
                dataKey="value"
                label={{
                  value: "Bhoomiscore",
                  angle: -90,
                  position: "insidemiddle",
                }}
                domain={[0, 10]}
              />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          )}
        </>
      ) : (
        <p>Select Farm to proceed</p>
      )}
    </div>
  );
};

export default LineChartComponent;