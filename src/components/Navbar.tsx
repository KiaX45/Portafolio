"use client"
import Link from "next/link"
import React, { useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { motion } from "framer-motion"
import { title } from "process"
import { div, li, nav } from "framer-motion/client"
import { MdOpacity } from "react-icons/md"

const navLinks = [
    { title: "About", path: "about" },
    { title: "Portafolio", path: "portfolio" },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const togleNav = () => {
        setIsOpen(!isOpen)
    }

    const closeNav = () => {
        setIsOpen(false)
    }

    const menuVariants = {
        open: {
            x:0,
            opacity: 7,
            transition: {
                type: 'spring',
                stiffness : 20,
                damping: 5,
            }
        },
        closed:{
            x:'-100%',
            opacity: 0,
            transition: {
                type: 'spring',
                stiffness : 10,
                damping:5,
                
            }
        }
    }


    return (
        <div className="text-white/70 pt-6 overflow-x-hidden">
            <div className="hidden md:flex items-center px-4 py-2 mx-auto max-w-[400px]">
                <ul className="flex flex-row p-4 space-x-8">
                    {navLinks.map((link, index) => {
                        return (
                        <li key={index}>
                            <Link href={link.path} >{link.title}</Link>
                        </li>
                        )
                    })}

                    <li>
                        <a href="#contact" className="group">
                            <h1 className="text-lg font-bold cursor-pointer">Contact me</h1>
                            <div className="relative">
                                <div className="absolute w-2/3 h-1 transition-all duration-300 ease-out bg-orange-800 rounded-full group-hover:w-full">

                                </div>

                                <div className=" mt-1 absolute w-1/3 h-1 transition-all duration-300 ease-out bg-orange-600 rounded-full group-hover:w-full">

                                </div>
                            </div>    
                        </a>    
                    </li>    

                </ul>
            </div>
            <div onClick={togleNav} className="md:hidden absolute top-5 right-5 border rounded text-white/70 border-white/70 p-2 z-50">
                    {isOpen ? <AiOutlineClose size={30} />: <AiOutlineMenu size={30}/>}
            </div>        

            <motion.div
                initial={false}
                animate={isOpen ? 'open': 'closed'}
                variants={menuVariants}
                className="fixed left-0 top-0 w-full z-40 bg-black/90 h-screen p-8"
            >
                <ul className="md:hidden text-4xl font-semibold my-24 text-center space-y-4">
                    {navLinks.map((link, index) => {
                        return(
                            <li key={index}>
                                <Link href={link.path} onClick={closeNav}>
                                        {link.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>

            </motion.div>

        </div>
    )
}

export default Navbar

