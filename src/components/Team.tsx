import React from 'react';
import {View, Text} from 'react-native';
import {FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { TfiEmail } from "react-icons/tfi";
import { Columns } from 'lucide-react';

const team = [
  {
    name: "Vibhu Taneja",
    role: "Director - Education Consulting and Finance",
    image: "/pic-1.jpg",
    link : "https://www.linkedin.com/in/vibhutaneja/",
    bio: "Leading VTSAI's vision of connecting global educational institutions. Passionate enterpreneur with over 2 decades of global experience in investment banking & Education sector. His journey has been driven by real world problems , fostering creativity & building sustainable ventures that leaves positive impact.",
    email : "mailto:info@vtsaioverseas.com"
  },
  {
    name: "Viriti Taneja",
    role: "Director - Education Consulting & HR",
    image: "/vriti.png",
    link : "https://www.linkedin.com/in/vriti-taneja-b2683921/",
    bio: "Leading with a commitment of delivering education excellence. She has over 15 years of experience in the education sector driving transformation through innovative ideas & techniques.",
    email : "mailto:info@vtsaioverseas.com"
  },
  {
    name: "Himanshu Arora",
    role: "Business Manager ",
    image: "/Himanshu.jpeg",
    link : "",
    bio: "Accomplished Business Manager with extensive experience in driving operational excellence and strategic growth across diverse industries. With a proven track record in team leadership, financial planning, and process optimization. A skilled communicator and negotiator, adept at building strong relationships with stakeholders and aligning business objectives to deliver sustained success.",
    email : "mailto:info@vtsaioverseas.com"
  },
  {
    name: "Neerav Jolly",
    role: "Business Development Manager - EU",
    image: "/nee_2.jpeg",
    link : "https://www.linkedin.com/in/neerav-jolly-14673415/",
    bio: "Over 20 Years of extensive business development experience in education sector, in defining , developing  & executing overall marketing strategy. Excellent communication & relationship building skills with people & Universities at all levels and has the flexibility of working & travelling globally.",
    email : "mailto:neerav.jolly@vtsaioverseas.com"
  },
  {
    name : "Mohit ",
    role : "Consultant & Advisor",
    image : "/mohit.jpg",
    link : "https://www.linkedin.com/in/mohit-dahiya-7a32ba12a/",
    bio : "With a Bachelor’s and Master’s in Hotel Management and currently pursuing a PhD in Hotel Management and Tourism, I bring a strong academic and industry foundation to the team. I have 8 years of experience as an Assistant Professor in India and the UK, along with 2 years of hands-on industry experience in the Maldives and India. My focus is on bridging hospitality education and real-world application, contributing unique insights to support the team’s vision for growth and innovation.",
    email : "mailto:info@vtsaioverseas.com"
  },
  {
    name : "Yash Pandya",
    role : "Data Strategist (Internship)",
    image : "/yash.jpg",
    link : "https://www.linkedin.com/in/yash-pandya-data/",
    bio : "With a Master's in Data Science and over 5 years of experience as a Data Analyst and Developer, I am joining this company to contribute to data-driven decision-making, optimize IT processes, and support business growth. I am dedicated to collaborating across teams, exploring new ideas, and using my skills to deliver meaningful solutions that align with the company’s goals.",
    email : "mailto:yashpandya0411@gmail.com"
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
              
              <div className="flex gap-4 text-2xl font-semibold mb-2">
                
                
              <FaLinkedin onClick={() => window.open(member.link)} />
             
              <TfiEmail onClick={() => window.open(member.email)} />
              
              </div>
      
       <br />
      
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}