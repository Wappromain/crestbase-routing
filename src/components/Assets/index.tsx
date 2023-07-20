import React from 'react';
import GridCard from './GridCards';
import {
  AssetsContainer,
  AssetsGridContainer,
  SectionTagLine,
  SectionDescriptorLine,
  ColumnReverse,
} from './Assets.styled';
import DownloadGlassContainer from './DownloadGlassContainer';

const Assets = () => {
  return (
    <AssetsContainer>
      <ColumnReverse>
        <SectionTagLine>Assets Categories</SectionTagLine>
        <SectionDescriptorLine>
          Our carefully selected range of assets that suits your real estate needs
        </SectionDescriptorLine>
        <AssetsGridContainer>
          <GridCard
            iconSrc='/images/apartments.jpg'
            header='Apartments'
            message='Our apartment are vetted and in good condition as posted by the real estate company.'
          />
          <GridCard
            iconSrc='/images/lands.jpg'
            header='Lands'
            message='Lands with with all needed documentation and carefully selected for you.'
          />
          <GridCard
            iconSrc='/images/properties.jpg'
            header='Properties'
            message='Our properties are vetted and in good condition as posted by the real estate company.'
          />
          <GridCard
            iconSrc='/images/event-halls.jpg'
            header='Event Halls'
            message='Event halls that suit your needs and has all the necessary sections for your great day.'
          />
        </AssetsGridContainer>
      </ColumnReverse>
      <DownloadGlassContainer />
    </AssetsContainer>
  );
};

export default Assets;
