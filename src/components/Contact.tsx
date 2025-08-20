

export const Contact = () => {
  return (
    <footer id="contact" className="bg-slate-200 text-gray-800 px-6 py-10 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        <div>
          <div className="w-50 mb-4">
            <img src="/assets/logo.svg" alt="Logo" className="w-full h-auto" />
          </div>
          <p className="text-sm">
            We help students become the best version of themselves by giving them access to the best teachers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href ="#home"className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#programs" className="hover:underline">Programs</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a 
                href="tel:+917907041628" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline"
              >
                +91 79070 41628
              </a>
            </li>
            <li>
              <a 
                href="tel:+966531601172" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline"
              >
                +966 53 160 1172
              </a>
            </li>
            <li>
              <div className="flex items-start gap-0.5">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                  </svg>
                </div>
                <a
                  href="https://www.google.com/maps?q=Smart+Trade+City,+Kottakkal,+Malappuram,+Kerala,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center"
                >
                  Smart Trade City, Kottakkal, Malappuram Dt., Kerala, India
                </a>
              </div>
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold text-lg mb-2">Socials</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="https://www.instagram.com/yourstutor.in/" target="_blank" className="hover:underline">Instagram</a></li>
            <li><a href="https://wa.me/917907041628" target="_blank" className="hover:underline">Whatsapp</a></li>
          </ul>
        </div>
      </div>

      
      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Yours Tutor. All rights reserved.
      </div>
    </footer>
  );
};