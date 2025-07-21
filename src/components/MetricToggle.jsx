import React from 'react';

function MetricToggle({ metric, onChange, labels }) {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium">{labels.metric}:</span>
      <label className="flex items-center space-x-1">
        <input
          type="radio"
          name="metric"
          value="views"
          checked={metric === 'views'}
          onChange={() => onChange('views')}
        />
        <span className="text-sm">{labels.views}</span>
      </label>
      <label className="flex items-center space-x-1">
        <input
          type="radio"
          name="metric"
          value="likes"
          checked={metric === 'likes'}
          onChange={() => onChange('likes')}
        />
        <span className="text-sm">{labels.likes}</span>
      </label>
    </div>
  );
}

export default MetricToggle;