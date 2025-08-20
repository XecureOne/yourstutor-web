import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

// Dot component (placeholder - replace with your actual Dot component)
const Dot = () => (
  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
);

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqData = [
    {
      question: "Do You Provide Classes for Students of All Classes?",
      answer: "Yes. We are an established Online Tutoring and Home Tutoring agency in Kerala. We currently provide classes for KG to PG students."
    },
    {
      question: "Is the Classes available both Online and Offline?",
      answer: "Yes, the classes are available according to your needs and requirements. We provide both Online and Offline classes to the students. Our classes are flexible."
    },
    {
      question: "What is Your Fee Structure?",
      answer: "Our fee structure is customized according to the student. You can attend our free demo which will give you a clear idea about the fee structure of your child."
    },
    {
      question: "How to take Admissions for Courses?",
      answer: "You can take admission by directly contacting us. You can reach us at +917907041628. We shall schedule an Assessment test and demo accordingly."
    },
    {
      question: "Is there any Fee for Assessment test?",
      answer: "No, the Assessment Test comes completely free of cost. After the test is taken you can decide to choose Online or Home Tutoring for your child."
    },
    {
      question: "Do You Provide any Demo Classes to Students?",
      answer: "Yes, we do provide demo classes for you to have a better understanding of our method of teaching and handling our students."
    }
  ];

  const toggleAccordion = (index:number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div id="faq" className="py-10 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-[77vh] sm:min-h-[90vh]">
      {/* Header Section */}
      <div className="px-5 sm:px-10 lg:px-20">
        <div className="flex items-center space-x-3 mb-4">
          <Dot />
          <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider font-cantata">FAQ</div>
        </div>
        
        {/* Title */}
        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold pb-8 max-w-4xl font-dm">
          <span className="text-gray-800">Frequently </span>
          <span className="text-blue-600 relative">
            asked
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-200 -z-10"></span>
          </span>
          <span className="text-gray-800">. Clearly </span>
          <span className="text-indigo-600 relative">
            answered
            <span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-200 -z-10"></span>
          </span>
          <span className="text-gray-800">.</span>
        </div>
      </div>
      
      {/* FAQ Accordion */}
      <div className="px-5 sm:px-10 lg:px-20 mt-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white transition-all duration-200"
                  aria-expanded={openIndex === index}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="flex-shrink-0 mt-1">
                        <HelpCircle className="w-6 h-6 text-blue-600" />
                      </div>
                      <span className="text-gray-800 font-semibold text-sm sm:text-lg leading-relaxed pr-4 -">
                        {item.question}
                      </span>
                    </div>
                    <div className="flex-shrink-0">
                      <ChevronDown
                        className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                          openIndex === index ? 'rotate-180 text-blue-600' : ''
                        }`}
                      />
                    </div>
                  </div>
                </button>
                
                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 sm:px-8 pt-4 pb-8 sm:pt-6 sm:pb-10">
                    <div className="pl-10 border-l-4 border-blue-100">
                      <p className="text-gray-700 text-sm sm:text-lg leading-relaxed pl-1">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom CTA Section */}
      <div className="px-4 sm:px-10 lg:px-20 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 sm:p-12 text-white">
            <h3 className="text-xl sm:text-3xl font-bold mb-4 font-playfair">
              Still have questions?
            </h3>
            <p className="text-blue-100 test-md sm:text-lg mb-6 max-w-2xl mx-auto font-libertinus">
              Can't find the answer you're looking for? Please chat to our friendly team.
            </p>
            <button className="bg-white text-blue-600 font-semibold px-4 py-4 sm:px-8 sm:py-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl">
              <a href="#book">Contact Us</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;