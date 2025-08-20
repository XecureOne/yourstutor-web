import { useEffect, useState } from "react";
import { Mote } from "../components/Mote";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Programs } from "../components/Programs";
import { Achievements } from "../components/Achievements";
import { Contact } from "../components/Contact";
import { StudentImprovements } from "../components/Testimonials";
import { FadeInOnScroll } from "../components/FadeInOnScroll";
import Faq from "../components/Faq";
import ContactSection from "../components/Book";

export const Index = () => {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = window.innerHeight * 0.5;
      setShowTopButton(window.scrollY > triggerHeight);
    };

    // Run once on mount to set initial state
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="scroll-smooth relative">
      
      <FadeInOnScroll>
        <div id="home">
          <Mote />
        </div>
      </FadeInOnScroll>
      
      <FadeInOnScroll>
        <div id="about">
          <About />
        </div>
      </FadeInOnScroll>
      
      <FadeInOnScroll><StudentImprovements /></FadeInOnScroll>
      <FadeInOnScroll><Services /></FadeInOnScroll>
      <Programs />
      <FadeInOnScroll><Faq /></FadeInOnScroll>
      <Achievements />
      <FadeInOnScroll><ContactSection /></FadeInOnScroll>
      <FadeInOnScroll><Contact /></FadeInOnScroll>

      {/* Floating Column with WhatsApp and Back-to-Top - Outside FadeInOnScroll */}
      <div className="fixed bottom-4 right-4 flex flex-col items-center gap-3 z-50 max-w-[80vw]">
        {/* WhatsApp Button - Always visible */}
        <a
          href="https://wa.me/917907041628"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-100" // Ensure it's always visible
        >
          <img
            src="/assets/WhatsApp.svg"
            alt="WhatsApp"
            className="h-12 w-12 sm:w-13 sm:h-13 md:h-14 md:w-14 hover:scale-110 transition-transform duration-300"
          />
        </a>

        {/* Back to Top Button - Only visible after scrolling past about section */}
        {showTopButton && (
          <FadeInOnScroll><button
            onClick={scrollToTop}
            className="h-10 w-10 sm:w-11 sm:h-11 md:h-12 md:w-12 rounded-full bg-purple-600 text-white text-2xl font-extrabold shadow-lg hover:bg-purple-700 transition-all flex items-center justify-center opacity-100"
            aria-label="Back to top"
          >
            ↑
          </button></FadeInOnScroll>
        )}
      </div>
    </div>
  );
};
