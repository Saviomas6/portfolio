import styled from "styled-components";
export const SkillMainLayout = styled.div<any>`
  min-height: ${(props) => props.height};
  width: 100%;
`;

export const SkillContainer = styled.div`
  margin: 20px 0;
`;

export const SkillHeading = styled.div`
  font-size: 18px;
  font-family: "Roboto700";
  color: #fff;
  @media screen and (max-width: 640px) {
    font-size: 16px;
  }
  @media screen and (max-width: 360px) {
    font-size: 14px;
  }
`;
export const SkillIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  flex-wrap: wrap;
  margin: 20px 0;
  @media screen and (max-width: 640px) {
    margin: 14px 0;
    gap: 16px;
  }
`;
export const SkillIcon = styled.div`
  height: 40px;
  width: 40px;
  position: relative;
  background-color: #242424;
  border: 2px solid #ab3b61;
  border-radius: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s linear;
  cursor: pointer;
  :hover {
    background-color: #fff;
    color: #000;
  }
  @media screen and (max-width: 640px) {
    height: 36px;
    width: 36px;
  }
`;
export const SkillText = styled.div`
  height: 40px;
  width: 100px;
  background-color: #242424;
  border: 2px solid #ab3b61;
  border-radius: 10px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-family: "Roboto500";
  transition: 0.5s linear;
  cursor: pointer;
  :hover {
    background-color: #fff;
    color: #000;
  }
  @media screen and (max-width: 640px) {
    height: 36px;
    width: 90px;
    font-size: 12px;
  }
`;
