import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Connect With Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">partnerships@vtsai.edu</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+1 (555) 234-5678</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-600">456 University Avenue, Boston, MA 02115</p>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="University Name"
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Institutional Email"
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <select className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="">Select Partnership Type</option>
              <option value="exchange">Student Exchange</option>
              <option value="research">Research Collaboration</option>
              <option value="joint">Joint Degree Program</option>
            </select>
            <textarea
              placeholder="Partnership Proposal"
              rows={4}
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Submit Proposal
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}