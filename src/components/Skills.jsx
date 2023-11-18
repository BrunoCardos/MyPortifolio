import React from 'react'
import { SectionWrapper } from '../hoc'

import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { styles } from '../styles'

const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Angular",
    "Node.js",
    "Python",
    "Git",
    "Tailwind",
    "Redux",
    "GraphQL",
    "MySQL",
    "Express",
    "Nest.js",
    "Python",
    "Material UI",
    "Framer Motion",
    "MongoDB",
];

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },  
    }),
}

function Skills() {
    return (

        <section className='flex flex-col align-center justify-center m-auto w-[53rem] text-center'>

            <div className='text-left mb-[3rem]'>
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>What i know</p>
                    <h2 className={styles.sectionHeadText}>Skills.</h2> 
                </motion.div>
            </div>

            <ul className='flex flex-wrap justify-center gap-2 text-lg'>
                {skillsData.map((skill, index) => (
                    <motion.li
                        className='bg-tertiary border-[green-pink-gradient] text-[15px] rounded-xl px-5 py-3 mb-1'
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={index}
                    >
                        {skill}
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}

export default SectionWrapper(Skills, "skills")