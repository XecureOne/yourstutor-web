import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

interface ContactFormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-pink-700 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-8 sm:mb-12 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
            <div className="w-3 h-3 bg-gradient-to-r from-pink-700 to-pink-500 rounded-full animate-pulse"></div>
            <span id='book' className="text-gray-300 text-sm sm:text-base font-bold tracking-widest uppercase bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
              CONTACT US
            </span>
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Contact Info */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight font-playfair">
                Let's Talk About Your{' '}
                <span className="bg-gradient-to-r from-pink-700 via-pink-500 to-pink-400 bg-clip-text text-transparent animate-pulse">
                  Child's Success
                </span>
              </h1>
              
              <p className="text-gray-300 text-lg sm:text-xl mb-12 leading-relaxed max-w-2xl font-libertinus">
                Take the first step toward personalized academic support and a brighter future. Book a free consultation call today — and discover how our expert tutors can help your child thrive, both online and at home.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-700/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
                <div className="relative flex items-center gap-6 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-pink-700/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-700/20 cursor-pointer">
                  <div className="w-14 h-14 bg-gradient-to-br from-gray-600 to-gray-800 group-hover:from-pink-700 group-hover:to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-lg">
                    <Phone className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-2 group-hover:text-pink-300 transition-colors duration-300">Phone Number</p>
                    <a 
                      href="tel:+917907041628" 
                      className="text-white font-bold text-xl group-hover:text-pink-200 transition-colors duration-300 hover:underline"
                    >
                      +91 79070 41628
                    </a>, <a 
                      href="tel:+966531601172" 
                      className="text-white font-bold text-xl group-hover:text-pink-200 transition-colors duration-300 hover:underline"
                    >
                      +966 53 160 1172
                    </a>
                  </div>
                </div>
              </div>
             

              {/* WhatsApp */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
                <div className="relative flex items-center gap-6 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer">
                  <div className="w-14 h-14 bg-gradient-to-br from-gray-600 to-gray-800 group-hover:from-blue-500 group-hover:to-blue-400 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-lg">
                    <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-2 group-hover:text-blue-300 transition-colors duration-300">WhatsApp</p>
                    <a 
                      href="https://wa.me/917907041628" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white font-bold text-xl group-hover:text-blue-200 transition-colors duration-300 hover:underline"
                    >
                      +91 79070 41628
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
                <div className="relative flex items-start gap-6 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-gray-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-500/20 cursor-pointer">
                  <div className="w-14 h-14 bg-gradient-to-br from-gray-600 to-gray-800 group-hover:from-gray-500 group-hover:to-gray-400 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-lg mt-1">
                    <MapPin className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-2 group-hover:text-gray-300 transition-colors duration-300">Location</p>
                    <a
                      href="https://www.google.com/maps?q=Smart+Trade+City,+Kottakkal,+Malappuram,+Kerala,+India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-bold text-xl leading-relaxed group-hover:text-gray-200 transition-colors duration-300 hover:underline block"
                    >
                      Kottakkal
                    </a>
                    <a
                      href="https://maps.app.goo.gl/GB5GkVE2SzBeBo1VA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-bold text-xl leading-relaxed group-hover:text-gray-200 transition-colors duration-300 hover:underline block"
                    >
                      Kacherippadi
                    </a>
                    <a
                      href="https://maps.app.goo.gl/FPaVSovEFf1K9UCC6?g_st=ac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-bold text-xl leading-relaxed group-hover:text-gray-200 transition-colors duration-300 hover:underline block"
                    >
                      Padaparamba
                    </a>
                    <a
                      href="https://maps.app.goo.gl/cW5p8tppXBPmwTYc8?g_st=ac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-bold text-xl leading-relaxed group-hover:text-gray-200 transition-colors duration-300 hover:underline block"
                    >
                      Perinthalmanna
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="order-1 lg:order-2 sm:block hidden">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 sm:p-10 text-gray-900 shadow-2xl border border-white/20 relative overflow-hidden">
              {/* Form background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-700/10 to-transparent rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Connect With Us
                </h2>
                <p className="text-gray-600 mb-8 text-base sm:text-lg leading-relaxed">
                  Want to know more about our services or need a custom solution? Share your inquiry, we'll respond promptly.
                </p>

                <div className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-700 focus:border-pink-700 outline-none transition-all text-base bg-white/80 backdrop-blur-sm hover:border-gray-300"
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-700 focus:border-pink-700 outline-none transition-all text-base bg-white/80 backdrop-blur-sm hover:border-gray-300"
                      />
                    </div>
                  </div>

                  {/* Phone and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-base bg-white/80 backdrop-blur-sm hover:border-gray-300"
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-base bg-white/80 backdrop-blur-sm hover:border-gray-300"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none transition-all text-base bg-white/80 backdrop-blur-sm hover:border-gray-300"
                    />
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none transition-all resize-none text-base bg-white/80 backdrop-blur-sm hover:border-gray-300"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center sm:justify-end pt-4">
                    <button
                      onClick={handleSubmit}
                      className="w-full sm:w-auto bg-gradient-to-r from-pink-700 to-pink-600 hover:from-pink-800 hover:to-pink-700 text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl hover:shadow-pink-700/30 text-base"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
