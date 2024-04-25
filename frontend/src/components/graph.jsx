import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

const Graph = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Dummy Data',
        data: [65, 59, 80, 81, 56, 55, 40, 65, 71, 64, 78, 70],
        fill: false,
        borderColor: '#3b82f6',
        tension: 0.1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Line Chart',
        font: {
          size: 20,
        },
      },
    },
  };

  return (
    <div className="w-full h-96 p-6 bg-gray-100 rounded-lg shadow-md">
      <Line data={data} options={options} className="max-w-full" /> 
    </div>
  );
};

export default Graph;