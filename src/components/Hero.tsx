import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative h-[600px]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80"
          className="w-full h-full object-cover brightness-50"
          alt="University campus"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">VTSAI: Bridging Global Education</h1>
          <p className="text-xl mb-8">Empowering institutions worldwide through innovative partnerships, collaborative research, and academic excellence.</p>
          <div className="flex gap-4">
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors"
            >
              Let's Connect <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#programs" 
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Programs
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}