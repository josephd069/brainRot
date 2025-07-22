import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

function Top5Chart({ memes, metric, title, lang }) {
  if (!memes.length) return null;
  const data = [...memes].sort((a, b) => b[metric] - a[metric]).slice(0, 5)
    .map(m => ({ name: m.name, value: m[metric] }));

  return (
    <div className="bg-cardBg rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-heading text-primary mb-4">Horizontal Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart layout="vertical" data={data} margin={{ left: 100 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" width={150} />
          <Tooltip formatter={val => val.toLocaleString(lang)} />
          <Bar dataKey="value" fill="#F59E0B" isAnimationActive />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Top5Chart;