import Image from "next/image";
import logo from "../../assets/images/logo.svg";
import {
  Button,
  Container,
  FormCheckBox,
  FormCheckBoxLabel,
  FormCheckBoxWrapper,
  Heading,
  HeadingWrapper,
} from "../../styles/globalStyles";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  ButtonWrapper,
  HamburgerButtonWrapper,
  Logo,
  LogoHeading,
  LogoWrapper,
  NavbarContainer,
  NavbarMainLayout,
  NavTab,
  NavTabs,
  SideBarWrapper,
  StyledLink,
  ThemeButtonWrapper,
} from "./Navbar.style";
import { useState } from "react";
import SideBar from "../sideBar/SideBar";


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

interface I_Props{
  scrollToComponent:any 
  targetRef1:any 
  targetRef2:any 
  targetRef3:any 
  targetRef4:any 
  targetRef5:any
  targetRef6:any
}

const Navbar = ({scrollToComponent,targetRef1,targetRef2,targetRef3,targetRef4,targetRef5,targetRef6}:I_Props) => {
  const [isSideBarOpen, setSideBarOpen] = useState<boolean>(false);

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
    <NavbarMainLayout>
      <Container width="90%">
        <NavbarContainer>
          <LogoWrapper onClick={()=>scrollToComponent(targetRef6)}>
            <Logo>
              <Image src={logo} alt="logo" fill />
            </Logo>

            <LogoHeading>SM</LogoHeading>
          </LogoWrapper>

          <NavTabs>
            {navTab.map((value, index) => (
              <StyledLink key={index} onClick={()=>scrollToComponent(value?.link)}>
                <NavTab>{value?.text}</NavTab>
              </StyledLink>
            ))}
          </NavTabs>
          <ButtonWrapper>
            <Button onClick={onButtonClick}>Download Resume</Button>
          </ButtonWrapper>
          <HamburgerButtonWrapper
            onClick={() => setSideBarOpen(!isSideBarOpen)}
          >
            <GiHamburgerMenu
              size={35}
              color={"#fff"}
              style={{ cursor: "pointer" }}
            />
          </HamburgerButtonWrapper>
          <SideBarWrapper>
            <SideBar
              isSideBarOpen={isSideBarOpen}
              setSideBarOpen={setSideBarOpen}
              scrollToComponent={scrollToComponent}
              targetRef1={targetRef1}
              targetRef2={targetRef2}
              targetRef3={targetRef3}
              targetRef4={targetRef4}
              targetRef5={targetRef5}
              targetRef6={targetRef6}
            />
          </SideBarWrapper>
        </NavbarContainer>
      </Container>
    </NavbarMainLayout>
  );
};

export default Navbar;
