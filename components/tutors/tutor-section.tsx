import data from "../../utils/Data/tutor-data"
import TutorCard from "./tutor-card"

export default function Tutors(){
    return (
        <section className="tutor-container w-full px-4 md:px-[20px] lg:px-[120px] py-5 flex flex-col overflow-hidden gap-10 pb-4">

            <div className="tutor-wraper w-full flex justify-center ">   
                <div className="w-[750px] flex flex-col">
                    <h3 className="text-center text-base font-semibold text-[#6941C6]">Our Services</h3>
                    <h1 className="text-center text-[36px]  font-bold font-rem mt-3 ">Meet the Heroes</h1>
                    <p className="text-center text-[20px] text-gray-text font-normal mt-5">On Ed-Circle, instructors from all over the world instruct millions of students. We offer the knowledge and abilities.</p>
                </div>
            </div>

            <div className="tutor-list w-full flex gap-8 flex-wrap justify-center  ">
            {
                data?.map((item,index)=>(
                    <TutorCard key={index} item={item} />
                ))
            }
            </div>
            

        </section>
    )
}