import Link from "next/link";
import styled from "styled-components";

export const NavbarMainLayout = styled.div`
  width: 100%;
  background-color: #242424;
  position: sticky;
  top: 0px;
  display: flex;
  align-items: center;
  z-index: 100;
  @media screen and (max-width: 940px) {
    height: 60px;
  }
  @media screen and (min-width: 940px) {
    height: 70px;
  }
`;
export const NavbarContainer = styled.div`
  width: 100%;
  background-color: #242424;
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  grid-column-gap: 30px;
  align-items: center;
  @media screen and (max-width: 1080px) {
    grid-column-gap: 15px;
  }
  @media screen and (max-width: 940px) {
    grid-template-columns: auto 1fr;
  }
  @media screen and (min-width: 940px) {
    grid-template-columns: auto 1fr auto auto;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  text-decoration: none;
  cursor: pointer;
`;

export const Logo = styled.div`
  position: relative;
  @media screen and (max-width: 940px) {
    height: 40px;
    width: 40px;
  }
  @media screen and (min-width: 940px) {
    height: 50px;
    width: 50px;
  }
`;

export const LogoHeading = styled.div`
  font-family: "Roboto700";
  color: #fff;
  transition: 0.3s linear;
  :hover {
    color: #ab3b61;
  }
  @media screen and (max-width: 940px) {
    font-size: 25px;
  }
  @media screen and (min-width: 940px) {
    font-size: 30px;
  }
`;

export const NavTabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 40px;
  @media screen and (max-width: 1080px) {
    gap: 25px;
  }
  @media screen and (max-width: 940px) {
    display: none;
  }
  @media screen and (min-width: 940px) {
    display: flex;
  }
`;

export const NavTab = styled.div`
  font-family: "Roboto500";
  font-size: 16px;
  color: #fff;
  transition: 0.3s linear;
  cursor: pointer;
  :hover {
    color: #ab3b61;
  }
`;

export const StyledLink = styled.div`

`;

export const ThemeButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 940px) {
    display: none;
  }
  @media screen and (min-width: 940px) {
    display: flex;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 940px) {
    display: none;
  }
  @media screen and (min-width: 940px) {
    display: flex;
  }
`;

export const HamburgerButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;

  @media screen and (min-width: 940px) {
    display: none;
  }
`;
export const SideBarWrapper = styled.div`
  @media screen and (min-width: 940px) {
    display: none;
  }
`;
