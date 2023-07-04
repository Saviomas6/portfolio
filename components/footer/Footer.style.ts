import styled from "styled-components";
export const FooterMainLayout = styled.div`
  min-height: 100px;
  width: 100%;
  background-color: #242424;
`;

export const SocialIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  padding: 10px 0;
  @media screen and (max-width: 480px) {
    gap: 15px;
  }
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
`;

export const CopyRightContent = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-family: "Roboto500";
  color: #fff;
  @media screen and (max-width: 940px) {
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`;
