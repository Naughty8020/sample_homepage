import Image from "next/image";
import Hero from "../components/Hero.tsx";
import AboutSection from "../components/AboutSection.tsx";
import ServicesSection from "../components/ServicesSection.tsx";

export default function Home(): JSX.Element {
  return (
    <>
      <Hero />
    <AboutSection /> 
     <ServicesSection /> 
    </>

  );
}

