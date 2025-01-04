import React from 'react';
import { stats } from '../../config/stats';

export default function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <stat.icon className="h-8 w-8 mx-auto mb-2 text-[#39FF14]" />
          <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
          <div className="text-gray-300">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}