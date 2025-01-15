"use client";
import React from 'react';
import Image from 'next/image';
import book from '../assets/book.png'
import pc from '../assets/pc.png'
import finance from '../assets/finance.png'
import card from '../assets/card.png'

const About = () => {
    return (
        <div className='max-w-[1200px] lg:mx-auto my-[50px] ' id='about'>

            <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4'>About <span className='text-orange-400'>Me</span></h1>

            <div className='grid grid-cols-8 gap-6 place-items-center'>

                <div className='w-full col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20  rounded-xl overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                    <div className='flex flex-row p-6'>
                        <Image src={book} alt='book' className='h-[130px] w-auto mx-auto' />
                        <div className='flex flex-col justify-center mx-5'>
                            <h2 className='text-2xl font-bold text-white/80'>EDUCATION</h2>
                            <p className='text-lg text-white/70 mt-2' >I am currently studying my degree in systems engineering at the University of Nariño, I am in the 9th semester.</p>
                        </div>
                    </div>

                </div>

                <div className='w-full col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                    <div className='flex flex-row p-6'>
                        <Image src={pc} alt='book' className='h-[130px] w-auto mx-auto' />
                        <div className='flex flex-col justify-center mx-5'>
                            <h2 className='text-2xl font-bold text-white/80'>GOAL</h2>
                            <p className='text-lg text-white/70 mt-2' >My goal is to become a Full Stack Developer.</p>
                        </div>
                    </div>


                </div>
                <div className='w-full col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                    <div className='flex flex-row p-6'>
                        <Image src={card} alt='book' className='h-[130px] w-auto mx-auto' />
                        <div className='flex flex-col justify-center mx-5'>
                            <h2 className='text-2xl font-bold text-white/80'>LEARNING</h2>
                            <p className='text-lg text-white/70 mt-2' >I am currently learning new technologies such as Go or NextJs</p>
                        </div>
                    </div>


                </div>
                <div className='w-full col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                    <div className='flex flex-row p-6'>
                        <Image src={finance} alt='book' className='h-[130px] w-auto mx-auto' />
                        <div className='flex flex-col justify-center mx-5'>
                            <h2 className='text-2xl font-bold text-white/80'>INTERSHIPE</h2>
                            <p className='text-lg text-white/70 mt-2' >I would love to participate and collaborate in internships, I'm sure you won't regret it.</p>
                        </div>
                    </div>


                </div>

            </div>


        </div>
    )
}

export default About