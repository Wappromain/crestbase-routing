import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  AppDownloadLink,
  HeaderContainer,
  HeaderLink,
  HeaderLinksContainer,
  HeaderLogo,
  MobileHeaderMenuIcon,
} from "./Header.styled";
import SidebarNav from "./SidebarNav";
import Link from "next/link";

interface MobileHeaderProps {
  howItWorksRef: React.RefObject<HTMLDivElement>;
  whatWeOfferRef: React.RefObject<HTMLDivElement>;
  assetsRef: React.RefObject<HTMLDivElement>;
  faqsRef: React.RefObject<HTMLDivElement>;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({
  assetsRef,
  howItWorksRef,
  whatWeOfferRef,
  faqsRef,
}) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleScrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setSidebarOpen(false); // Close the sidebar after clicking a link
    }
  };

  return (
    <HeaderContainer>
      <Link href="/">
        <HeaderLogo src="/images/crestbase-logo-footer.svg" alt="" />
      </Link>
      <MobileHeaderMenuIcon onClick={handleSidebarToggle}>
        <HiOutlineMenuAlt4 size={40} color="#262C55" strokeWidth={0.7} />
      </MobileHeaderMenuIcon>
      <SidebarNav
        assetsRef={assetsRef}
        howItWorksRef={howItWorksRef}
        whatWeOfferRef={whatWeOfferRef}
        faqsRef={faqsRef}
        isSidebarOpen={isSidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <HeaderLinksContainer>
        <HeaderLink onClick={() => handleScrollToSection(howItWorksRef)}>
          How it works
        </HeaderLink>
        <HeaderLink onClick={() => handleScrollToSection(whatWeOfferRef)}>
          What we offer
        </HeaderLink>
        <HeaderLink onClick={() => handleScrollToSection(assetsRef)}>
          Assets
        </HeaderLink>
        <HeaderLink onClick={() => handleScrollToSection(faqsRef)}>
          FAQs
        </HeaderLink>
        <div>
          <AppDownloadLink src="/images/joint-download-button.svg" />
        </div>
      </HeaderLinksContainer>
    </HeaderContainer>
  );
};

export default MobileHeader;
