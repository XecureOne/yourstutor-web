import { FeatureCard } from "./FeatureCard";


export const About = () => {
  return (
    <div id="about" className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

      <div className="flex justify-center items-center p-6">
        <div
          className="w-82 h-72 sm:w-96 sm:h-96 lg:w-164 lg:h-164 bg-contain bg-center bg-no-repeat rounded-2xl"
          style={{
            backgroundImage: "url('/assets/girl.jpg')",
            backgroundSize: "150%",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      <div className="flex flex-col justify-center p-6 sm:p-10">
        <div className="flex items-center space-x-2 mb-2">
          <Dot />
          <span className="text-sm font-medium font-cantata">ABOUT US</span>
        </div>
        <div className="text-2xl sm:text-3xl py-3 font-domine font-bold ">
          We Believe Education Is About Individuals, Not Just Instructions.
        </div>
        <div className="text-sm sm:text-base pb-6 text-slate-700 font-roboto">
          Yours Tutor offers personalized one-on-one tutoring with dedicated experts
          who focus on each student's individual needs, helping them improve faster and
          learn better.
        </div>
        
        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FeatureCard
            label="Personalized 1-on-1 Learning"
            desc="Every session is tailored to suit your learning style, pace, and goals."
            d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"
          />
          <FeatureCard
            label="Verified & Experienced Tutors"
            desc="Our tutors go through a rigorous selection process to ensure top quality education."
            d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z"
          />
          <FeatureCard
            label="Flexible Online & Offline Classes"
            desc="Choose from online sessions or in-person tutoring based on your preference and convenience."
            d="M9 1.5H5.625c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5Zm6.61 10.936a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 14.47a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
          />
          <FeatureCard
            label="Free Assessment & Demo"
            desc="Get a comprehensive assessment and experience our teaching methodology with a free demo class."
            d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z"
          />
        </div>
      </div>
    </div>
  );
};

export function Dot() {
  return <div className="rounded w-2 h-2 bg-red-500"></div>;
}