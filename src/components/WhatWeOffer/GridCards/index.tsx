import React from 'react';
import {
  GridCards,
  GridCardsLayout,
  CardValueBox,
  CardIcon,
  CardText,
  CardTextHeader,
  CardTextMessage,
  CardIconDiv,
  CardIconDownloadButton,
} from './GridCards.styled';
import { AiOutlineRightCircle } from 'react-icons/ai';

interface GridCardProps {
  iconSrc: string;
  header: string;
  message?: string;
  background: string;
}

const GridCard: React.FC<GridCardProps> = ({ iconSrc, header, message, background }) => {
  return (
    <GridCards style={{ backgroundColor: background }}>
      <GridCardsLayout>
        <CardValueBox>
          <CardText>
            <CardTextHeader>{header}</CardTextHeader>
            <CardTextMessage>{message}</CardTextMessage>
          </CardText>
          <CardIconDiv>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '0 0.7rem 1rem 0.7rem',
              }}
            >
              <CardIconDownloadButton>Download App</CardIconDownloadButton>
              <AiOutlineRightCircle size={15} color='#ffffff' strokeWidth={0.7} />
            </div>
            <div style={{ display: 'flex' }}>
              <CardIcon src={iconSrc} alt='' width={'100%'} height={'100%'} />
            </div>
          </CardIconDiv>
        </CardValueBox>
      </GridCardsLayout>
    </GridCards>
  );
};

export default GridCard;
