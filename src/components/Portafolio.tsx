'use client';
import React from 'react'
import { motion } from "framer-motion"
import chefImage from "../assets/chef.png";
import apple from "../assets/Apple.png";
import assembly from "../assets/Assembly.png";
import Image from 'next/image';


interface Project {
  title: string;
  description: string;
  devStack: string;
  github: string;
  link: string;
  img: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const Projects: Project[] = [
  {
    title: "E-commerce Store",
    description: "An online store built with Django",
    devStack: "Django, Postgres, JavaScript",
    github: "https://github.com/KiaX45/appleUdenar",
    link: "https://appleudenar-1.onrender.com/",
    img: apple,
  },
  {
    title: "Recipe Ingredients App",
    description: "A React application that allows users to: Add your own ingredients to a list. Request a recipe with the ingredients listed.",
    devStack: "React, Css, JavaScript",
    github: "https://github.com/KiaX45/Chef",
    link: "https://cheffai.netlify.app/",
    img: chefImage,
  },
  {
    title: "Assembly end Game",
    description: "A fun word guessing game that allows users to Click on the buttons to try to guess the secret word.",
    devStack: "React, TailwindCSS, TypeScript",
    github: "https://github.com",
    link: "https://github.com",
    img: assembly,
  },

]

const Portafolio = () => {
  return (
    <div className='text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-40 my-20 ' id="portafolio ">
        <div className='max-w-[1200px] mx-auto space-y-24 '>
            {Projects.map((project,index) => {
                return(
                    <motion.div key={index} initial={{opacity:5, y:75 }} whileInView={{opacity:1, y:0}}
                    viewport={{once: true}} 
                    transition={{duration: 1.5, delay:0.25}}
                    className={`flex ${index % 2 === 0 ? 'flex-col-reverse md:flex-row-reverse gap-12': 'flex-col md:flex-row' } md:mx-20` }>

                        <div className={`space-y-2 max-w-[400px] mt-5 ${index%2 == 0 ? 'mr-5': 'ml-5'}` }>
                            <h2 className='text-5xl text-orange-400'>{`Project ${index+ 1}`}</h2>
                            <h2 className='text-7xl my-4 text-white/70 '>{project.title}</h2>
                            <p className=' text-lg break-words pr-4 text-white/70 py-4' >{project.description}</p>
                            <p className='text-lg  text-blue-400'>{project.devStack}</p>
                            <div className='w-64 h-[1px] bg-gray-400 flex space-x-4 justify-center items-center text-[20px] text-green-600 '>
                                <a className='mt-10' href={project.github}>Github</a>
                                <a className='mt-10' href={project.link}>Link Proyecto</a>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center items-center '>
                            <Image src={project.img} alt={project.title} className='rounded-xl mt-5' />
                        </div>

                    </motion.div>
                )
            })}
        </div>
    </div>
  )
}

export default Portafolio