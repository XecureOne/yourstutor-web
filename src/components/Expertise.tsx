import { Dot } from "./About"
import { ExpertComponent } from "./ExpertComponent"
export const Expertise = ()=>{
    return <div className="h-screen bg-gray-100 ">
            <div className="flex flex-col p-10 ">
                <div className="flex">
                    <div className="flex items-center"><Dot></Dot></div>
                    <div className="pl-1">WHY CHOOSE YOURSTUTOR</div>
                </div>
                    
                <div className="text-3xl font-bold pb-15">Personalized Learning Solutions & One-on-One Academic Excellence</div>
                <div className="flex overflow-x-scroll no-scrollbar justify-between">
                    <ExpertComponent title="KG to PG Tuitions" label="All classess, all subjects, all syllabus from Kindergarten to Post-Graduation "></ExpertComponent>
                    <ExpertComponent title="Expert, Verified Tutors" label="Handpicked tutors with strong subject knowledge and teaching experience."></ExpertComponent>
                    <ExpertComponent title="The title of the expert topic" label="some demo description about the company and the goals"></ExpertComponent>
                    <ExpertComponent title="The title of the expert topic" label="some demo description about the company and the goals"></ExpertComponent>
                    <ExpertComponent title="The title of the expert topic" label="some demo description about the company and the goals"></ExpertComponent>
                    <ExpertComponent title="The title of the expert topic" label="some demo description about the company and the goals"></ExpertComponent>
                    <ExpertComponent title="The title of the expert topic" label="some demo description about the company and the goals"></ExpertComponent>
                    <ExpertComponent title="The title of the expert topic" label="some demo description about the company and the goals"></ExpertComponent>
                    <ExpertComponent title="The title of the expert topic" label="some demo description about the company and the goals"></ExpertComponent>

                </div>
            </div>
            
            
            
        </div>
}