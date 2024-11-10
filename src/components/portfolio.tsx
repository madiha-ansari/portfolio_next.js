"use client";
import Image from "next/image";
import {motion} from'framer-motion';
import project from '../asserts/project.jpg';
import proj3 from '../asserts/projects/culculator.jpg'
import proj2 from '../asserts/projects/CLI-ATM.jpg'
import proj4 from '../asserts/projects/number-guassing-game.jpg'

// import proj3 from '../asserts/proj3.png';
// import proj2 from '../asserts/proj2.jpg';
// import proj4 from '../asserts/proj4.jpg';
import { title } from "process";


const projects = [
   
    {
        title:"Cli Culculator",
        desc:"    I developed a powerful CLI calculator that performs quick and accurate calculations right from the command line",
        devStack:"Typescript, Node.js , Javascript",
        src:proj3,
        

   },

    {
        title:"Cli ATM",
        desc:"I’m currently building a CLI ATM, focused on simulating secure and efficient banking transactions directly through the terminal",
        devStack:"NextJs",
        src:proj2,
   },

    {
        title:"Number Guassing Game",
        desc:"      A CLI number guessing game that’s interactive and fun.",
        devStack:"React, Tailwind CSS",
        src:proj4,
   }

]

const Portfolio = () => {
  return (
    <div className="text-white bg-gray-800 from-black  to-[#381a5f] py-18 mt-52" id="portfolio">

<h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold my-12">
        Current<span className="text-blue-500">Projects</span>
      </h1>

        <div className=" px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24">
            {projects.map((project, index)=>(
            <motion.div
            key={index}
            initial={{opacity: 0, y: 75}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.5, delay: 0.25}}
            className={`mt-12 flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse gap-12" : " md:flex-row"} `}
            >
                <div className="space-y-2 max-w-[550px]">
                    <h2 className="text-7xl my-4 text-yellow-400">{`0${index + 1}`}</h2>
                    <h2 className="text-4xl">{project.title}</h2>
                    <p className="text-lg text-white/70 break-words p-4">{project.desc}</p>
                    <p className="text-xl text-yellow-400 font-semibold">{project.devStack}</p>
                    <div className="w-64 h-[1px] bg-gray-400 my-4" >
                      
                    </div>

                </div>


                <div className="flex justify-center items-center">
                   <a href="https://milestome-5-by-jawad-shoukat.vercel.app/"> <Image src={project.src} alt={project.title} className="h-[350px] w-[500px] object-cover border rounded border-gray-700  transition-all duration-500 hover:shadow-[1px_1px_20px_#0ef,1px_1px_40px_#0ef] hover:scale-105" /> </a>
                </div>

            </motion.div>
            ))

            }
            

            </div> 
  
    </div>
  )
}

export default Portfolio
