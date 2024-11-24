import React from 'react';
import { BookOpen, Users2, GraduationCap, GitMerge } from 'lucide-react';

const programs = [
  {
    icon: <BookOpen className="w-8 h-8 text-blue-600" />,
    title: "Joint Degree Programs",
    description: "Dual degree opportunities across partner universities worldwide."
  },
  {
    icon: <Users2 className="w-8 h-8 text-blue-600" />,
    title: "Exchange Programs",
    description: "Semester and year-long exchange opportunities for students and faculty."
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
    title: "Research Collaborations",
    description: "Cross-institutional research projects and academic partnerships."
  },
  {
    icon: <GitMerge className="w-8 h-8 text-blue-600" />,
    title: "Articulation Programs",
    description: "Articulation partnerships enable students to begin their degree programme at a partner institution before transferring to an advanced point of a closely matched programme at Goldsmiths. These arrangements are often referred to as a 1+3 or 2+2 route."
  },
  {
    icon: <GitMerge className="w-8 h-8 text-blue-600" />,
    title: "Cultural immersion",
    description: "Our programs offer a unique opportunity for students to immerse themselves in a new culture and gain a deeper understanding of local customs & traditions."
  }
];

export default function Programs() {
  return (
    <section className="py-20 bg-gray-50" id="programs">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Academic Programs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
              <p className="text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}