import React from 'react';
import { Globe2, Building2 } from 'lucide-react';

const regions = [
  {
    name: "North America",
    universities: ["Harvard University", "Stanford University", "MIT", "University of Toronto"]
  },
  {
    name: "Europe",
    universities: ["Oxford University", "ETH Zurich", "Imperial College London", "Sciences Po"]
  },
  {
    name: "Asia",
    universities: ["University of Tokyo", "Tsinghua University", "NUS", "Seoul National University"]
  }
];

const associatedPartners = [
  {
    name: "International Management Institute of Switzerland",
    location: "Switzerland 🇨🇭",
    logo: "https://images.unsplash.com/photo-1614583225154-5fcdda07019e?auto=format&fit=crop&q=80&w=200&h=200",
    flag: "🇨🇭"
  },
  {
    name: "IULM",
    location: "Italy 🇮🇹",
    logo: "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?auto=format&fit=crop&q=80&w=200&h=200",
    flag: "🇮🇹"
  }
];

export default function Universities() {
  return (
    <section className="py-20" id="partners">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Globe2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold">Our Global Network</h2>
          <p className="text-gray-600 mt-4">Connected with leading institutions across continents</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {regions.map((region, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">{region.name}</h3>
              <ul className="space-y-3">
                {region.universities.map((uni, idx) => (
                  <li key={idx} className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors">
                    {uni}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold">Associated Partners</h2>
            <p className="text-gray-600 mt-4">Our distinguished institutional collaborators</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {associatedPartners.map((partner, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-6">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    {partner.name}
                    <span className="text-2xl">{partner.flag}</span>
                  </h3>
                  <p className="text-gray-600">{partner.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}