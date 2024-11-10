import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import '../components/style.css'
import '../components/footer.css'


import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Portfolio from "@/components/portfolio";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero />
    <About />
   <Portfolio/> 
   < Skills/>
   <Contact/>
   <Footer/>
    </>
  );
}
