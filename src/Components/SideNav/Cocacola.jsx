// Cocacola.js

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './cocacola.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cocacola = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const myBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['sun', 'mon', 'thu', 'wed', 'thus', 'fir', 'sat'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [20],
            backgroundColor: '#0f5132',
            borderWidth: 1,
          },
          {
            label: 'Dataset 2',
            data: [30],
            backgroundColor: '#0f5132',
            borderWidth: 1,
          },
          {
            label: 'Dataset 3',
            data: [50],
            backgroundColor: '#0f5132',
            borderWidth: 1,
          },
          {
            label: 'Dataset 4',
            data: [30],
            backgroundColor: '#0f5132',
            borderWidth: 1,
          },
          {
            label: 'Dataset 4',
            data: [60],
            backgroundColor: '#0f5132',
            borderWidth: 1,
          },
          {
            label: 'Dataset 5',
            data: [30],
            backgroundColor: '#0f5132',
            borderWidth: 1,
          },
          {
            label: 'Dataset 6',
            data: [40],
            backgroundColor: '#0f5132',
            borderWidth: 1,
          },
          {
            label: 'Dataset 7',
            data: [30],
            backgroundColor: '#0f5132',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            display: true,
            grid: { display: false },
            ticks: {
              callback: function (value, index, values) {
                if (value === 0) {
                  return '$' + value;
                } else if (value === 5000) {
                  return '$5k';
                } else if (value === 10000) {
                  return '$10k';
                } else {
                  return '';
                }
              },
            },
          },
          x: { grid: { display: false } },
        },
        indexAxis: 'x',
        plugins: { legend: { display: false } },
        barPercentage: 0.5,
        categoryPercentage: 0.5,
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
          <canvas ref={chartRef} width="70" height="70"></canvas>
        </div>
      </div>
      
     
    </div>
  );
};

export default Cocacola;
