import { device } from '@/styles/global.styles';
import styled from 'styled-components';

const GridCards = styled.div`
  box-sizing: border-box;
  display: flex;

  width: 100%;
  flex-grow: 1;

  background: #ffffff;
  border-radius: 20px;

  font-weight: 600;
  font-size: 24px;
  line-height: 20px;

  align-items: center;
  justify-content: center;
  height: 100%;
`;

const GridCardsLayout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  gap: 10%;
`;

const CardValueBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 15px;
  gap: 16px;
  width: 100%;
  height: 100%;
`;

const CardIconDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;

  @media ${device.laptop} {
    flex-direction: row;
    align-self: flex-end;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

const CardIcon = styled.img``;

const CardIconDownloadButton = styled.p`
  font-family: 'Merriweather';
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  text-decoration: underline;
  color: #ffffff;
  padding-right: 6px;
  @media ${device.laptop} {
    font-size: 14px;
    line-height: 20px;
  }
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 0px 10px 0;
  gap: 16px;
  height: 100%;
  @media ${device.tablet} {
    width: 60%;
  }
`;

const CardTextHeader = styled.h3`
  font-family: 'Merriweather';
  font-size: 21px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0px;
  text-align: left;
  color: #ffffff;
  padding: 0 0.7rem;
`;

const CardTextMessage = styled.p`
  font-family: 'DM Sans';
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;

  color: #ffffff;
  padding: 0 0.7rem;
`;

export {
  GridCards,
  GridCardsLayout,
  CardValueBox,
  CardIconDiv,
  CardIcon,
  CardIconDownloadButton,
  CardText,
  CardTextHeader,
  CardTextMessage,
};
