import React, { useEffect, useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import "./Stats.css";

// Register ChartJS modules
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

interface ActivityEntry {
  range: { date: string };
  grand_total: { total_seconds: number };
}

interface LanguageEntry {
  color: string;
  name: string;
  percent: number;
}

interface OSUsageEntry {
  color: string;
  name: string;
  percent: number;
}

const Spinner = () => <div className="spinner"></div>;

const Stats = () => {
  const [activityData, setActivityData] = useState<ActivityEntry[]>([]);
  const [languageData, setLanguageData] = useState<LanguageEntry[]>([]);
  const [osUsageData, setOSUsageData] = useState<OSUsageEntry[]>([]);

  // (Coding activity)
  useEffect(() => {
    fetch("https://wakatime.com/share/@AstronautMarkus/678807b3-e69a-4a62-83d5-8abe7c01f950.json")
      .then((response) => response.json())
      .then((data) => setActivityData(data.data))
      .catch((error) => console.error("Error fetching activity data:", error));
  }, []);

  // (Most used languages)
  useEffect(() => {
    fetch("https://wakatime.com/share/@AstronautMarkus/6e3b981a-a628-4e63-82f5-050e12729732.json")
      .then((response) => response.json())
      .then((data) => setLanguageData(data.data))
      .catch((error) => console.error("Error fetching language data:", error));
  }, []);

  // (Most used operating systems)
  useEffect(() => {
    fetch("https://wakatime.com/share/@AstronautMarkus/be109b51-c692-4817-adb6-c09ca597f934.json")
      .then((response) => response.json())
      .then((data) => setOSUsageData(data.data))
      .catch((error) => console.error("Error fetching OS usage data:", error));
  }, []);

  // (Coding Activity)
  const activityLabels = activityData.map((entry) => entry.range.date);
  const codingTimes = activityData.map((entry) => entry.grand_total.total_seconds / 3600); // Convertir segundos a horas

  const activityChartData = {
    labels: activityLabels,
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

  const activityChartOptions = {
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
          },
        },
      },
    },
  };

  // (Most Used Languages)
  const languageChartData = {
    labels: languageData.map((lang) => lang.name),
    datasets: [
      {
        label: "Usage Percentage",
        data: languageData.map((lang) => lang.percent),
        backgroundColor: languageData.map((lang) => lang.color),
        borderWidth: 1,
      },
    ],
  };

  const languageChartOptions = {
    responsive: true,
    indexAxis: "y" as const,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "Most Used Programming Languages" },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          callback: function (tickValue: string | number) {
            return `${tickValue}%`;
          },
        },
      },
    },
  };

  // (Most Used Operating Systems)
  const osUsageChartData = {
    labels: osUsageData.map((os) => os.name),
    datasets: [
      {
        data: osUsageData.map((os) => os.percent),
        backgroundColor: osUsageData.map((os) => os.color),
        borderWidth: 1,
      },
    ],
  };

  const osUsageChartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "Most Used Operating Systems" },
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
              {/* Coding Activity Chart */}
              <li className="project-item">
                <div className="project-details">
                  <h2 className="project-title">⏳ Coding Activity</h2>
                  <div className="project-text mb-4 mt-4">
                    <p>Amount of time spent coding in the last days, according to Wakatime.</p>
                  </div>
                  <div className="project-image text-center justify-content-center">
                    {activityData.length > 0 ? (
                      <Bar data={activityChartData} options={activityChartOptions} />
                    ) : (
                      <Spinner />
                    )}
                  </div>
                </div>
              </li>

              {/* Most Used Languages Chart */}
              <li className="project-item">
                <div className="project-details">
                  <h2 className="project-title">💻 Most Used Programming Languages</h2>
                  <div className="project-text mb-4 mt-4">
                    <p>These are the programming languages I use the most, according to Wakatime.</p>
                  </div>
                  <div className="project-image text-center justify-content-center">
                    {languageData.length > 0 ? (
                      <Bar data={languageChartData} options={languageChartOptions} height={400} />
                    ) : (
                      <Spinner />
                    )}
                  </div>
                </div>
              </li>

              {/* Most Used Operating Systems Chart */}
              <li className="project-item">
                <div className="project-details">
                  <h2 className="project-title">🖥️ Most Used Operating Systems</h2>
                  <div className="project-text mb-4 mt-4">
                    <p>These are the operating systems I use the most, according to Wakatime.</p>
                  </div>
                  <div className="project-image text-center justify-content-center">
                    {osUsageData.length > 0 ? (
                      <Doughnut data={osUsageChartData} options={osUsageChartOptions} />
                    ) : (
                      <Spinner />
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
