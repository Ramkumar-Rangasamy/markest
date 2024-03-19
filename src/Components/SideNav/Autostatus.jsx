import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './autostatus.css';

import { Card, Form, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Autostatus = () => {
  const doughnutChartRef = useRef(null);

  useEffect(() => {
    const ctx = doughnutChartRef.current.getContext('2d');

    const myDoughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [{
          data: [10, 20, 70],
          backgroundColor: ['lightgreen', 'grey', 'darkgreen'],
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "right",
            labels: {
              boxWidth: 12, // Adjust legend box width
              usePointStyle: true, // Use circular point style for legend items
            },
          },
        },
      }
    });

    return () => {
      myDoughnutChart.destroy();
    };
  }, []);

  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const myBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Mar', 'Apr', 'May'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [30, 20, 10,],
            backgroundColor: '#0f5132',
            borderWidth: 1,
          },
          {
            label: 'Dataset 2',
            data: [15, 15, 15],
            backgroundColor: '#0f5132', // Change color as needed
            borderWidth: 1,
          },
          {
            label: 'Dataset 2',
            data: [20, 35, 37],
            backgroundColor: '#0f5132', // Change color as needed
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


        
    <Card  className='status_head'>
  
        <Row >
            <Col>
      <Card style={{ width: "120px", height: "140px" ,marginTop:"5px",borderRadius:"15px",marginLeft:"5px",backgroundColor:"white"}}>
        <Card.Header className='text-dark cardheader'>Active Task Status</Card.Header>
        <div>
          <canvas ref={doughnutChartRef} width="60" height="80"></canvas>
        </div>
      </Card>
      </Col>
      <Col>
      <Card style={{ width: "120px", height: "140px",marginLeft:"-20px",borderRadius:"15px",marginTop:"5px",backgroundColor:"white" }}>
        <div>
          <canvas ref={chartRef} width="150" height="130"></canvas>
        </div>
      </Card>
      </Col>
      </Row>
      </Card>
 
  );
};

export default Autostatus;