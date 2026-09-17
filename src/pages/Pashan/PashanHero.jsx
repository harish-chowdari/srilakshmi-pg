import React from 'react';
import { ChevronRight, MapPin } from 'lucide-react';

function PashanHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <img
        src="https://picsum.photos/seed/skyinn-baner-hero/1600/500"
        alt="Sri Lakshmi Luxury PG in Pashan building"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1526]/95 via-[#0B1526]/75 to-[#0B1526]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1526]/70 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20 lg:py-24">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wide mb-5">
          <a href="/" className="text-white hover:text-[#A6CE39] transition-colors">
            HOME
          </a>
          <ChevronRight size={14} className="text-white/50" />
          <span className="text-[#A6CE39]">Sri Lakshmi Luxury PG in Pashan</span>
        </div>

        {/* Badge */}
        <span className="inline-block bg-[#A6CE39] text-[#0B1526] text-[11px] font-bold tracking-wide px-3 py-1.5 rounded-md mb-4">
          PREMIUM PG
        </span>

        {/* Title */}
        {/* Title */}
        <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight">
          Sri Lakshmi Luxury PG in Pashan
        </h1>

        {/* Mobile Phone Number */}
        <a
          href="tel:+919112488666"
          className="block text-white/80 text-sm font-semibold mt-2"
        >
          9112488666
        </a>

        {/* Location */}
        <div className="flex items-start gap-2 mt-4">
          <MapPin size={16} className="text-[#A6CE39] shrink-0 mt-0.5" />
          <span className="text-gray-200 font-semibold text-sm sm:text-base leading-relaxed">
            Sr No: 29/7A, ShivDatta Residency, Datta Niwas Rd, Pashan Sutarwadi Link Rd, Sutarwadi, Pashan, Pune, Maharashtra 411021
          </span>
        </div>
      </div>
    </section>
  );
}

export default PashanHero;