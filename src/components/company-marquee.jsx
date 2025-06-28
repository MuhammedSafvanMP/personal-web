"use client";

import { useEffect, useRef } from "react";
import techno from "../assets/techno.jpeg";
import zorrow from "../assets/zorrow.jpeg";
import ranzo from "../assets/rannav.png";
import kodlar from "../assets/kod.avif";
import brid from "../assets/brid.png";

// Replace with your actual company names
const companies = [
  { name: "Zorrow Tech", logo: `${zorrow}` },
  { name: "Kodlar Innovations", logo: `${kodlar}` },
  { name: "Ranzom Tech", logo: `${ranzo}` },
  { name: "Tecnavis Web Solutions", logo: `${techno}` },
  { name: "Bridgeon Solutions", logo: `${brid}` },
];

export default function CompanyMarquee() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    // Duplicate the marquee content for seamless looping
    if (marqueeRef.current) {
      marqueeRef.current.innerHTML += marqueeRef.current.innerHTML;
    }
  }, []);

  return (
    <div className="w-full overflow-hidden   py-8 ">
      <div className="relative flex items-center">
        <div
          ref={marqueeRef}
          className="animate-marquee whitespace-nowrap flex items-center"
        >
          {companies.map((company, index) => (
            <span
              key={index}
              className="flex items-center gap-2 text-xl md:text-2xl font-medium mx-8 whitespace-nowrap"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="w-6 h-6 md:w-8 md:h-8 object-contain"
              />
              {company.name}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
