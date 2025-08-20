import { useState } from "react";

interface FeatureCardProp {
  label: string;
  desc?: string;
  d?: string;
}

export const FeatureCard = ({ label, desc, d }: FeatureCardProp) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full">
      <div 
        className={`group cursor-pointer select-none transition-all duration-300 ${
          isExpanded 
            ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-r-lg shadow-md' 
            : 'hover:bg-slate-50'
        } p-4 rounded-lg h-full`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className={`flex space-x-4 transition-all duration-300 ${
          isExpanded ? 'items-start' : 'items-center'
        }`}>
          {/* Icon */}
          <div className={`flex-shrink-0 transition-all duration-300 ${
            isExpanded ? 'mt-1' : ''
          }`}>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isExpanded 
                ? 'bg-blue-500 shadow-lg' 
                : 'bg-slate-100 group-hover:bg-blue-100'
            }`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className={`w-6 h-6 transition-colors duration-300 ${
                  isExpanded ? 'text-white' : 'text-slate-600 group-hover:text-blue-600'
                }`}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d={d || "M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"}
                />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h3 className={`font-semibold font-domine transition-all duration-300 ${
                isExpanded 
                  ? 'text-lg text-blue-700' 
                  : 'text-base text-slate-800 group-hover:text-blue-600'
              }`}>
                {label}
              </h3>
              
              {desc && (
                <div className="flex-shrink-0 ml-2">
                  <svg 
                    className={`w-5 h-5 transition-all duration-300 ${
                      isExpanded 
                        ? 'rotate-180 text-blue-500' 
                        : 'text-slate-400 group-hover:text-blue-500'
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              )}
            </div>

            {/* Description */}
            {desc && (
              <div className={`overflow-hidden transition-all duration-300 ${
                isExpanded 
                  ? 'max-h-32 opacity-100 mt-3' 
                  : 'max-h-0 opacity-0'
              }`}>
                <p className="text-sm text-slate-600 leading-relaxed pr-4">
                  {desc}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
