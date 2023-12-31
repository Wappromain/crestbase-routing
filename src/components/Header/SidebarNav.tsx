import React, { FC } from "react";
import {
  AppDownloadLink,
  HeaderLogo,
  MobileHeaderMenuIcon,
  SidebarContent,
  SidebarDownloadLink,
  SidebarHeader,
  SidebarLinks,
  SidebarMenu,
} from "./Header.styled";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";

interface SidebarProps {
  isSidebarOpen: boolean;
  setSidebarOpen: (isOpen: boolean) => void;
  howItWorksRef: React.RefObject<HTMLDivElement>;
  whatWeOfferRef: React.RefObject<HTMLDivElement>;
  faqsRef: React.RefObject<HTMLDivElement>;
}

const SidebarNav: FC<SidebarProps> = ({
  isSidebarOpen,
  setSidebarOpen,
  howItWorksRef,
  whatWeOfferRef,
  faqsRef,
}) => {
  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleScrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      handleSidebarToggle();
    }
  };

  const router = useRouter();
  const handleDownloadLinkClick = () => {
    router.push("/comingsoon"); // Navigate to the specified page
  };

  return (
    <SidebarMenu className={isSidebarOpen ? "open" : ""}>
      <SidebarHeader>
        <Link href="/">
          <HeaderLogo src="/images/crestbase-logo-footer.svg" alt="" />
        </Link>
        <MobileHeaderMenuIcon onClick={handleSidebarToggle}>
          <AiOutlineClose size={20} color="#262C55" strokeWidth={0.7} />
        </MobileHeaderMenuIcon>
      </SidebarHeader>
      <SidebarContent>
        <SidebarLinks onClick={() => handleScrollToSection(howItWorksRef)}>
          How it works
        </SidebarLinks>
        <SidebarLinks onClick={() => handleScrollToSection(whatWeOfferRef)}>
          What we offer
        </SidebarLinks>
        <SidebarLinks onClick={() => handleScrollToSection(faqsRef)}>
          FAQs
        </SidebarLinks>
        <SidebarDownloadLink>
          <AppDownloadLink
            onClick={handleDownloadLinkClick}
            src="/images/joint-download-button.svg"
          />
        </SidebarDownloadLink>
      </SidebarContent>
    </SidebarMenu>
  );
};

export default SidebarNav;
