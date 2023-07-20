import React from 'react';
import {
  GridCards,
  GridCardsLayout,
  CardValueBox,
  CardIcon,
  CardText,
  CardTextHeader,
  CardTextMessage,
} from './GridCards.styled';

interface BenefitCardProps {
  iconSrc: string;
  header: string;
  message?: string;
}

const GridCard: React.FC<BenefitCardProps> = ({ iconSrc, header, message }) => {
  return (
    <GridCards>
      <GridCardsLayout>
        <CardValueBox>
          <CardIcon src={iconSrc} alt='' width={170} height={154} />
          <CardText>
            <CardTextHeader>{header}</CardTextHeader>
            <CardTextMessage>{message}</CardTextMessage>
          </CardText>
        </CardValueBox>
      </GridCardsLayout>
    </GridCards>
  );
};

export default GridCard;
