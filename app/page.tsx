import Image from "next/image";
import Hero from "../components/Hero.tsx";
import AboutSection from "../components/AboutSection.tsx";

export default function Home() {
  return (
    <>
      <Hero />
     <AboutSection /> 
      <h1>Hello, Next.js!</h1>
    </>
  );
}

