import React from 'react'

import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { textVariant } from "../utils/motion";
import { styles } from "../styles"

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import { experiencesData } from "../constants";

const Experience2 = () => {
    return (
        <section>
            <motion.div variants={textVariant()} className='mb-20'>
                <p className={styles.sectionSubText}>What I have done so far</p>
                <h2 className={styles.sectionHeadText}>Work Experience.</h2>
            </motion.div>

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
        </section>
    )
}

export default SectionWrapper(Experience2, 'experience2');