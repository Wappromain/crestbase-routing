import React from "react";
import {
  AppStoreButton,
  ContentContainer,
  DownloadButtons,
  DownloadText,
  GlassContainer,
  GlassContainerImage,
  ImageContainer,
  PlayStoreButton,
  SectionContainer,
  StatisticsText,
  TextContainer,
} from "./DownloadGlassContainer.styled";
import { useRouter } from "next/router";

const DownloadGlassContainer = () => {
  const router = useRouter();
  const handleDownloadLinkClick = () => {
    router.push("/comingsoon"); // Navigate to the specified page
  };
  return (
    <SectionContainer>
      <GlassContainer>
        <ContentContainer>
          <TextContainer>
            <DownloadText>Download The Crestbase App</DownloadText>
            <StatisticsText>
              Join our 200,000+ users acquiring and investing in real estate
            </StatisticsText>
            <DownloadButtons>
              <PlayStoreButton
                onClick={handleDownloadLinkClick}
                src="/icons/play-store-clickable.svg"
              />
              <AppStoreButton
                onClick={handleDownloadLinkClick}
                src="/icons/app-store-clickable.svg"
              />
            </DownloadButtons>
          </TextContainer>
          <ImageContainer>
            <GlassContainerImage src="/images/glass-container-image.png" />
          </ImageContainer>
        </ContentContainer>
      </GlassContainer>
    </SectionContainer>
  );
};

export default DownloadGlassContainer;
