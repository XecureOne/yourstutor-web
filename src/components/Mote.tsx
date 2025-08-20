import { Minibar } from './Minibar';
import { Appbar } from './Appbar';

// Mock components for demonstration


export const Mote = () => {
  return (
    <div id="home" className="w-full relative overflow-hidden">
      <Minibar />

      <div className="relative flex flex-col min-h-[90vh] sm:min-h-screen">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/assets/teaching.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/60 z-0" />

        {/* Foreground content */}
        <div className="relative z-10 flex flex-col h-full">
          <Appbar />

          {/* Hero content - optimized for mobile */}
          <div className="flex-1 flex flex-col justify-center px-5 py-20 sm:px-8 md:px-16 sm:py-20">
            <div className="max-w-4xl">
              {/* Main heading - optimized typography */}
              <h1 className="text-4xl text-center sm:text-left sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight font-playfair">
                <span className=" sm:inline">World's </span>
                <span className="text-blue-400 sm:text-white  sm:inline">Finest </span>
                <span className=" sm:inline">Individual </span>
                <span className="text-pink-500 sm:text-white  sm:inline">Tuition</span>
              </h1>
              
              {/* Description - improved readability */}
              <p className="text-base sm:text-lg text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-2xl text-center sm:text-left font- ">
                We've been helping students unlock their full potential through personalized, one-on-one learning. By matching each learner with a dedicated tutor, we simplify understanding, boost confidence, and build strong academic foundations.
              </p>
              
              {/* CTA Button - mobile optimized */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  className="w-ful sm:w-auto bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 hover:from-pink-500 hover:to-blue-500 text-white font-semibold rounded-full px-8 py-4 sm:py-3 text-lg sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  <a href="#book" className="block">Book a Free Demo Class</a>
                </button>
                
                {/* Secondary CTA */}
                <button
                  type="button"
                  className="w-full sm:w-auto bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-white font-semibold rounded-full px-8 py-4 sm:py-3 text-lg sm:text-base transition-all duration-300"
                >
                  <a href="#programs">View Courses</a>
                </button>
              </div>
              
              {/* Trust indicators */}
              <div className="mt-8 sm:mt-12 flex flex-wrap items-center gap-6 text-gray-300 invisible sm:visible">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm">KG to PG Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm">Online & Offline</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-sm">Free Assessment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};


    


export default Mote;