import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { Card ,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Progress } from 'antd';

import './number.css';

const Numberchat = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const myBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Mar', 'Apr', 'May','jun','jul'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [30, 20, 40,30,40],
            backgroundColor: '#0f5132',
            borderWidth: 1,
          },
          {
            label: 'Dataset 2',
            data: [40, 35, 50,20 ,50],
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
        barPercentage: 1.0, // Adjust as needed
        categoryPercentage: 0.9, // Adjust as needed
      },
    });

    return () => {
      myBarChart.destroy();
    };
  }, []);
 
  const doughnutChartRef = useRef(null);

  useEffect(() => {
    const ctx = doughnutChartRef.current.getContext('2d');

    const myDoughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Label 1', 'Label 2'],
        datasets: [{
          data: [ 20, 70],
          backgroundColor: [ 'grey', 'darkgreen'],
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
  
  
  return (
    <>
     <div className='Number-head'>
      <Card style={{ width: '260px', height: '250px'  ,padding:"5px"}}>
      <Card.Header  as="h6" className='number-text'>Number Of Employee</Card.Header>
        <div>
          <canvas ref={chartRef} width="130" height="150"></canvas>
        </div>
        <Row>
          <Col>
            <div style={{fontSize:"4px",position:"relative",top:"-10px",right:"50"}}>
                
              <canvas ref={doughnutChartRef} width="100" height="100"></canvas>
            </div>
          </Col>
          <Col >
            <span style={{fontSize:"8px", width: 'auto'}} className='text-dark'>Male</span>
            <Progress percent={60} style={{ fontSize:"8px",marginTop: '-10px',position:"relative",top:"-15px",right:"50" }} strokeColor="#0f5132" />
            <span style={{fontSize:"8px", width: 'auto',position:"relative",top:"-20px",right:"50" }} className='text-dark'>female</span>
            <Progress percent={35} style={{fontSize:"8px",position:"relative",top:"-30px",right:"50"}} strokeColor="#0f5132" />
          </Col>
        </Row>
      </Card>
    </div>
    
    </>
  );
};

export default Numberchat;