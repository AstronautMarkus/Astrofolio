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
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register ChartJS modules
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, ChartDataLabels);

export const getActivityChartOptions = (locale: any) => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: "top" as const },
    title: { display: true, text: locale.codingActivityTitle },
    datalabels: {
      color: '#fff',
      formatter: (value: number) => `${value.toFixed(2)}h`,
      font: {
        weight: 'bold' as const,
      },
    },
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
  height: 400,
  width: 1200,
});

export const getLanguageChartOptions = (locale: any) => ({
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: "y" as const,
  plugins: {
    legend: { position: "top" as const },
    title: { display: true, text: locale.mostUsedLanguagesTitle },
    datalabels: {
      color: '#fff',
      formatter: (value: number) => `${value.toFixed(2)}%`,
      font: {
        weight: 'bold' as const,
      },
    },
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
  height: 400,
  width: 1200,
});

export const getOSUsageChartOptions = (locale: any) => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: "top" as const },
    title: { display: true, text: locale.mostUsedOSTitle },
    tooltip: {
      callbacks: {
        label: function (tooltipItem: any) {
          const data = tooltipItem.dataset.data[tooltipItem.dataIndex];
          const label = tooltipItem.label || '';
          return `${label}: ${data}%`;
        },
      },
    },
    datalabels: {
      formatter: (value: number) => `${value.toFixed(2)}%`,
      color: '#fff',
      font: {
        weight: 'bold' as const,
      },
    },
  },
  height: 400,
  width: 1200,
});
