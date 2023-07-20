import React from 'react';
import {
  HeroContainer,
  HeroMainTextStart,
  HeroMainText,
  HeroSubText,
  HeroDownloadButtons,
  AppStoreButton,
  PlayStoreButton,
  HeroOrientationContainer,
  HeroLeftContainer,
  HeroRightContainer,
  HeroPhoneImage,
} from './HeroSection.styled';

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroOrientationContainer>
        <HeroLeftContainer>
          <div style={{ display: 'flex' }}>
            <HeroMainText>
              <HeroMainTextStart>Endless</HeroMainTextStart> {` `}real estate possibilities for you
            </HeroMainText>
          </div>
          <HeroSubText>
            Rent apartments, buy lands, buy properties, and book event halls easily with no hassle.
          </HeroSubText>
          <HeroDownloadButtons>
            <PlayStoreButton src='/icons/play-store-clickable.svg' />
            <AppStoreButton src='/icons/app-store-clickable.svg' />
          </HeroDownloadButtons>
        </HeroLeftContainer>
        <HeroRightContainer>
          <HeroPhoneImage src='/images/hero-phone-image.svg' />
        </HeroRightContainer>
      </HeroOrientationContainer>
    </HeroContainer>
  );
};

export default HeroSection;
