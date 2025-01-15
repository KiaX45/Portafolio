import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Portafolio from "@/components/Portafolio";
import Skills from "@/components/Skills";



export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Portafolio/>
      <Skills/>
    </>
   
  );
}
