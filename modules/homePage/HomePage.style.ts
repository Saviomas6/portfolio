import { url } from "inspector";
import styled, { keyframes } from "styled-components";
import { Button } from "../../styles/globalStyles";

const effect = keyframes`
  0% {
    color: #fff;
  }
  50%{
    color: #ab3b61;
  }
  100% {
    color: #fff;
  }
`;

export const HomePageMainLayout = styled.div<any>`
  min-height: ${(props) => props.height};
  width: 100%;
  background-image: url(${({ bgImage }) => bgImage.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HomePageBackGroundLayout = styled.div<any>`
  min-height: ${(props) => props.height};
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
`;

export const HomePageMainContainer = styled.div<any>`
  min-height: 300px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 940px) {
    grid-template-columns: 1fr;
  }
`;

export const HomePageLeftContainer = styled.div<any>`
  padding: 20px;
  @media screen and (max-width: 1024px) {
    padding: 20px 0;
  }
`;

export const HomePageRightContainer = styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LottieContainer = styled.div`
  @media screen and (max-width: 1400px) {
    height: 400px;
    width: 400px;
  }
  @media screen and (max-width: 940px) {
    height: 100%;
    width: 100%;
  }
`;

export const NameHeading = styled.div`
  font-size: 30px;
  font-family: "Roboto700";
  color: #fff;
  margin: 30px 0;
  @media screen and (max-width: 1400px) {
    font-size: 20px;
  }
  @media screen and (max-width: 940px) {
    margin: 15px 0;
    font-size: 18px;
  }
`;

export const JobTitleHeading = styled.div`
  font-size: 40px;
  font-family: "Roboto700";
  color: #fff;
  margin: 30px 0;
  animation: ${effect} 2s linear infinite;
  @media screen and (max-width: 1400px) {
    font-size: 30px;
  }
  @media screen and (max-width: 940px) {
    margin: 15px 0;
    font-size: 24px;
  }
`;

export const Description = styled.div`
  font-size: 18px;
  font-family: "Roboto500";
  color: #fff;
  text-align: justify;
  margin: 30px 0;
  line-height: 25px;
  @media screen and (max-width: 1400px) {
    font-size: 16px;
  }
  @media screen and (max-width: 940px) {
    margin: 15px 0;
    font-size: 14px;
  }
`;

export const ButtonWrapper = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 940px) {
    height: 100px;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export const ProjectButton = styled(Button)`
  margin-right: 25px;
  @media screen and (max-width: 940px) {
    margin-right: 0px;
  }
`;
