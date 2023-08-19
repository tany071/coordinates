/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
// import { Doughnut } from 'react-chartjs-2';
import "./help.css"
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
 

  const DoughnutChart = () => {
   // Sample data
  
  const CustomLegend = ({ payload }) => (
    <div style={{marginTop:0,paddingLeft:0}}>
      {payload.map((entry, index) => (
        <div key={`item-${index}`} style={{ display: 'flex', alignItems: 'center', marginBottom: 15,marginLeft:20 }}>
          <div style={{ backgroundColor: entry.color, width: 20, height: 20, marginRight: 10 }} />
          <span>{entry.payload.name}</span>
          <span style={{ marginLeft: 10 }}>{entry.payload.value}%</span>
        </div>
      ))}
    </div>
  );

//   const data = [40,25,35]
const data = [
    { name: '', value: 400 },
    { name: '', value: 300 },
    { name: '', value: 300 },
    { name: '', value: 200 },
  ];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
return (
  <>
  {
    (true) ?
     <><div className="chart-wrapper">
     <h3>Crop Monitoring </h3>
     {
      
     <>
       <PieChart width={400} height={200} style={{display: 'flex',flexDirection: 'row',fontSize:'22px',justifyContent: 'centre',}}>
         <Pie
           data={data}
           cx={140}
           cy={60}
           innerRadius={40}
           outerRadius={60}
           fill="#8884d8"
           dataKey="value"
         >
           {data.map((entry, index) => (
             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
           ))}
         </Pie>
         <Tooltip />
         <Legend layout="vertical" align="right" verticalAlign="top" style={{fontSize:'10px'}} content={<CustomLegend/>}/>
       </PieChart>
     </>
    }
     
     </div></>
     :
     <><div>Choose a farm </div></>
  }
  
  </>
);
  };
  
export default DoughnutChart;
    