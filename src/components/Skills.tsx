import React from 'react'
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiDjango } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaJava } from "react-icons/fa";
import { div } from 'framer-motion/client';

const skillsIconst = [
    { icon: <TbBrandNextjs size={140} />, label: "NextJs" },
    { icon: <SiTypescript size={140} />, label: "TypeScript" },
    { icon: <SiDjango size={140} />, label: "Django" },
    { icon: <FaHtml5 size={140} />, label: "Html5" },
    { icon: <FaCss3Alt size={140} />, label: "Css3" },
    { icon: <FaReact size={140} />, label: "React" },
    { icon: <FaJsSquare size={140} />, label: "JavaScript" },
    { icon: <FaJava size={140} />, label: "Java" },
]

const Skills = () => {
    return (
        <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32'>
            <div className='text-white lg:max-w-[1000] md:max-w-[900px] mx-auto p-8 text-center'>
                <h2 className='text-6xl font-bold mb-4'> What I do </h2>
                <div className='flex flex-wrap justify-center gap-4'>
                    {skillsIconst.map((skill, index) => {
                        return (
                            <div key={index} className='flex flex-col items-center space-y-4 bg-white/10 p-4 rounded-xl'>
                                {skill.icon}
                                <p className='text-2xl mt-2'>{skill.label}</p>
                            </div>
                        )
                    })}
                </div>

            </div>


        </div>
    )
}

export default Skills