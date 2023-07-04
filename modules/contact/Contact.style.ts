import { Field } from "formik";
import styled from "styled-components";

export const ContactMainLayout = styled.div<any>`
  min-height: ${(props) => props.height};
  width: 100%;
`;

export const ContactMainContainer = styled.div`
  min-height: 300px;
  margin: 10px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  padding: 30px;
  @media screen and (max-width: 940px) {
    grid-template-columns: 1fr;
    padding: 30px 0px;
  }
`;
export const ContactLeftContainer = styled.div`
  padding: 25px;
  border-radius: 10px;
  background-color: #242424;
  border: 2px solid #ab3b61;
  @media screen and (max-width: 940px) {
    padding: 15px;
  }
  @media screen and (max-width: 640px) {
    padding: 10px;
  }
`;

export const ContactRightContainer = styled.div`
  padding: 25px;
  border-radius: 10px;
  border: 2px solid #ab3b61;
  @media screen and (max-width: 940px) {
    padding: 15px;
  }
  @media screen and (max-width: 640px) {
    padding: 10px;
  }
`;
export const ContactContainerHeading = styled.div`
  font-family: "Roboto700";
  font-size: 30px;
  color: #fff;
  margin: 20px 0;
  text-align: center;
  @media screen and (max-width: 1080px) {
    font-size: 20px;
  }
`;
export const SocialIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
export const SocialIcon = styled.div`
  height: 35px;
  width: 35px;
  background-color: #ab3b61;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s linear;
  color: #fff;
  :hover {
    background-color: #fff;
    color: #000;
  }
  @media screen and (max-width: 640px) {
    height: 30px;
    width: 30px;
  }
`;
export const ContactDetailWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 0;
  @media screen and (max-width: 640px) {
    gap: 10px;
  }
`;
export const ContactDetailIcon = styled.div``;
export const ContactDetailHeading = styled.div`
  font-family: "Roboto500";
  font-size: 20px;
  color: #fff;
  @media screen and (max-width: 640px) {
    font-size: 14px;
  }
`;
export const ContactDetailContent = styled.div`
  font-family: "Roboto100";
  font-size: 18px;
  color: #fff;
  @media screen and (max-width: 640px) {
    font-size: 14px;
  }
`;
export const ContactInputWrapper = styled.label`
  margin: 5px 0;
`;

export const ContactInputLabel = styled.label`
  font-family: "Roboto500";
  font-size: 18px;
  color: #fff;
  display: block;
  margin: 5px 0;
  span {
    color: #ff0000;
  }
  @media screen and (max-width: 640px) {
    font-size: 16px;
  }
`;
export const ContactInputField = styled(Field)`
  height: 44px;
  width: 100%;
  border-radius: 10px;
  border: none;
  outline: none;
  color: #fff;
  font-size: 16px;
  font-family: "Roboto400";
  background-color: #242424;
  padding: 0 26px;
  box-sizing: border-box;
  @media screen and (max-width: 640px) {
    font-size: 14px;
    padding: 0 16px;
  }
`;
export const ContactInputTextArea = styled(Field)`
  height: 150px;
  width: 100%;
  border-radius: 10px;
  border: none;
  outline: none;
  color: #fff;
  font-size: 16px;
  font-family: "Roboto400";
  background-color: #242424;
  padding: 16px 26px;
  box-sizing: border-box;
  resize: none;
  @media screen and (max-width: 640px) {
    font-size: 14px;
    padding: 10px 16px;
  }
`;
export const ContactFormButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
export const ErrorMessageField = styled.div`
  font-size: 14px;
  font-family: "Roboto500";
  color: #ff0000;
  margin-top: 5px;
`;
