"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";
import cursor from '../assets/icon1.png'
import lightning from '../assets/icon2.png'
import profile from '../assets/profilepic.png'


const Hero = () => {

    return (

        <div className=" py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]">

            <div className='absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2
                            bg-[radial-gradient(closest-side,#000_80%,#2B1942)]'></div>

            <div className='relative'>
                <div className="text-8xl font-bold text-center">
                    <h1 className='text-[#98B4CE]'>Hi, I am </h1>
                    <h1 className='text-[#E48A57]'>Luis Medina</h1>
                </div>

                <motion.div

                    className='  lg:ml-[20%]  md:ml-[5%] md:absolute  ' drag  >
                    <Image src={cursor} height="190" width="190" alt="cursor" draggable="false" />
                </motion.div>

                <motion.div className='lg:ml-[80%]  md:ml-[85%] md:absolute sm:ml-[60%] xs:ml-[50%]' drag>
                    <Image src={lightning} height="130" width="130" alt="cursor" draggable="false" />
                </motion.div>

                <p className='text-center text-xl max-w-[500px] mx-auto mt-10 text-white/70 '>
                    I am a student currently trying to improve my skills in web development. I am passionate about creating beautiful and functional websites.
                </p>

                <Image src={profile} alt='hero' className='h-auto w-auto mx-auto' />
            </div>


        </div>

    )
}

export default Hero