import Image from "next/image";
import styled from "styled-components";
export const AboutMainLayout = styled.div<any>`
  min-height: ${(props) => props.height};
  width: 100%;
`;

export const AboutMainGridWrapper = styled.div`
  min-height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin: 20px 0px;
  padding: 30px;
  @media screen and (max-width: 1120px) {
    grid-template-columns: 1fr 2fr;
  }
  @media screen and (max-width: 970px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;
export const AboutLeftGridWrapper = styled.div`
  padding: 25px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;

export const AboutLeftImageContainer = styled.div`
  padding: 10px;
  background-color: rgb(171, 59, 97);
  height: 400px;
  width: 400px;
  border-radius: 50%;
  @media screen and (max-width: 1120px) {
    height: 300px;
    width: 300px;
  }
  @media screen and (max-width: 480px) {
    height: 200px;
    width: 200px;
  }
  @media screen and (max-width: 350px) {
    height: 160px;
    width: 160px;
  }
`;
export const AboutProfileImage = styled(Image)`
  height: 100%;
  width: 100%;
  position: relative;
  border-radius: 50%;
`;

export const AboutRightGridWrapper = styled.div`
  background-color: rgb(36, 36, 36);
  border-radius: 10px;
  padding: 25px;
`;

export const AboutHeading = styled.div`
  font-size: 40px;
  font-family: Roboto700;
  color: rgb(255, 255, 255);
  text-align: center;
  @media screen and (max-width: 1280px) {
    font-size: 30px;
  }
  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
  @media screen and (max-width: 350px) {
    font-size: 21px;
  }
`;
export const AboutSubHeading = styled.div`
  font-size: 25px;
  font-family: Roboto700;
  color: rgb(255, 255, 255);
  text-align: center;
  margin: 10px 0px;
  @media screen and (max-width: 1280px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
  @media screen and (max-width: 350px) {
    font-size: 16px;
  }
`;

export const AboutDescription = styled.div`
  font-size: 18px;
  font-family: Roboto400;
  color: rgb(255, 255, 255);
  line-height: 25px;
  text-align: justify;
  @media screen and (max-width: 1280px) {
    font-size: 16px;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
  @media screen and (max-width: 350px) {
    font-size: 12px;
  }
`;
