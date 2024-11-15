import React from 'react';

const team = [
  {
    name: "Vibhu Taneja",
    role: "Co-Founder & CEO",
    image: "/vibhu-taneja.jpg",
    bio: "Leading VTSAI's vision of connecting global educational institutions."
  },
  {
    name: "Neerav Jolly",
    role: "Co-Founder & CTO",
    image: "/neerav-jolly.jpg",
    bio: "Driving technological innovation in educational partnerships."
  }
];

export default function Team() {
  return (
    <section className="py-20 bg-white" id="team">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Our Leadership</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-48 h-48 mb-6 rounded-full overflow-hidden shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-4">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}