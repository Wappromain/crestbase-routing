import styled, { css } from 'styled-components';

interface StyleProps {
  isactive?: boolean;
}

const AccordionDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const AccordionCards = styled.div`
  box-sizing: border-box;

  width: 100%;
  /* height: 400px; */

  background: #ffffff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AccordionCardsLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
`;

const AccordionTextContainer = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  background-color: rgba(61, 121, 239, 0.06);
  border-radius: 8px;
  /* ${({ isactive }) =>
    isactive &&
    css`
      max-height: 500px;
      transition: max-height 1s ease-in;
      transition-delay: 0s;
    `} */
`;

const AccordionQuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const AccordionTextQuestion = styled.h3`
  font-family: 'DM Sans';
  font-size: 16px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0px;
  text-align: left;
  color: #4f4f4f;
  cursor: pointer;
  width: 100%;
  -webkit-tap-highlight-color: transparent;
`;

const AccordionTextAnswer = styled.p`
  font-family: 'DM Sans';
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;

  color: #4f4f4f;
  padding-top: 32px;
`;

export {
  AccordionDiv,
  AccordionCards,
  AccordionCardsLayout,
  AccordionTextContainer,
  AccordionQuestionContainer,
  AccordionTextQuestion,
  AccordionTextAnswer,
};
