import React, { useState } from 'react';
import { Users, Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import NetworkAnimation from './components/NetworkAnimation';
import Programs from './components/Programs';
import Universities from './components/Universities';
import Stats from './components/Stats';
import Team from './components/Team';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import SplitPane, { Pane } from 'split-pane-react';
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen">
      <nav className={`fixed right-0 top-0 h-full z-50`}>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="fixed right-4 top-4 bg-white p-2 rounded-lg shadow-lg z-50"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <div 
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={closeMenu}
        />
        <div className={`fixed right-0 top-0 bg-white shadow-lg h-full w-64 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-6 flex flex-col h-full">
            <div className="flex items-center gap-2 mb-8 mt-8">
              <Users className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold">VTSAI</span>
            </div>
            <div className="flex flex-col gap-6">
              <a href="#hero" onClick={closeMenu} className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" onClick={closeMenu} className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#programs" onClick={closeMenu} className="text-gray-600 hover:text-blue-600 transition-colors">Programs</a>
              <a href="#partners" onClick={closeMenu} className="text-gray-600 hover:text-blue-600 transition-colors">Partners</a>
              <a href="#team" onClick={closeMenu} className="text-gray-600 hover:text-blue-600 transition-colors">Team</a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <NetworkAnimation />
        
        <section id="about" className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Connecting Global Education</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              We builds bridges between educational institutions worldwide, fostering collaboration,
              innovation, and excellence in global education.
            </p>
          </div>
        </section>

        
        <Gallery />
        <Programs />
        <Universities />
        
        <Team />
        <Contact />
      </main>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Users className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold text-white">VTSAI</span>
            </div>
            <div className="text-sm">
              © {new Date().getFullYear()} VTSAI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;