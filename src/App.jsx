import React, { useState } from 'react';
import './index.css';
import { brainrotMemeData } from './data';
import { translations } from './translations';
import Toolbar from './components/Toolbar';
import MemeRankingComponent from './components/MemeRankingComponent';
import Top5Chart from './components/Top5Chart';

function App() {
  const [lang, setLang] = useState('en');
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [metric, setMetric] = useState('views');
  const t = translations[lang];

  // list of months for dropdown
  const monthsList = brainrotMemeData.map(d => ({
    value: d.month,
    label: new Date(2025, d.month - 1).toLocaleString(lang, { month: 'long' })
  }));

  // find data for selected month
  const memes = brainrotMemeData.find(d => d.month === month)?.memes || [];

  return (
    <div className="bg-bg min-h-screen py-8 px-4 font-body">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Page title */}
        <header className="text-center">
  <h1 className="text-4xl font-heading text-primary">
    {lang === 'en'
      ? 'Top Brainrot Every Month of 2025'
      : 'Meilleurs Brainrot chaque mois de 2025'}
  </h1>
  <p className="mt-2 text-lg text-gray-600">
    {lang === 'en'
      ? 'Explore top trending brainrot memes each month'
      : 'Découvrez les memes brainrot les plus tendance chaque mois'}
  </p>
</header>

        {/* Unified Toolbar */}
        <Toolbar
          lang={lang}
          onLangChange={setLang}
          month={month}
          onMonthChange={setMonth}
          metric={metric}
          onMetricChange={setMetric}
          labels={t}
          monthsList={monthsList}
        />

        {/* Meme ranking grid */}
        <MemeRankingComponent
          memes={memes}
          metric={metric}
          labels={t}
          lang={lang}
        />

        {/* Top‑5 horizontal bar chart */}
        <Top5Chart
          memes={memes}
          metric={metric}
          title={`${t[metric]} by Meme`}
          lang={lang}
        />
      </div>
    </div>
  );
}

export default App;
