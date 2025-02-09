import { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import "./Stats.css";
import { fetchActivityData, fetchLanguageData, fetchOSUsageData, ActivityEntry, LanguageEntry, OSUsageEntry } from "../../../helpers/wakatimeDataHelper";
import { getActivityChartOptions, getLanguageChartOptions, getOSUsageChartOptions } from "../../../helpers/chartConfigHelper";

const Spinner = () => <div className="spinner"></div>;

interface StatsProps {
  locale: any;
}

const Stats = ({ locale }: StatsProps) => {
  const [activityData, setActivityData] = useState<ActivityEntry[]>([]);
  const [languageData, setLanguageData] = useState<LanguageEntry[]>([]);
  const [osUsageData, setOSUsageData] = useState<OSUsageEntry[]>([]);

  useEffect(() => {
    fetchActivityData()
      .then(setActivityData)
      .catch((error) => console.error("Error fetching activity data:", error));
  }, []);

  useEffect(() => {
    fetchLanguageData()
      .then(setLanguageData)
      .catch((error) => console.error("Error fetching language data:", error));
  }, []);

  useEffect(() => {
    fetchOSUsageData()
      .then(setOSUsageData)
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

  const activityChartOptions = getActivityChartOptions();

  // (Most Used Languages)
  const languageChartData = {
    labels: languageData.map((lang) => lang.name),
    datasets: [
      {
        label: "Usage Percentage",
        data: languageData.map((lang) => lang.percent),
        backgroundColor: languageData.map((lang) => lang.color),
        borderColor: languageData.map(() => 'rgba(128, 128, 128, 0.5)'), 
        borderWidth: 1,
      },
    ],
  };

  const languageChartOptions = getLanguageChartOptions();

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

  const osUsageChartOptions = getOSUsageChartOptions();

  return (
    <div className="home-container d-flex justify-content-center align-items-center">
      <div className="square-container">
        <div className="content-box">
          <h1 className="title text-center">{locale.codingStatsTitle}</h1>
          <p className="text-center">{locale.insightsFromWakatime}</p>
          <div className="content">
            <ul className="project-list">
              {/* Coding Activity Chart */}
              <li className="project-item">
                <div className="project-details">
                  <h2 className="project-title">{locale.codingActivityTitle}</h2>
                  <div className="project-text mb-4 mt-4">
                    <p>{locale.codingActivityDescription}</p>
                  </div>
                  <div className="project-image text-center justify-content-center">
                    <div className="chart-wrapper">
                      {activityData.length > 0 ? (
                        <Bar data={activityChartData} options={activityChartOptions} />
                      ) : (
                        <Spinner />
                      )}
                    </div>
                  </div>
                </div>
              </li>
              {/* Most Used Languages Chart */}
              <li className="project-item">
                <div className="project-details">
                  <h2 className="project-title">{locale.mostUsedLanguagesTitle}</h2>
                  <div className="project-text mb-4 mt-4">
                    <p>{locale.mostUsedLanguagesDescription}</p>
                  </div>
                  <div className="project-image text-center justify-content-center">
                    <div className="chart-wrapper">
                      {languageData.length > 0 ? (
                        <Pie data={languageChartData} options={languageChartOptions} />
                      ) : (
                        <Spinner />
                      )}
                    </div>
                  </div>
                </div>
              </li>
              {/* Most Used Operating Systems Chart */}
              <li className="project-item">
                <div className="project-details">
                  <h2 className="project-title">{locale.mostUsedOSTitle}</h2>
                  <div className="project-text mb-4 mt-4">
                    <p>{locale.mostUsedOSDescription}</p>
                  </div>
                  <div className="project-image text-center justify-content-center">
                    <div className="chart-wrapper">
                      {osUsageData.length > 0 ? (
                        <Bar data={osUsageChartData} options={osUsageChartOptions} />
                      ) : (
                        <Spinner />
                      )}
                    </div>
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
