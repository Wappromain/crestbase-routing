import React from 'react';
import GridCard from './GridCards';
import { HowItWorksContainer, HowItWorksGridContainer, SectionTagLine } from './HowItWorks.styled';

const HowItWorks = () => {
  return (
    <HowItWorksContainer>
      <SectionTagLine>How it Works</SectionTagLine>
      <HowItWorksGridContainer>
        <GridCard
          iconSrc='/images/how-it-works-house.png'
          header='Search For Assets'
          message='Search for assets in your preferred location, chat or call the company to negotiate for the best price'
        />
        <GridCard
          iconSrc='/images/how-it-works-money.png'
          header='Make Payment'
          message='Make payment seamlessly through our different payment methods which include card payment, bank transfer.'
        />
        <GridCard
          iconSrc='/images/how-it-works-document.png'
          header='Sign Document'
          message='After making payment proceed to electronically sign or download all document.'
        />
      </HowItWorksGridContainer>
    </HowItWorksContainer>
  );
};

export default HowItWorks;
