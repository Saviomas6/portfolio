import { Button, Container, StyledLink } from "../../styles/globalStyles";
import {
  ButtonWrapper,
  Description,
  HomePageBackGroundLayout,
  HomePageLeftContainer,
  HomePageMainContainer,
  HomePageMainLayout,
  HomePageRightContainer,
  JobTitleHeading,
  LottieContainer,
  NameHeading,
  ProjectButton,
} from "./HomePage.style";
import Lottie from "react-lottie";
import landingPage from "../../assets/json/landingPage.json";
import background from "../../assets/images/background.jpg";

interface I_HomePage {
  height: string;
  scrollToComponent:any 
  targetRef4:any 
  targetRef5:any
}
const HomePage = ({ height ,scrollToComponent,targetRef4,targetRef5}: I_HomePage) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: landingPage,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <HomePageMainLayout bgImage={background} height={height}>
      <HomePageBackGroundLayout height={height}>
        <Container width="90%">
          <HomePageMainContainer>
            <HomePageLeftContainer>
              <NameHeading>Hi, I am Savio Mascarenhas </NameHeading>
              <JobTitleHeading>Frontend Developer (DApp)</JobTitleHeading>
              <Description>
                Hello! My Name is Savio Mascarenhas And I Am A Frontend
                Developer Specializing In Decentralized Application (DApp)
                Development.Strong attention to detail and a passion for
                creating visually appealing and user-friendly web
                applications.Proven ability to collaborate with cross-functional
                teams to develop and implement innovative solutions for complex
                problems.A self-starter with a track record of successfully
                delivering projects on time and to specification. Strong
                problem-solving skills and the ability to troubleshoot and debug
                code as needed.Comfortable working with version control systems
                such as Git and comfortable using command line tools.
              </Description>
              <ButtonWrapper>
                <StyledLink onClick={()=>scrollToComponent(targetRef4)}>
                  <ProjectButton>Projects</ProjectButton>
                </StyledLink>
                <StyledLink onClick={()=>scrollToComponent(targetRef5)}>
                  <Button>Hire Me</Button>
                </StyledLink>
              </ButtonWrapper>
            </HomePageLeftContainer>
            <HomePageRightContainer>
              <LottieContainer>
                <Lottie options={defaultOptions} />
              </LottieContainer>
            </HomePageRightContainer>
          </HomePageMainContainer>
        </Container>
      </HomePageBackGroundLayout>
    </HomePageMainLayout>
  );
};

export default HomePage;
