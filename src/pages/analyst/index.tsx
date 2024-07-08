// components/ChartComponent.js
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const ChartComponent = () => {
  const chartData = [
    { day: "15/06/2024", data: 2500000 },
    { day: "16/06/2024", data: 4500000 },
    { day: "17/06/2024", data: 3700000 },
    { day: "18/06/2024", data: 3700000 },
    { day: "19/06/2024", data: 3700000 },
  ];

  const data = {
    labels: chartData.map(item => item.day),
    datasets: [
      {
        label: 'Payout (USD)',
        data: chartData.map(item => item.data),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        barThickness: 30,  // Set bar width to 30px
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Released Payouts',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 5000000,  // Set y-axis maximum value to 5000000
        title: {
          display: true,
          text: 'Payout (USD)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default ChartComponent;
