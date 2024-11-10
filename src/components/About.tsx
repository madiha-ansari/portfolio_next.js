import React from "react";
import Image from "next/image";
import book from "../asserts/book.png";
import pc from "../asserts/pc.png";
import card from "../asserts/card.png";
import finance from "../asserts/finance.png";

const About = () => {
  return (
    
    
    
      <div className="max-w-[1200px] mx-auto" id="about">

      <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4">
        About <span className="text-blue-500">Me</span>
      </h1>

        
        <div className="px-6 md:p-0 grid md:grid-cols-8 gap-6 place-items-center">
          <div className="w-full md:col-span-5 relative bg-sky-500 backdrop-blur-lg border border-green-600 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
            <div className="flex flex-row p-6">
              <Image src={book} alt="book" className="w-auto h-[130px]" />
              <div className="flex flex-col mt-4">
                <h2 className="text-2xl font-extrabold text-black">Education</h2>
                <p className="text-lg text-black mt-2">
                "I began my educational journey in my village, where I completed primary and middle school. Afterward, I pursued my high school education and passed with good marks. I then enrolled in college for my intermediate studies, successfully completing my 12th grade. Currently, I am pursuing a B.Sc. (Part 1)."
                </p>
              </div>
            </div> 
          </div>
      
           <div className="w-full md:col-span-3 relative bg-purple-900 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
            <div className="flex flex-row p-6">
              <Image src={pc} alt="pc" className="w-auto h-[130px]" />
              <div className="flex flex-col mt-4">
                <h2 className="text-2xl font-extrabold text-green-400">My Leptop</h2>
                <p className="text-lg text-white mt-2">"My laptop is my essential companion for creativity and productivity. Its sleek design and fast performance enable seamless coding, designing, and multitasking. With it, I’ve built projects that have elevated my skills and expanded my development journey, helping me explore new possibilities."</p>
              </div>
            </div>
          </div>
      
          <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>

           <div className="flex flex-row p-6">
              <Image src={card} alt="card" className="w-auto h-[130px]" />
              <div className="flex flex-col mt-4">
                <h2 className="text-2xl font-bold text-white/80">Expirence</h2>
                <p className="text-lg text-white/70 mt-2">"I have built over 15+ projects as a front-end developer, mastering HTML, CSS, and JavaScript NEXT JS TAILWIND Each project has helped refine my skills, and my passion for learning has now led me to explore AI"</p>
              </div>
            </div>
          </div>
          
      
          <div className="w-full md:col-span-5 relative bg-green-600 backdrop-blur-lg border border-red-600 rounded-xl overflow-hidden">
            <div className="flex flex-row p-6">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
              <Image src={finance} alt="finance" className="w-auto h-[130px]" />
              <div className="flex flex-col mt-4">
                <h2 className="text-2xl font-extrabold text-black">Finance</h2>
                <p className="text-lg text-black mt-2">"I manage my finances responsibly, balancing my education and personal expenses. By budgeting carefully, I ensure that I can invest in my learning and development while covering my essential needs."
                </p>
              </div>
            </div>
          </div> 
      
        </div>
      </div>
    );
};

export default About;
