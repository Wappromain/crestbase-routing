import { device } from '@/styles/global.styles';
import styled from 'styled-components';

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #ffffff;
  padding: 127px 0 0 0;
  justify-content: center;
  align-items: center;
`;

const HeroOrientationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const HeroLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 0 6%;
  @media ${device.laptop} {
    padding: 0 0 0 6%;
    width: 76%;
  }
`;

const HeroMainTextStart = styled.span`
  font-family: 'Merriweather';
  font-size: calc(1.2rem + 3.5vw);
  font-weight: 900;
  line-height: calc(47px + 1.2vw);
  letter-spacing: 0px;
  text-align: left;
  color: #3d79ef;
  @media ${device.laptop} {
    font-size: calc(1.3rem + 3.5vw);
    font-weight: 900;
    line-height: calc(45px + 3.5vw);
  }
`;

const HeroMainText = styled.p`
  font-family: 'Merriweather';
  font-size: calc(1.2rem + 3.5vw);
  font-weight: 900;
  line-height: calc(35px + 3vw);
  letter-spacing: 0px;
  text-align: left;
  color: #262c55;

  @media ${device.laptop} {
    font-size: calc(1.3rem + 3.5vw);
    font-weight: 900;
    line-height: calc(45px + 3.5vw);
  }
`;

const HeroSubText = styled.p`
  font-family: 'DM Sans';
  font-size: calc(12px + 1vw);
  font-weight: 400;
  line-height: calc(20px + 1vw);
  letter-spacing: 0em;
  text-align: left;
  color: #4f4f4f;
  padding-top: 3%;
  width: 90%;
  @media ${device.tablet} {
    font-size: 22px;
    font-weight: 400;
    line-height: 40px;
  }
`;

const HeroDownloadButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem 6% 0% 0%;
  gap: 15px;
  width: fit-content;
`;

const AppStoreButton = styled.img`
  width: 52%;
  height: 100%;
  max-width: 129px;
  @media ${device.mobileM} {
    max-width: 146px;
  }

  @media ${device.tablet} {
    max-width: 167px;
  }
`;

const PlayStoreButton = styled.img`
  width: 50%;
  height: 100%;
  max-width: 122px;
  @media ${device.mobileM} {
    max-width: 140px;
  }
  @media ${device.tablet} {
    max-width: 160px;
  }
`;

const HeroRightContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: -35%;
  justify-content: center;
  @media ${device.tablet} {
    width: 100%;
    margin: 0;
    margin-top: -22%;
    margin-right: -19%;
    margin-bottom: -10%;
  }
  @media ${device.laptop} {
    width: 70%;
    margin-top: -8%;
    margin-bottom: -17%;
  }
`;

const HeroPhoneImage = styled.img`
  width: 100%;

  @media ${device.tablet} {
    content: url('/images/tablet-hero-phone-image.svg');
    width: 100%;
  }
  @media ${device.laptop} {
    margin-left: -14% !important;
    content: url('/images/desktop-phone-hero-image.svg');
  }
`;

export {
  HeroContainer,
  HeroOrientationContainer,
  HeroLeftContainer,
  HeroMainTextStart,
  HeroMainText,
  HeroSubText,
  HeroDownloadButtons,
  AppStoreButton,
  PlayStoreButton,
  HeroRightContainer,
  HeroPhoneImage,
};
