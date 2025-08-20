import { useState } from "react";
import { Bluebutton } from "./Bluebutton";
import { Menu, X } from "lucide-react";

export const Appbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-transparent px-4 sm:px-8 py-2 border-gray-600 shadow z-50 relative">
      {/* TOP BAR */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center bg-gray-100 rounded-2xl">
          <img
            src="/assets/logo.svg"
            alt="Logo"
            className="w-28 sm:w-40 object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex flex-wrap justify-center gap-2">
          <Bluebutton label="Home" href="home" />
          <Bluebutton label="About Us" href="about" />
          <Bluebutton label="Services" href="services" />
          <Bluebutton label="Programs" href="programs" />
          <Bluebutton label="FAQ" href="faq" />
          <Bluebutton label="Contact Us" href="book" />
          
        </div>

        {/* CTA on large screens */}
        <div className="hidden sm:inline">{/* Add CTA here if needed */}</div>

        {/* Hamburger Button (only small screens) */}
        <div className="sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-slate-900 bg-slate-300 hover:bg-slate-400 p-2 rounded-lg"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`sm:hidden absolute top-full left-0 w-full backdrop-blur-xl bg-white/50 shadow rounded-b-lg overflow-hidden z-40 transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100 p-4" : "max-h-0 opacity-0 p-0"
        }`}
      >
        <div className="flex flex-col space-y-2 text-slate-700 font-medium ">
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#programs" onClick={() => setMenuOpen(false)}>Programs</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a href="#book" onClick={() => setMenuOpen(false)}>Contact Us</a>
        </div>
      </div>
    </header>
  );
};
