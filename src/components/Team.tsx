import React from 'react';
import {FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";

const team = [
  {
    name: "Vibhu Taneja",
    role: "Co-Founder & CEO",
    image: "/pic-1.jpg",
    link : "https://www.linkedin.com/in/vibhutaneja/",
    bio: "Leading VTSAI's vision of connecting global educational institutions."
  },
  {
    name: "Neerav Jolly",
    role: "Business Development Manager",
    image: "/nee_2.jpeg",
    link : "https://www.linkedin.com/in/neerav-jolly-14673415/",
    bio: "business developer with extensive experience of developing, defining overall marketing strategy with more than 20 years of experience of marketing and business development in Service and Education Industry. Can relate well with people at all levels and has the flexibility of working well as part of a team or individually. Comfortable working in a fast paced, hands-on, growth orientated work environment and possessing a proven ability to ensure that brand messages, standards and communications are understood and implemented effectively."
  },
  {
    name : "Yash Pandya",
    role : "CTO",
    image : "",
    link : "https://www.linkedin.com/in/yash-pandya-data/",
    bio : "With a Master's in Data Science and over 5 years of experience as a Data Analyst and Developer, I am joining this company to contribute to data-driven decision-making, optimize IT processes, and support business growth. My role involves combining technical expertise with strategic insights, leveraging data to drive innovation and efficiency. I am dedicated to collaborating across teams, exploring new ideas, and using my skills to deliver meaningful solutions that align with the company’s goals."
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
      
      <FaLinkedin onClick={() => window.open(member.link)} />
      <br />
      
      
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}