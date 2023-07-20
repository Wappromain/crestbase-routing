import { device } from '@/styles/global.styles';
import styled from 'styled-components';

const WhatWeOfferContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #f9fbff;
  padding-top: 80px;
  padding-bottom: 80px;
`;

const WhatWeOfferGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 60px;
  width: 90%;
  margin-top: 3rem;
  /* width: 328px; */
  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 90%;
    justify-items: center;
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

const SectionDescriptorLine = styled.p`
  font-family: 'DM Sans';
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
  width: 90%;
  padding: 0% 3%;
  color: #4f4f4f;
  @media ${device.laptop} {
    text-align: center;
  }
`;

export { WhatWeOfferContainer, WhatWeOfferGridContainer, SectionTagLine, SectionDescriptorLine };
