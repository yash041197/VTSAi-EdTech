import React from 'react';

const gallery = [
  {
    image: "/PHOTO-3.jpg",
    caption: "Meeting with IULM University Leadership🇮🇹"
  },
  {
    image: "/PHOTO_1.jpg",
    caption: "Partnership Signing with International Management Institute of Switzerland🇨🇭"
  },
  {
    image: "/PHOTO-2.jpg",
    caption: "Student Exchange Program Launch - Italy"
  },
  {
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80",
    caption: "Research Collaboration Workshop - Stanford"
  }
];

export default function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Building Global Partnerships</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gallery.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg aspect-[4/3]">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 text-sm font-medium">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}