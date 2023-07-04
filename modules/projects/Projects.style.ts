import Image from "next/image";
import styled from "styled-components";
export const ProjectMainLayout = styled.div<any>`
  min-height: ${(props) => props.height};
  width: 100%;
`;

export const ProjectMainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 10px;
  padding: 10px;
  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    padding: 10px 0;
  }
`;

export const ProjectContainer = styled.div`
  height: 450px;
  background-color: #242424;
  border-radius: 10px;
  padding: 10px;
  @media screen and (max-width: 640px) {
    height: 420px;
  }
`;

export const ProjectImageContainer = styled.div`
  height: 250px;
  width: 100%;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`;

export const ProjectImage = styled(Image)`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  transition: 0.3s linear;
  :hover {
    transform: scale(1.2);
  }
`;

export const ProjectTitle = styled.div`
  font-size: 20px;
  font-family: "Roboto700";
  color: #fff;
  margin-top: 10px;
  @media screen and (max-width: 640px) {
    font-size: 18px;
  }
`;

export const ProjectDescription = styled.div`
  font-size: 14px;
  font-family: "Roboto400";
  color: #fff;
  margin-top: 10px;
  @media screen and (max-width: 640px) {
    font-size: 12px;
  }
`;

export const TechnologyUsed = styled.div`
  font-size: 16px;
  font-family: "Roboto500";
  color: #fff;
  margin-top: 10px;
  @media screen and (max-width: 640px) {
    font-size: 14px;
  }
`;

export const ButtonWrapper = styled.div`
  padding: 15px 0;
  @media screen and (max-width: 640px) {
    padding: 10px 0;
  }
`;
