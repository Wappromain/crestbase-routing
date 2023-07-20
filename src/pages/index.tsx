import Head from "next/head";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import MobileHeader from "@/components/Header/MobileHeader";
import HowItWorks from "@/components/HowItWorks";
import WhatWeOffer from "@/components/WhatWeOffer";
import Assets from "@/components/Assets";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";
import { useRef } from "react";

const Home: React.FC = () => {
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const whatWeOfferRef = useRef<HTMLDivElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);
  const assetsRef = useRef<HTMLDivElement>(null);

  const handleScrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <MobileHeader
        howItWorksRef={howItWorksRef}
        whatWeOfferRef={whatWeOfferRef}
        assetsRef={assetsRef}
        faqsRef={faqsRef}
      />
      <HeroSection />
      <div ref={howItWorksRef}>
        <HowItWorks />
      </div>
      <div ref={whatWeOfferRef}>
        <WhatWeOffer />
      </div>
      <div ref={assetsRef}>
        <Assets />
      </div>
      <div ref={faqsRef}>
        <FAQs />
      </div>
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
