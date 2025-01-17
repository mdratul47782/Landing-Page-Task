import ClientStories from "@/components/ClientStories";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/NavBar";
import OnzeDroom from "@/components/OnzeDroom";
import ProjectsSection from "@/components/ProjectsSection";
import WhatWeDone from "@/components/WhatWeDone";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <Navbar/>
   <HeroSection/>
   <WhatWeDone/>
   <OnzeDroom/>
   <ProjectsSection/>
   <ClientStories/>
   <ContactSection/>
   <Footer/>
   </>
  );
}
