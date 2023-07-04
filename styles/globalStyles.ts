import Link from "next/link";
import styled, { keyframes } from "styled-components";

const fadeAnimation = keyframes`
0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const rotate = keyframes`
 0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${rotate} 1.5s infinite linear;
`;

export const FadeAnimation = styled.div<any>`
  animation: ${fadeAnimation} 1.5s;
`;

export const Container = styled.div<any>`
  position: relative;
  width: ${(props) => (props.width ? props.width : "100%")};
  padding-right: var(1.5rem, 0.75rem);
  padding-left: var(1.5rem, 0.75rem);
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) {
    max-width: 90%;
  }
  @media (min-width: 768px) {
    max-width: 90%;
  }
  @media (min-width: 992px) {
    max-width: 90%;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Heading = styled.div`
  font-size: 40px;
  width: max-content;
  font-family: "Roboto700";
  color: #fff;
  padding: 10px;
  border-bottom: 3px solid #ab3b61;
  @media screen and (max-width: 640px) {
    font-size: 30px;
    padding: 8px;
    border-bottom: 2px solid #ab3b61;
  }
  @media screen and (max-width: 360px) {
    font-size: 20px;
    padding: 6px;
    border-bottom: 2px solid #ab3b61;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  height: 44px;
  width: 160px;
  outline: none;
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #ab3b61;
  font-family: "Roboto500";
  font-size: 16px;
  cursor: pointer;
  :disabled {
    opacity: 0.5;
  }
  @media screen and (max-width: 640px) {
    height: 38px;
    width: 145px;
    font-size: 14px;
  }
`;

export const BoxContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 640px) {
    padding: 20px 10px;
  }
`;

export const BoxEducation = styled.div`
  margin: 10px 0;
  width: 500px;
  border-radius: 10px;
  padding: 20px;
  background-color: #242424;
  border: 2px solid #ab3b61;
  transition: 0.5s linear;
  :hover {
    transform: scale(1.04);
  }
  @media screen and (max-width: 640px) {
    width: 100%;
    padding: 10px;
    margin: 5px 0;
  }
`;

export const BoxHeadingTitle = styled.div`
  font-size: 20px;
  color: #fff;
  font-family: "Roboto700";
  @media screen and (max-width: 640px) {
    font-size: 14px;
  }
  @media screen and (max-width: 360px) {
    font-size: 12px;
  }
`;
export const BoxSubHeadingTitle = styled.div`
  font-size: 18px;
  color: #fff;
  font-family: "Roboto500";
  margin-top: 20px;
  @media screen and (max-width: 640px) {
    font-size: 14px;
  }
  @media screen and (max-width: 360px) {
    font-size: 10px;
  }
`;
export const YearTitle = styled.div`
  font-size: 16px;
  color: #fff;
  font-family: "Roboto500";
  margin-top: 20px;
  @media screen and (max-width: 640px) {
    font-size: 12px;
  }
  @media screen and (max-width: 360px) {
    font-size: 10px;
  }
`;

export const StyledLink = styled.div`
  text-decoration: none;
`;

export const FormCheckBoxWrapper = styled.div`
  position: relative;
  display: flex;
  margin-right: 15px;
`;
export const FormCheckBoxLabel = styled.label<any>`
  position: absolute;
  top: 0;
  left: 0;
  width: 51px;
  height: 28px;
  border-radius: 15px;
  background: #ab3b61;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 19px;
    height: 19px;
    margin: 5px;
    background: #fff;
    transition: 0.2s;
  }
`;
export const FormCheckBox = styled.input<any>`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 51px;
  height: 28px;
  cursor: pointer;
  &:checked + ${FormCheckBoxLabel} {
    background: ${({ theme }) => theme.brandColor};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 27px;
      transition: 0.3s;
    }
  }
`;
