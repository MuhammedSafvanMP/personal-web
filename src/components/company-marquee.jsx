"use client";

import { useEffect, useRef } from "react";

// Replace with your actual company names
const companies = [
  { name: "Zorrow Tech", logo: "/logos/zorrow.png" },
  { name: "Kodlar Innovations", logo: "/logos/kodlar.png" },
  { name: "Ranzom Tech", logo: "/logos/ranzom.png" },
  { name: "Tecnavis Web Solutions", logo: "/logos/tecnavis.png" },
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
