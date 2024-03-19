import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Others = () => {
 
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    

    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, '#0f5132'); 
    gradient.addColorStop(1, '#FFFFFF');

    const myBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['','','','','','',''],
        datasets: [
          {
            label: 'Dataset 1',
            data: [5, 10,8,9.5,4.5,3,8.5],
            backgroundColor:gradient,
            borderWidth: 1,

          
          },
          
          
          // Add more datasets as needed
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            display: false,
            grid: {
              display: false,
            },
          },
        },
        indexAxis: 'x',
        plugins: {
          legend: {
            display: false,
          },
        },
        barPercentage: 0.9, // Adjust as needed
        categoryPercentage: 0.9, // Adjust as needed
      },
    });

    return () => {
      myBarChart.destroy();
    };
  }, []);

  return (


        
    
  
    <div className='mt-3'>   
      <div style={{ width: "95px", height: "25px"}} className='pr-1'>
        <div>
          <canvas ref={chartRef} width="10" height="70"></canvas>
        </div>
      </div>
      
     
    </div>
 
  );
};

export default Others;