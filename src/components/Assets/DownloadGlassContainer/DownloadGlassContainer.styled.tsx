import { device } from '@/styles/global.styles';
import styled from 'styled-components';

const SectionContainer = styled.div`
  background-color: #ffffff;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 130px;
`;

const GlassContainer = styled.div`
  background: rgba(196, 215, 229, 0.302);
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  box-sizing: border-box;
  padding: 10% 0 0 0;
  gap: 10px;
  @media ${device.tablet} {
    padding: 7% 0 0 0;
    flex-direction: row;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  @media ${device.tablet} {
    width: 50%;
  }
`;

const DownloadText = styled.p`
  font-family: 'DM Sans';
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: #497ded;

  @media ${device.tablet} {
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
  }
`;

const StatisticsText = styled.p`
  font-family: 'Merriweather';
  font-size: 20px;
  font-weight: 900;
  line-height: 30px;
  letter-spacing: 0px;
  text-align: left;
  color: #262c55;
  padding-top: 10px;

  @media ${device.tablet} {
    font-size: 30px;
    font-weight: 900;
    line-height: 46px;
  }
`;

const DownloadButtons = styled.div`
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
  max-width: 167px;
`;

const PlayStoreButton = styled.img`
  width: 50%;
  height: 100%;
  max-width: 160px;
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  padding-top: 19%;
  @media ${device.tablet} {
    width: 40%;
    padding-top: 19%;
  }
  @media ${device.laptop} {
    width: 40%;
    padding-top: 10%;
  }
`;

const GlassContainerImage = styled.img`
  width: auto;
  height: 100%;
  @media ${device.laptop} {
    content: url('/images/desktop-glass-container-image.png');
  }
`;

export {
  SectionContainer,
  GlassContainer,
  ContentContainer,
  TextContainer,
  DownloadText,
  StatisticsText,
  DownloadButtons,
  AppStoreButton,
  PlayStoreButton,
  ImageContainer,
  GlassContainerImage,
};
