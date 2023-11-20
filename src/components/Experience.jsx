import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import 'react-vertical-timeline-component/style.min.css';
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

import { experiencesData } from "../constants";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img 
        src={experience.icon} 
        alt={experience.company_name} 
        className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold ">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0}}>{experience.company_name}</p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >{point}</li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
      <VerticalTimeline>
                {experiencesData.map((experience, index) => (
                    <VerticalTimelineElement
                        key={index}
                        contentStyle={{ 
                            background: "#1d1836", 
                            color: "#fff" ,
                            boxShadow: "none",
                            border: "none",
                            textAlign: "left",
                            padding: "1.3rem 2rem"
                        }}
                        contentArrowStyle={{ borderRight: "7px solid #232631" }}
                        date={experience.date}
                        icon={experience.icon}
                        iconStyle={{
                            background: "#1d1836",
                            fontSize: "1.5rem",
                        }}
                    >
                        <h3 className='font-semibold capitalize'>{experience.title}</h3>
                        <p className='!font-normal !mt-0 !text-gray-500'>{experience.location}</p>
                        <p className='!mt-1 !font-normal'>{experience.description}</p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
      </div>
    </>
  )
}

//fffffffffffff

export default SectionWrapper(Experience, "work");