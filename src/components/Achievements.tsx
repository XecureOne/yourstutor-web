import { AchievementCard } from "./AchievementCard";
import { Dot } from "./About";
import { FadeInOnScroll } from "./FadeInOnScroll";
const sections = [
  {
    title: "Remarkable improvements",
    data: [
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

    ]
  },
  {
    title: "Outstanding Result's",
    data: [
      {
        name: "Devika",
        grade: "10ᵗʰ CBSE School Topper",
        result: "Science",
        imgSrc: "/assets/devika.png"
      },
      {
        name: "Dana",
        grade: "12ᵗʰ Grade",
        result: "English - 100%",
        imgSrc: "/assets/dana.png"
      }
      ,
      {
        name: "Aparna",
        grade: "11ᵗʰ Grade",
        result: "Science",
        imgSrc: "/assets/aparna.png"
      }
      ,
      {
        name: "Rifan",
        grade: "10ᵗʰ Grade",
        result: "Below Average to 90%",
        imgSrc: "/assets/rifan.png"
      }
    ]
  },
  {
    title: "Other Results",
    data: [
      {
        name: "Hredhan",
        grade: "10ᵗʰ Grade",
        result: "Science – 97%",
        imgSrc: "/assets/hredhan.png"
      },
      {
        name: "Abdullah Bin Nyjil",
        grade: "4ᵗʰ Grade Math Olympiad",
        result: "Gold medal",
        imgSrc: "/assets/nyjil.png"
      },
      {
        name: "Abdullah Masood",
        grade: "2nd Grade",
        result: "Gold medal",
        imgSrc: "/assets/masood.png"
      },
      {
        name: "Rayya",
        grade: "9ᵗʰ Grade",
        result: "Maths & Science - 94%",
        imgSrc: "/assets/Rayya.png"
      },
      {
        name: "Lena Vimal",
        grade: "10ᵗʰ ICSE",
        result: "94%",
        // imgSrc: "/assets/Lena.png"
      },
      {
        name: "Ehan",
        grade: "3rd Grade",
        result: "Maths – 100%",
        imgSrc: "/assets/Ehan.png"
      },
      {
        name: "Ajzal",
        grade: "10ᵗʰ Grade",
        result: "Below average to 90%+",
        imgSrc: "/assets/Ajzal.png"
      },
      {
        name: "Akshay Mathew",
        grade: "6ᵗʰ Grade",
        result: "SAT - USA",
        imgSrc: "/assets/Akshay.png"
      },
    ]
  }
];

export const Achievements = () => {
  return (
    <div className="bg-linear-to-br from-slate-300 via-slate-200 to-slate-400  lg:p-10 xl:p-20 text-center ">
      <div className="flex flex-col items-center">
        <div className="flex items-center space-x-2 pt-10 ">
                <Dot />
                <span className="text-sm font-medium font-cantata">OUR PROUD ACHIEVEMENTS</span>
          </div>
      <div className="text-2xl sm:text-3xl font-bold p-5 font-dm lg:text-4xl">
          Success Stories Written by Our Students
        </div>
      </div>
      {sections.map((section, idx) => (
        <FadeInOnScroll><div className="py-5 p-10">
            <div key={idx} className="mb-10 border-white rounded-2xl p-10 bg-gradient-to-br from-[#1e3a8a] to-[#6366f1] shadow-2xl">
          <h2 className="text-slate-200 font-bold mb-6 text-2xl font-domine ">{section.title}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
            {section.data.map((item, i) => (
              <AchievementCard key={i} {...item} />
            ))}
          </div>
        </div>
        </div></FadeInOnScroll>
        
      ))}
    </div>
  );
};