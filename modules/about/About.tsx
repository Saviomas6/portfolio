import React from "react";
import {
  AboutDescription,
  AboutHeading,
  AboutLeftGridWrapper,
  AboutLeftImageContainer,
  AboutMainGridWrapper,
  AboutMainLayout,
  AboutProfileImage,
  AboutRightGridWrapper,
  AboutSubHeading,
} from "./About.style";
import { Container, Heading, HeadingWrapper } from "../../styles/globalStyles";
import Image from "next/image";
import profile from "../../assets/images/profile.jpg";

interface I_About {
  height: string;
}
const About = ({ height }: I_About) => {
  return (
    <AboutMainLayout height={height}>
      <Container width="90%">
        <HeadingWrapper>
          <Heading>ABOUT</Heading>
        </HeadingWrapper>
        <AboutMainGridWrapper>
          <AboutLeftGridWrapper>
            <AboutLeftImageContainer>
              <AboutProfileImage src={profile} alt="profile" />
            </AboutLeftImageContainer>
          </AboutLeftGridWrapper>

          <AboutRightGridWrapper>
            <AboutHeading>H!, I'm Savio Mascarenhas</AboutHeading>
            <AboutSubHeading>Frontend Developer (DApp)</AboutSubHeading>
            <AboutDescription>
              Hello! My Name is Savio Mascarenhas And I Am A Frontend Developer
              Specializing In Decentralized Application (DApp) Development. I
              Have A Strong Passion For Building Interactive And User-Friendly
              Applications That Leverage The Power Of Decentralized Technologies
              Such As Blockchain. I Have A Background In Computer Science And
              Have Experience Working With A Variety Of Frontend Technologies,
              Including Next.Js, React, Web3.Js, Wagmi, React Query, Redux, And
              Typescript. I Am Always Looking For Ways To Improve My Skills And
              Stay Up-To-Date With The Latest Industry Trends. In My Current
              Role As A DApp Developer, I Have Had The Opportunity To Work On A
              Number Of Exciting Projects, Including Building User Interfaces
              For Decentralized Exchanges And Creating Interactive DApps For
              Managing Digital Assets. I Am A Proactive And Detail-Oriented
              Developer Who Enjoys Working In A Collaborative Environment. I Am
              Always Seeking New Challenges And Opportunities To Grow As A
              Developer And Make A Positive Impact In The World Of Decentralized
              Technologies.
            </AboutDescription>
          </AboutRightGridWrapper>
        </AboutMainGridWrapper>
      </Container>
    </AboutMainLayout>
  );
};

export default About;
