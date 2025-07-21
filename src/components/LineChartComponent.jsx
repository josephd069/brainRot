import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from 'recharts';

function LineChartComponent({ data, title, months }) {
  const chartData = data.map(d => ({
    name: months[d.month - 1],
    total: d.twitter + d.reddit
  }));

  return (
    <div className="w-full h-80 bg-white rounded-2xl shadow-lg p-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <ResponsiveContainer>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="total" name="Total Mentions" strokeWidth={2} dot />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChartComponent;