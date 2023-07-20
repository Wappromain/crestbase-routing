import { device } from "@/styles/global.styles";
import styled from "styled-components";

const SectionContainer = styled.div`
  background-color: #ffffff;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 130px;
`;

const FrameContainer = styled.div`
  background: rgba(196, 215, 229, 0.302);
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 0.5px solid #3d79ef80;
`;

const WaitListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  box-sizing: border-box;
  padding: 10% 0 0 0;
  gap: 10px;
  align-items: center;
  @media ${device.laptop} {
    padding: 7% 0 0 0;
    flex-direction: row;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  @media ${device.laptop} {
    align-self: flex-start;
    width: 50%;
  }
`;

const MainText = styled.p`
  font-family: "Merriweather";
  font-size: calc(1.3rem + 3vw);
  font-weight: 900;
  line-height: calc(1.8rem + 3vw);
  letter-spacing: 0px;
  text-align: left;
  color: #262c55;
  padding-bottom: 5px;

  > span {
    color: #3d79ef;
  }

  @media ${device.laptop} {
    font-size: 70px;
    font-weight: 900;
    line-height: 88px;
    text-align: left;
  }
`;

const TimerText = styled.p`
  font-family: "DM Sans";
  font-size: 34px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0px;
  text-align: left;

  color: #262c55;
  padding-top: 10px;

  @media ${device.laptop} {
    font-size: 52px;
    line-height: 94px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  padding-top: 19%;
  align-items: center;
  justify-content: center;
  align-self: flex-end;

  @media ${device.laptop} {
    width: 40%;
    padding-top: 10%;
  }
`;

const FrameContainerImage = styled.img`
  width: 100%;
  max-width: 300px;
  @media ${device.laptop} {
    max-width: 700px;
    content: url("/images/desktop-glass-container-image.png");
  }
`;

const Timer = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  font-size: 40px;
  gap: 15px;
  > h4 {
    font-family: "DM Sans";
    font-size: 34px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0px;
    color: #262c55;
  }
  @media ${device.laptop} {
    > h4 {
      font-size: 52px;
      line-height: 85px;
    }
  }
`;

const TimerDesign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > h3 {
    font-family: "DM Sans";
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 0px;
    text-align: center;
    color: #262c55;
  }

  @media ${device.laptop} {
    > h3 {
      font-size: 52px;
      line-height: 94px;
      text-align: left;
    }
  }
`;

const TimerDesignText = styled.p`
  display: flex;
  font-family: "DM Sans";
  font-size: 10px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0em;
  text-align: left;
  justify-content: center;
  align-items: center;
  @media ${device.laptop} {
    font-size: 16px;
    line-height: 18px;
  }
`;

const WaitListForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 80px 0;
  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const FormEmailDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  @media ${device.laptop} {
    flex-direction: row;
    gap: 0;
    padding-bottom: 0;
    width: 45%;
  }
`;

const FormInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: 0.6px solid #0e040480;
  font-family: "DM Sans";
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  padding: 20px 17px;

  @media ${device.laptop} {
    height: 62px;
    font-size: 16px;
    line-height: 24px;
    border-radius: 10px 0px 0px 10px;
  }
`;

const FormSubmit = styled.button`
  width: 100%;
  height: 50px;
  font-family: "DM Sans";
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
  background-color: #3d79ef;
  border-radius: 10px;
  border: 0px;
  color: #ffffff;
  @media ${device.laptop} {
    min-width: fit-content;
    width: 35%;
    height: 62px;
    font-size: 19px;
    padding: 3px;
    line-height: 26px;
    border-radius: 0px 10px 10px 0px;
  }
`;

export {
  SectionContainer,
  FrameContainer,
  WaitListContainer,
  TextContainer,
  MainText,
  TimerText,
  ImageContainer,
  FrameContainerImage,
  Timer,
  TimerDesign,
  TimerDesignText,
  WaitListForm,
  FormEmailDiv,
  FormInput,
  FormSubmit,
};
