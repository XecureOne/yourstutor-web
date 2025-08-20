import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

interface ProgramcardProps extends ListOfdescprops {
  label: string;
  icon?: React.ReactNode;
}

export const Programcard = ({ label, descs, icon = <BookOpen size={24} /> }: ProgramcardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative bg-white m-5 rounded-xl shadow-lg border-l-4 border-pink-500 transition-all duration-300 ease-in-out hover:shadow-2xl self-start">
      
      {/* Card Content */}
      <div className="p-8">
        {/* Icon and Title Section */}
        <div className="mb-2">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-pink-600 to-purple-600 rounded-2xl shadow-md flex items-center justify-center text-white">
              {icon}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 leading-tight font-playfair">
                {label}
              </h3>
            </div>
          </div>
        </div>
        
        {/* Expand Toggle */}
        <button 
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg border-2 border-gray-200 hover:border-pink-300 hover:bg-pink-50 transition-all duration-200 group"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className="text-sm font-semibold text-gray-700 group-hover:text-pink-700 font-domine">
            {isExpanded ? 'Show Less' : 'Learn More'}
          </span>
          <div className="text-pink-600 transition-transform duration-200">
            {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>
        </button>
        
        {/* Expandable Description */}
        <div className={`overflow-y-auto transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="mt-6 pt-6 border-t border-gray-100 ">
            <ListOfdesc descs={descs} />
          </div>
        </div>
      </div>
    </div>
  );
};

function Smalldot() {
  return (
    <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-sm flex-shrink-0"></div>
  );
}

interface ListOfdescprops {
  descs: string[];
}

function ListOfdesc({ descs }: ListOfdescprops) {
  return (
    <div className="space-y-4">
      {descs.map((desc, index) => (
        <div key={index} className="flex items-start gap-4 group">
          <div className="mt-1.5 transition-transform duration-200 group-hover:scale-110">
            <Smalldot />
          </div>
          <p className="text-gray-700 font-medium leading-relaxed text-base flex-1 transition-colors duration-200 group-hover:text-gray-900">
            {desc}
          </p>
        </div>
      ))}
    </div>
  );
}
