import { Dot } from "./About";
import { Programcard } from "./Programcard";


export const Programs = () => {
  return (
    <div id="programs" className="px-3 sm:px-6 py-5 sm:py-10 sm:min-h-[100vh]">
      <div className="flex flex-col items-center">
        {/* Header */}
        <div className="flex items-center space-x-2 mb-2">
          <Dot />
          <div className="text-sm font-medium font-cantata">PROGRAMS WE PROVIDE</div>
        </div>

        {/* Title */}
        <div className="text-2xl sm:text-3xl font-bold pb-10 text-center max-w-4xl font-domine">
          Personalized Learning Solutions & One-on-One Academic Excellence
        </div>

        {/* Grid of Program Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-7xl">
         <Programcard
            label="Academic Tuitions"
            descs={[
              "KG to 12th (All subjects & boards)",
              "College & PG: BA, BSc, BCom, MA, MSc, MCom",
              "B.Tech – All branches",
              "Medical & Paramedical: Nursing, BPT, Pharmacy",
              "NIOS Coaching – 10th & 12th",
            ]}
          /> 

         <Programcard
            label="Entrance Exam Coaching"
            descs={[
              "NEET & JEE – One-on-one mentoring",
              "CUET – Crash & foundation programs",
              "UGC/CSIR NET – Expert test prep",
            ]}
          />

          <Programcard
            label="Skill Development Programs"
            descs={[
              "Soft Skills – Public speaking, leadership, time mgmt.",
              "AI Foundation – Intro to AI for school students",
              "Spoken Languages – English, Hindi, Malayalam, Arabic",
              "Handwriting & Vedic Maths courses",
              "Foundation: Maths, English, Sanskrit & more",
            ]}
          />

          <Programcard
            label="Creative & Hobby Classes"
            descs={[
              "Art, Dance, Singing, Crafts & more",
              "Little Newton – Hands-on science for kids",
            ]}
          />
          
          <Programcard
            label="Foreign Language Courses"
            descs={["French, Spanish, German, English, Malayalam"]}
          />

          <Programcard
            label="Online Schooling & Kindergarten"
            descs={[
              "Online CBSE & Cambridge up to Grade 7",
              "Hapus Hive – Interactive KG Program",
            ]}
/>
        </div>
      </div>
    </div>
  );
};