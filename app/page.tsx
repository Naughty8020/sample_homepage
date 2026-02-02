import Image from "next/image";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";
import DetailSection from "../components/details/details";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header title="" />

      <Hero />
      <AboutSection />
      <ServicesSection />
      <DetailSection />
      <Footer />
    </>

  );
}

