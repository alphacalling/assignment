import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
import Navbar from "./Navbar";

// Register the required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Home = () => {
  const [userStats, setUserStats] = useState({
    activeUsers: 1240,
    newUsers: 60,
    tasksCompleted: 340,
    pendingTasks: 50,
    averageResponseTime: 200,
    systemUptime: "99.9%",
  });

  const [chartData, setChartData] = useState({});

  useEffect(() => {
    // Fetch or generate dynamic chart data
    const fetchChartData = () => {
      // Example data
      setChartData({
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        datasets: [
          {
            label: 'User Growth',
            data: [150, 200, 300, 400],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      });
    };

    fetchChartData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="max-w-7xl mx-auto p-6">
        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="p-4 bg-white shadow-md">
            <h3 className="text-lg font-semibold mb-4">User Statistics</h3>
            <p>Active Users: {userStats.activeUsers}</p>
            <p>New Users: {userStats.newUsers}</p>
          </div>
          <div className="p-4 bg-white shadow-md">
            <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
            <p>Tasks Completed: {userStats.tasksCompleted}</p>
            <p>Pending Tasks: {userStats.pendingTasks}</p>
          </div>
          <div className="p-4 bg-white shadow-md">
            <h3 className="text-lg font-semibold mb-4">Performance</h3>
            <p>Average Response Time: {userStats.averageResponseTime} ms</p>
            <p>System Uptime: {userStats.systemUptime}</p>
          </div>
        </div>

        {/* Graph Section */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">User Growth</h3>
          {chartData.labels && chartData.datasets ? (
            <Bar data={chartData} options={{ responsive: true }} />
          ) : (
            <p>Loading chart...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
