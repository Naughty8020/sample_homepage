import Image from "next/image";
import Hero from "../components/Hero.tsx";
import AboutSection from "../components/AboutSection.tsx";
import ServicesSection from "../components/ServicesSection.tsx";

export default function Home() {
  return (
    <>
      <Hero />
    <AboutSection /> 
     <ServicesSection /> 
    </>

  );
}

