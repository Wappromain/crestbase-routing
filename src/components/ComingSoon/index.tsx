import React, { useState } from "react";
import {
  FormEmailDiv,
  FormInput,
  FormSubmit,
  FrameContainer,
  FrameContainerImage,
  ImageContainer,
  MainText,
  RibbonContainers,
  RibbonImages,
  SectionContainer,
  TextContainer,
  TimerText,
  WaitListContainer,
  WaitListForm,
} from "./ComingSoon.styled";
import { GlassContainerImage } from "../Assets/DownloadGlassContainer/DownloadGlassContainer.styled";
import Countdown from "./Timer";
import Image from "next/image";

const ComingSoon = () => {
  const targetDate = new Date("2023-08-16T23:59:59Z");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can perform any action with the email value here, like sending it to a server or handling it in your application.
    console.log("Submitted email:", email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <SectionContainer>
      <FrameContainer>
        {/* <RibbonContainers
          style={{ position: "absolute", right: "80%", top: "71.9%" }}
        >
          <RibbonImages src="/images/waitlist-bottom-ribbons.svg" alt="" />
        </RibbonContainers>
        <RibbonContainers
          style={{ position: "absolute", left: "81.95%", bottom: "50.9%" }}
        >
          <RibbonImages src="/images/waitlist-top-ribbons.svg" alt="" />
        </RibbonContainers> */}
        <WaitListContainer>
          <TextContainer>
            <MainText>
              <span>Launching</span> Soon
            </MainText>
            <Countdown targetDate={targetDate} />
            <WaitListForm onSubmit={handleSubmit}>
              <FormEmailDiv>
                <FormInput
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                />
              </FormEmailDiv>
              <FormSubmit type="submit">Join our waiting list</FormSubmit>
            </WaitListForm>
          </TextContainer>
          <ImageContainer>
            <FrameContainerImage src="/images/glass-container-image.png" />
          </ImageContainer>
        </WaitListContainer>
      </FrameContainer>
    </SectionContainer>
  );
};

export default ComingSoon;
