import React, { FC } from 'react';
import {
  AppDownloadLink,
  HeaderLogo,
  MobileHeaderMenuIcon,
  SidebarContent,
  SidebarDownloadLink,
  SidebarHeader,
  SidebarLinks,
  SidebarMenu,
} from './Header.styled';
import { AiOutlineClose } from 'react-icons/ai';

interface SidebarProps {
  isSidebarOpen: boolean;
  setSidebarOpen: (isOpen: boolean) => void;
  howItWorksRef: React.RefObject<HTMLDivElement>;
  whatWeOfferRef: React.RefObject<HTMLDivElement>;
  faqsRef: React.RefObject<HTMLDivElement>;
  assetsRef: React.RefObject<HTMLDivElement>;
}

const SidebarNav: FC<SidebarProps> = ({
  isSidebarOpen,
  setSidebarOpen,
  howItWorksRef,
  whatWeOfferRef,
  faqsRef,
  assetsRef,
}) => {
  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleScrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      handleSidebarToggle();
    }
  };

  return (
    <SidebarMenu className={isSidebarOpen ? 'open' : ''}>
      <SidebarHeader>
        <a href='/'>
          <HeaderLogo src='/images/crestbase-logo-footer.svg' alt='' />
        </a>
        <MobileHeaderMenuIcon onClick={handleSidebarToggle}>
          <AiOutlineClose size={20} color='#262C55' strokeWidth={0.7} />
        </MobileHeaderMenuIcon>
      </SidebarHeader>
      <SidebarContent>
        <SidebarLinks onClick={() => handleScrollToSection(howItWorksRef)}>
          How it works
        </SidebarLinks>
        <SidebarLinks onClick={() => handleScrollToSection(whatWeOfferRef)}>
          What we offer
        </SidebarLinks>
        <SidebarLinks onClick={() => handleScrollToSection(assetsRef)}>Assets</SidebarLinks>
        <SidebarLinks onClick={() => handleScrollToSection(faqsRef)}>FAQs</SidebarLinks>
        <SidebarDownloadLink>
          <AppDownloadLink src='/images/joint-download-button.svg' />
        </SidebarDownloadLink>
      </SidebarContent>
    </SidebarMenu>
  );
};

export default SidebarNav;
