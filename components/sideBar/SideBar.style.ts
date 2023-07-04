import Link from "next/link";
import styled from "styled-components";
export const SideBarMainLayout = styled.div<{ isSideBarOpen: boolean }>`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  right: ${({ isSideBarOpen }) => (isSideBarOpen ? "0%" : "-100%")};
  background-color: #242424;
  transition: 420ms;
  padding: 24px;
  box-sizing: border-box;
  z-index: 100;
`;
export const SideBarContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
`;
export const SideBarContent = styled.div`
  margin: 8px 0;
`;
export const NavTab = styled.div`
  font-family: "Roboto500";
  font-size: 16px;
  color: #fff;
  padding: 12px 0;
`;
export const SideBarLogoMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SideBarLogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const SideBarLogoText = styled.div`
  font-family: "Roboto700";
  color: #fff;
  font-size: 25px;
`;

export const SideBarCloseIcon = styled.div``;

export const SideBarLogoIcon = styled.div`
  height: 40px;
  width: 40px;
  position: relative;
`;
export const StyledLink = styled.div`
  text-decoration: none;
`;
