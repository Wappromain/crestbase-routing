import { device } from '@/styles/global.styles';
import styled from 'styled-components';

const FAQContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #ffffff;
  padding-top: 80px;
  padding-bottom: 80px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SectionTagLine = styled.p`
  font-family: 'Merriweather';
  font-size: 22px;
  font-weight: 900;
  line-height: 36px;
  letter-spacing: 0px;
  text-align: left;
  width: 90%;
  color: #262c55;
  @media ${device.tablet} {
    font-size: 28px;
    font-weight: 900;
    line-height: 52px;
    text-align: center;
  }
`;

const FAQAccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 43px;
  margin-top: 64px;
  width: 90%;
  @media ${device.tablet} {
    width: 70%;
  }
`;

export { FAQContainer, SectionTagLine, FAQAccordionContainer };
