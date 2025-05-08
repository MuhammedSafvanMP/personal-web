"use client"

// Replace with your actual company names
const companies = ["Microsoft", "Google", "Amazon", "Apple", "Netflix", "Meta", "Spotify", "Airbnb", "Uber", "Tesla"]

export default function CompanyMarqueeAlt() {
  // Duplicate the array to create a seamless loop
  const allCompanies = [...companies, ...companies]

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-gray-50 to-white py-10 border-y border-gray-200">
      <div className="flex items-center">
        <div className="animate-scroll inline-flex items-center space-x-16">
          {allCompanies.map((company, index) => (
            <div key={index} className="flex items-center">
              <span className="text-xl md:text-2xl font-medium text-gray-800">{company}</span>
              {index < allCompanies.length - 1 && <span className="mx-8 text-gray-300">•</span>}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 2rem));
          }
        }
        
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </div>
  )
}
