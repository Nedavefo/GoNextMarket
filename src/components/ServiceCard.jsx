import React from 'react';

export default function ServiceCard({ title, description, icon, bgColor }) {
  return (
    <div className={`rounded-xl p-6 shadow hover:shadow-lg transition ${bgColor}`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
