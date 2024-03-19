import React, { useEffect, useRef }  from "react";
import { FaArrowUp } from "react-icons/fa";
import Chart from "chart.js/auto"; // Use "auto" to include all Chart.js components
import "./leads.css"

const Card3 = () => {
  
        const chartRef = useRef(null);
        let myChart = null;
      
        useEffect(() => {
          const chartConfig = {
            type: "doughnut",
            data: {
              labels: ["Facebook", "Twitter", "Instagram"],
              datasets: [
                {
                  data: [32, 34, 34],
                  backgroundColor: ["#D3D3D3", "#90EE90", "#006400"],
                },
              ],
            },
            options: {
              plugins: {
                legend: {
                  display: true,
                  position: "right", // Adjust legend position as needed ('top', 'right', 'bottom', 'left')
                  labels: {
                    boxWidth: 12, // Adjust legend box width
                    usePointStyle: true, // Use circular point style for legend items
                  },
                  padding: {
                    left: 40,
                  },
                },
              },
            },
          };
      
          if (chartRef && chartRef.current) {
            // Destroy existing chart instance if it exists
            if (myChart) {
              myChart.destroy();
            }
      
            // Create new chart instance
            myChart = new Chart(chartRef.current, chartConfig);
          }
      
          // Cleanup function
          return () => {
            if (myChart) {
              myChart.destroy();
            }
          };
        }, []);
  const data = [
    {
      title: "Leads",
      count: "457",
      percentage: "5%",
    },
    {
      title: "Users",
      count: "2,215",
      percentage: "9.2%",
    },
  ];

  const data1 = [
    {
      title: "User to Leads",
      percentage: "1.47",
    },
    {
      title: "Leads to MQLs",
      percentage: "49.45",
    },
  ];

  return (
    <div
      id="cardContainer"
      
    >
      <div className="lead_name">Leads</div>
      <div id="line"></div>
      <div id="scoreContainer">
        {data?.map((item) => {
          return (
            <div className="score" key={item?.id}>
              <div className="text-dark">{item?.title}</div>
              <div className="individualScore text-dark ">
                <div className="countScore pb-4">{item?.count}</div>
                <div className="scoreData">
                  <FaArrowUp />
                  <div>{item?.percentage}</div>
                </div>
                <div className="description"> vs previous 30 days </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="percentageContainer">
        {data1?.map((items) => {
          return (
            <div className="percentageWrapper" key={items?.id}>
              <div className="text-dark">{items?.title}</div>
              <div className="percentageScore">
                <div>{items?.percentage}</div>
                <div className="perecentageIcon">%</div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <div id="chartContainer12" className="text-dark">Socials Events</div>
        <div id="chartContainer">
        <canvas ref={chartRef} width={60} height={20} />
        </div>
      </div>
    </div>
  );
};

export default Card3;