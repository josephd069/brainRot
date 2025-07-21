import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function Controls({ showTwitter, showReddit, onToggleTwitter, onToggleReddit, labels }) {
  const [range, setRange] = useState([1, 12]);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col space-y-4">
      <div className="flex space-x-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={showTwitter}
            onChange={onToggleTwitter}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="text-sm">{labels.twitter}</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={showReddit}
            onChange={onToggleReddit}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="text-sm">{labels.reddit}</span>
        </label>
      </div>
      <div>
        <span className="block mb-2 font-medium">
          Month Range: {range[0]} – {range[1]}
        </span>
        <Slider
          range
          min={1}
          max={12}
          defaultValue={[1, 12]}
          onAfterChange={val => setRange(val)}
        />
      </div>
    </div>
  );
}

export default Controls;
