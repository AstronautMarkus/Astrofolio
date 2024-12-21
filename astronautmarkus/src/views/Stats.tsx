import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./Stats.css";

// Register chart.js modules
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ActivityEntry {
  range: { date: string };
  grand_total: { total_seconds: number };
}

const Stats = () => {
  const [activityData, setActivityData] = useState<ActivityEntry[]>([]);

  // Get wakatime ststs
  useEffect(() => {
    fetch("https://wakatime.com/share/@AstronautMarkus/678807b3-e69a-4a62-83d5-8abe7c01f950.json")
      .then((response) => response.json())
      .then((data) => setActivityData(data.data)) // `data.data` 
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Prepare data
  const labels = activityData.map((entry) => entry.range.date); // Dates
  const codingTimes = activityData.map((entry) => entry.grand_total.total_seconds / 3600); // Seconds to hours

  const chartData = {
    labels,
    datasets: [
      {
        label: "Hours Spent Coding",
        data: codingTimes,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "Coding Activity (Hours per Day)" },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (tickValue: string | number) {
            return `${tickValue}h`;
          }, // Mostrar valores en horas
        },
      },
    },
  };

  return (
    <div className="home-container d-flex justify-content-center align-items-center vh-100">
      <div className="square-container">
        <div className="content-box shadow">
          <h1 className="title">📊 My Coding Stats</h1>
          <p>📈 Insights from Wakatime</p>
          <div className="content">
            <ul className="project-list">
              <li className="project-item">
                <div className="project-details">
                  <h2 className="project-title">⏳ Coding Activity</h2>
                  <div className="project-text mb-4 mt-4">
                    <p>Amount of time spent coding in the last days, according to Wakatime.</p>
                  </div>
                  <div className="project-image text-center justify-content-center">
                    {activityData.length > 0 ? (
                      <Bar data={chartData} options={options} />
                    ) : (
                      <p>Loading data...</p>
                    )}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
