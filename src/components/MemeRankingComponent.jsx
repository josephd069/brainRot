import React from 'react';

function MemeRankingComponent({ memes, metric, month, labels, lang }) {
  if (!memes.length) return <p className="text-center text-gray-500">{labels.noData}</p>;

  const sorted = [...memes].sort((a, b) => b[metric] - a[metric]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {sorted.slice(0, 5).map((m, i) => (
        <div
          key={m.name}
          className="group bg-cardBg rounded-2xl shadow-md overflow-hidden transform transition hover:shadow-xl hover:-translate-y-1"
        >
          <img
            src={m.imageUrl}
            alt={m.name}
            className="w-full h-48 object-fit"
          />
          <div className="p-4 space-y-1">
            <h3 className="text-lg font-heading text-gray-800">
              {i + 1}. {m.name}
            </h3>
            <p className="text-sm text-gray-600">
              {labels[metric]}: {m[metric].toLocaleString(lang)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MemeRankingComponent;