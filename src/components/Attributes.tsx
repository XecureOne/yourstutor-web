import { useState } from "react";

interface AttributeProp {
  label: string;
  desc?: string;
  d?: string;
}

export const Attributes = ({ label, desc, d }: AttributeProp) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative bg-white rounded-4xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 max-w-md w-full border border-slate-100 hover:border-pink-200 hover:-translate-y-1 ">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-blue-50/50 rounded-2xl opacity-60"></div>
      
      {/* Content */}
      <div className={`relative flex space-x-4 transition-all duration-300 ${
        isExpanded ? 'items-start' : 'items-center'
      }`}>
        {/* Icon container with enhanced styling */}
        <div className="flex-shrink-0">
          <Icons d={d} />
        </div>

        {/* Text content */}
        <div className="flex flex-col flex-1">
          <div 
            className="font-bold text-md sm:text-lg text-pink-600 group-hover:text-pink-700 transition-all duration-300 cursor-pointer select-none flex items-center space-x-2 font-roboto"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span>{label}</span>
            {desc && (
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </div>
          {desc && (
            <div className={`text-slate-600 text-sm leading-relaxed transition-all duration-300 overflow-hidden ${
              isExpanded ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
            }`}>
              {desc}
            </div>
          )}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-pink-200 rounded-full opacity-40"></div>
      <div className="absolute bottom-4 right-6 w-1 h-1 bg-blue-300 rounded-full opacity-30"></div>
    </div>
  );
};

interface IconProps {
  d?: string;
}

function Icons({ d }: IconProps) {
  return (
    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-blue-400 opacity-20 blur-sm group-hover:opacity-30 transition-opacity duration-300"></div>
      
      {/* Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="relative w-7 h-7 text-white drop-shadow-sm"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d={d || "M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"}
        />
      </svg>
    </div>
  );
}


