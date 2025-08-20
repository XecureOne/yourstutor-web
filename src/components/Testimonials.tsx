import { useEffect, useRef, useState } from "react";
import {  Star, ArrowRight } from "lucide-react";

// Mock Dot component
const Dot = () => (
  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
);

interface StudentData {
  name: string;
  grade: string;
  result: string;
  imgSrc: string;
}

// Enhanced Student Improvement Card
const StudentCard = ({ student }: { student: StudentData; index: number }) => {
  const [before, after] = student.result.split(' to ');

  return (
    <div className="group relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
      <div className="flex flex-col sm:flex-row h-full">
        {/* Student Profile Section - Takes up half the card */}
        <div className="border-b sm:border-b-0 sm:border-r border-gray-100 p-4 sm:p-8 flex flex-col items-center justify-center gap-6 ">
          <div className="relative">
            <img 
              src={student.imgSrc} 
              alt={student.name}
              className="w-30 h-30  sm:w-32 sm:h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full object-cover border-4 border-white shadow-sm group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLDivElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            {/* Fallback avatar */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl sm:text-4xl shadow-sm group-hover:scale-105 transition-transform duration-300 hidden">
              {student.name.charAt(0)}
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-sm">
              <Star className="w-3 h-3 text-white fill-current" />
            </div>
          </div>
          <div className="text-center">
            <h4 className="font-semibold text-gray-800 text-xl mb-1">{student.name}</h4>
            <p className="text-sm text-blue-500 font-medium">
              {student.grade}
            </p>
          </div>
        </div>

        {/* Transformation Content */}
        <div className="flex-grow  sm:p-3 flex flex-col justify-center sm:w-1/2 sm:mr-10">
          {/* Before and After with Enhanced Styling */}
          <div className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 border border-gray-200/50 shadow-inner backdrop-blur-sm">
            {/* Animated background patterns */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-purple-400/5 to-pink-400/5 animate-pulse"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500"></div>
            
            {/* Transformation indicator with better positioning */}
            

            <div className="flex items-center justify-between gap-4">
              
              <div className="text-center flex-1 relative overflow-hidden rounded-xl bg-gradient-to-br from-red-100/80 to-pink-100/60 p-4 border border-red-200/50 group-hover:shadow-md transition-all duration-300 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-red-400/10 to-pink-400/15 animate-pulse"></div>
                <div className="absolute -top-1 -left-1 w-3 h-3 bg-red-400 rounded-full opacity-60"></div>
                <span className="text-sm font-bold text-red-700 uppercase tracking-wider block mb-2 bg-red-200/80 px-3 py-1 rounded-full relative z-10 shadow-sm">From</span>
                <p className="text-base text-red-800 font-semibold relative z-10">{before}</p>
              </div>
              
              <div className="flex-shrink-0 relative z-10">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full flex items-center justify-center animate-pulse shadow-lg border-2 border-white">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full  opacity-20"></div>
              </div>
              
              <div className="text-center flex-1 relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-100/80 to-green-100/60 p-4 border border-emerald-200/50 group-hover:shadow-md transition-all duration-300 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/15 via-green-400/20 to-teal-400/15 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full opacity-60"></div>
                <span className="text-sm font-bold text-emerald-700 uppercase tracking-wider block mb-2 bg-emerald-200/80 px-3 py-1 rounded-full relative z-10 shadow-sm">To</span>
                <p className="text-base font-bold text-emerald-800 relative z-10">{after}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle hover effect */}
      <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export const StudentImprovements = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState(1);
  const [hovering, setHovering] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateVisibleCards = () => {
      setVisibleCards(window.innerWidth >= 1024 ? 2 : 1);
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (!hovering && scrollRef.current) {
        const container = scrollRef.current;
        const cardWidth = container.offsetWidth / visibleCards;
        
        if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
          container.scrollTo({ left: 0, behavior: "smooth" });
          setCurrentIndex(0);
        } else {
          container.scrollBy({ left: cardWidth, behavior: "smooth" });
          setCurrentIndex(prev => prev + 1);
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [visibleCards, hovering]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const cardWidth = container.offsetWidth / visibleCards;
        const newIndex = Math.round(container.scrollLeft / cardWidth);
        setCurrentIndex(newIndex);
      }
    };

    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [visibleCards]);

  const students: StudentData[] = [
    {
      name: "Jazeel",
      grade: "10ᵗʰ Grade",
      result: "Failed to 90%+",
      imgSrc: "/assets/jazeel.png"
    },
    {
      name: "Sajaz P",
      grade: "10ᵗʰ Grade", 
      result: "Failed to 90%+",
      imgSrc: "/assets/sajaz.png"
    },
    {
      name: "Nadeem P",
      grade: "JEE Mains",
      result: "Below Average to NIT Calicut",
      imgSrc: "/assets/nadeem.png"
    },
    {
      name: "Nihal",
      grade: "6ᵗʰ Grade",
      result: "Average to Class Topper",
      imgSrc: "/assets/nihal.png"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700">

      
      <div className="p-10 pb-4">
        <div className="flex items-center space-x-2">
          <Dot />
          <div className="text-sm font-medium text-white font-cantata">SUCCESS STORIES</div>
        </div>
        <div className="text-2xl sm:text-3xl font-bold max-w-5xl text-white pt-3 font-playfair">
          Transforming Potential Into Performance
        </div>
      </div>
      <div className="p-5 sm:p-8">
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory space-x-5 pt-2 cursor-pointer"
        >
          {students.map((student, idx) => (
            <div
              key={idx}
              className={`snap-start flex-shrink-0 ${
                visibleCards === 2 ? "w-1/2" : "w-full"
              }`}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              onTouchStart={() => setHovering(true)}
              onTouchEnd={() => setHovering(false)}
            >
              <StudentCard student={student} index={idx} />
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          {students.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (scrollRef.current) {
                  const cardWidth = scrollRef.current.offsetWidth / visibleCards;
                  scrollRef.current.scrollTo({ left: cardWidth * idx, behavior: "smooth" });
                  setCurrentIndex(idx);
                }
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "bg-white scale-125"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};