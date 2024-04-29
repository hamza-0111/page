// import { useEffect, useState } from "react";
// import data from '../data.json';

// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';
// import { Bar, Line } from 'react-chartjs-2';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// function Block6() {
//   const [chartData, setChartData] = useState(null);

//   useEffect(() => {
//     setChartData({
//       labels: data.map((item) => item.date),
//       datasets: [
//         {
//           label: 'Revenue',
//           data: data.map((item) => item.trigia),
//           fill: true,
//           borderColor: 'rgb(255, 99, 132)',
//           backgroundColor: 'rgba(255, 99, 132, 0.5)',
//         }
//       ]
//     });
//   }, []);

//   return (
//     <div className='chart'>
//       {chartData && chartData.datasets && (
//         <Line 
//           options={{ 
//             responsive: true,
//             plugins: {
//               legend: {
//                 position: 'top',
//               },
//               title: {
//                 display: true,
//                 text: 'Revenue',
//               },
//             },
//           }} 
//           data={chartData} 
//         />
//       )}
//     </div>
//   );
// }

// export default Block6;
import React, { useState, useEffect } from 'react';
import data from '../data.json'; // Adjust the path as necessary

import { Line } from 'react-chartjs-2';

import Chart from 'chart.js/auto';

function Block6() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    setChartData({
      labels: data.map((item) => item.date),
      datasets: [
        {
          label: 'Revenue',
          data: data.map((item) => item.trigia),
          fill: true,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
      ]
    });
  }, []);

  return (
    <div className='chart'>
      {chartData && chartData.datasets && (
        <Line 
          options={{ 
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Revenue',
              },
            },
          }} 
          data={chartData} 
        />
      )}
    </div>
  );
}

export default Block6;

// import React, { useState, useEffect } from "react";
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// function Block6() {
//   const [chartData, setChartData] = useState(null);

//   useEffect(() => {
//     // Define the JSON data directly within the component
//     const data = [
//       {
//          "trigia":"120000",
//          "ngay_mua":"09/12/2022"
//       },
//       {
//          "trigia":"270000",
//          "ngay_mua":"10/12/2022"
//       },
//       {
//          "trigia":"340000",
//          "ngay_mua":"11/12/2022"
//       },
//       {
//          "trigia":"310000",
//          "ngay_mua":"12/12/2022"
//       },
//       {
//          "trigia":"580000",
//          "ngay_mua":"13/12/2022"
//       },
//       {
//          "trigia":"350000",
//          "ngay_mua":"14/12/2022"
//       },
//       {
//          "trigia":"345000",
//          "ngay_mua":"15/12/2022"
//       },
//       {
//          "trigia":"160000",
//          "ngay_mua":"16/12/2022"
//       },
//       {
//          "trigia":"490000",
//          "ngay_mua":"21/12/2022"
//       },
//       {
//          "trigia":"210000",
//          "ngay_mua":"25/12/2022"
//       }
//     ];

//     // Process the JSON data to create chartData
//     setChartData({
//       labels: data.map((item) => item.ngay_mua),
//       datasets: [
//         {
//           label: 'Revenue',
//           data: data.map((item) => item.trigia),
//           fill: true,
//           borderColor: 'rgb(255, 99, 132)',
//           backgroundColor: 'rgba(255, 99, 132, 0.5)',
//         }
//       ]
//     });
//   }, []);

//   return (
//     <div className='chart'>
//       {chartData && chartData.datasets && (
//         <Line 
//           options={{ 
//             responsive: true,
//             plugins: {
//               legend: {
//                 position: 'top',
//               },
//               title: {
//                 display: true,
//                 text: 'Revenue',
//               },
//             },
//           }} 
//           data={chartData} 
//         />
//       )}
//     </div>
//   );
// }

// export default Block6;
