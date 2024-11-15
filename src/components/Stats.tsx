import React from 'react';

const stats = [
  { number: "150+", label: "Partner Universities" },
  { number: "45", label: "Countries" },
  { number: "2000+", label: "Exchange Students" },
  { number: "500+", label: "Research Projects" }
];

export default function Stats() {
  return (
    <section className="bg-blue-600 py-16 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}