import { device } from '@/styles/global.styles';
import styled from 'styled-components';

const AssetsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #ffffff;
  padding-top: 80px;
  padding-bottom: 80px;
`;

const ColumnReverse = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media ${device.tablet} {
    padding-top: 0;
  }
`;

const AssetsGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 43px;
  margin-top: 64px;
  width: 87%;
  gap: 34px;
  margin-bottom: 50px;
  /* width: 328px; */

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
    width: 90%;
    justify-items: center;
    margin-top: 100px;
    align-items: stretch;
  }

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 1fr;
    width: 90%;
    justify-items: center;
    margin-top: 100px;
    align-items: stretch;
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

export {
  AssetsContainer,
  ColumnReverse,
  AssetsGridContainer,
  SectionTagLine,
  SectionDescriptorLine,
};
