import React from "react";
import {
  NavTab,
  SideBarCloseIcon,
  SideBarContainer,
  SideBarContent,
  SideBarLogoContainer,
  SideBarLogoIcon,
  SideBarLogoMainContainer,
  SideBarLogoText,
  SideBarMainLayout,
  StyledLink,
} from "./SideBar.style";
import logo from "../../assets/images/logo.svg";
import Image from "next/image";
import { Button } from "../../styles/globalStyles";
import { MdClose } from "react-icons/md";
interface I_Props {
  isSideBarOpen: boolean;
  setSideBarOpen(value: boolean): void;
  scrollToComponent:any 
  targetRef1:any 
  targetRef2:any 
  targetRef3:any 
  targetRef4:any 
  targetRef5:any
  targetRef6:any
}

const SideBar = ({ isSideBarOpen, setSideBarOpen ,scrollToComponent,targetRef1,targetRef2,targetRef3,targetRef4,targetRef5, targetRef6}: I_Props) => {
  const onButtonClick = () => {
    fetch("resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "resume.pdf";
        alink.click();
      });
    });
  };

  const navTab = [
    {
      text: "About",
      link: targetRef1,
    },
    {
      text: "Timeline",
      link: targetRef2,
    },
    {
      text: "Skills",
      link: targetRef3,
    },
    {
      text: "Projects",
      link: targetRef4,
    },
    {
      text: "Contact",
      link: targetRef5,
    },
  ];

  return (
    <SideBarMainLayout isSideBarOpen={isSideBarOpen}>
      <SideBarContainer>
        <SideBarContent>
          <SideBarLogoMainContainer>
            <StyledLink onClick={()=>scrollToComponent(targetRef6)}>
              <SideBarLogoContainer
                onClick={() => setSideBarOpen(!isSideBarOpen)}
              >
                <SideBarLogoText>SM</SideBarLogoText>
                <SideBarLogoIcon>
                  <Image src={logo} alt="logo" fill />
                </SideBarLogoIcon>
              </SideBarLogoContainer>
            </StyledLink>
            <SideBarCloseIcon>
              <MdClose
                size={30}
                color={"#fff"}
                style={{ cursor: "pointer" }}
                onClick={() => setSideBarOpen(!isSideBarOpen)}
              />
            </SideBarCloseIcon>
          </SideBarLogoMainContainer>
        </SideBarContent>
        {navTab.map((tab) => (
          <SideBarContent key={tab?.link}>
            <StyledLink
              
              onClick={() =>{
                scrollToComponent(tab?.link)
                setSideBarOpen(!isSideBarOpen)  
              } }
            >
              <NavTab>{tab?.text}</NavTab>
            </StyledLink>
          </SideBarContent>
        ))}

        <SideBarContent>
          <Button onClick={onButtonClick}>Download Resume</Button>
        </SideBarContent>
      </SideBarContainer>
    </SideBarMainLayout>
  );
};

export default SideBar;
