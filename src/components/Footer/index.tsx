import React from 'react';
import {
  CrestbaseInfoContainer,
  DownloadButtons,
  FooterContainer,
  FooterDownloadContainerText,
  FooterDownloadContainer,
  LinkChild,
  LinkHeader,
  LinksContainer,
  OrientationContainer,
  OtherLinksContainer,
  AppStoreButton,
  PlayStoreButton,
  FooterImage,
  FooterAddress,
  FooterEmail,
  FooterCopyrightContainer,
  CopyrightText,
  ImageLink,
  PolicyContainer,
} from './Footer.styled';

import { BsDot } from 'react-icons/bs';

const index = () => {
  return (
    <FooterContainer>
      <OrientationContainer>
        <CrestbaseInfoContainer>
          <FooterImage src='/images/crestbase-logo-footer.svg' />
        </CrestbaseInfoContainer>
        <OtherLinksContainer>
          <LinksContainer>
            <ImageLink src='/images/twitter-link.svg' />
            <ImageLink src='/images/facebook-link.svg' />
            <ImageLink src='/images/instagram-link.svg' />{' '}
            <ImageLink src='/images/LinkedIn-link.svg' />
          </LinksContainer>
        </OtherLinksContainer>
      </OrientationContainer>
      <FooterCopyrightContainer>
        <PolicyContainer>
          <LinkChild>Terms of Use</LinkChild>
          <BsDot size={17} color='#262C55' />
          <LinkChild>Privacy Policy</LinkChild>
        </PolicyContainer>
        <CopyrightText>Copyright @Crestbase, 2023</CopyrightText>
      </FooterCopyrightContainer>
    </FooterContainer>
  );
};

export default index;
