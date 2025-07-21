import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

function BarChartComponent({ data, showTwitter, showReddit, title, months }) {
  const chartData = data.map(d => ({
    name: months[d.month - 1],
    twitter: showTwitter ? d.twitter : 0,
    reddit: showReddit ? d.reddit : 0
  }));

  return (
    <div className="w-full h-80 bg-white rounded-2xl shadow-lg p-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <ResponsiveContainer>
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {showTwitter && <Bar dataKey="twitter" name="Twitter" />}
          {showReddit && <Bar dataKey="reddit" name="Reddit" />}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartComponent;
