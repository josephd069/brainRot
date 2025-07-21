import React from 'react';

function LanguageSelector({ lang, onChange, label }) {
  return (
    <div className="flex items-center space-x-2">
      <label className="text-sm font-medium" htmlFor="language-select">{label}</label>
      <select
        id="language-select"
        value={lang}
        onChange={e => onChange(e.target.value)}
        className="px-2 py-1 border rounded"
      >
        <option value="en">EN</option>
        <option value="fr">FR</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
