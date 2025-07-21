// src/components/Toolbar.jsx
import React from 'react';
import { EyeIcon, HeartIcon } from 'lucide-react';

export default function Toolbar({
  lang, onLangChange,
  month, onMonthChange,
  metric, onMetricChange,
  labels, monthsList
}) {
  return (
    <div className="bg-cardBg rounded-2xl shadow-lg p-4 flex flex-wrap items-center justify-center gap-4">
      
      {/* Language pills */}
      <div className="inline-flex text-left bg-gray-200 rounded-full p-1">
        {['en','fr'].map(l => {
          const active = lang === l;
          return (
            <button
              key={l}
              onClick={() => onLangChange(l)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition ${
                active
                  ? 'bg-accent text-white shadow-inner'
                  : 'text-gray-700 hover:bg-white hover:shadow-md'
              }`}
            >
              {l.toUpperCase()}
            </button>
          );
        })}
      </div>
      
      {/* Month pills (using a styled <select>) */}
      <div className="inline-flex bg-gray-200 rounded-full p-1">
        <select
          value={month}
          onChange={e => onMonthChange(+e.target.value)}
          className="px-4 py-2 text-sm font-medium focus:outline-none cursor-pointer"
        >
          {monthsList.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      
      {/* Metric pills */}
      <div className="inline-flex bg-gray-200 rounded-full p-1">
        {['views','likes'].map(m => {
          const Icon = m === 'views' ? EyeIcon : HeartIcon;
          const active = metric === m;
          return (
            <button
              key={m}
              onClick={() => onMetricChange(m)}
              className={`px-4 py-2 flex items-center space-x-1 text-sm font-medium rounded-full transition ${
                active
                  ? 'bg-accent text-white shadow-inner'
                  : 'text-gray-700 hover:bg-white hover:shadow-md'
              }`}
              aria-pressed={active}
            >
              <Icon className={`w-4 h-4 ${active ? 'text-white' : 'text-primary'}`} />
              <span>{labels[m]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
