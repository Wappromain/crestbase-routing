import { device } from '@/styles/global.styles';
import styled from 'styled-components';

const HowItWorksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #ffffff;
  padding-top: 80px;
  padding-bottom: 80px;
`;

const HowItWorksGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 43px;
  margin-top: 64px;
  /* width: 328px; */
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 90%;
    justify-items: center;
    margin-top: 40px;
  }
`;

const SectionTagLine = styled.p`
  font-family: 'Merriweather';
  font-size: 22px;
  font-weight: 900;
  line-height: 36px;
  letter-spacing: 0px;
  text-align: left;
  color: #262c55;
  width: 90%;
  padding: 0% 3%;
  @media ${device.tablet} {
    font-size: 28px;
    font-weight: 900;
    line-height: 52px;
    text-align: center;
  }
`;

export { HowItWorksContainer, HowItWorksGridContainer, SectionTagLine };
