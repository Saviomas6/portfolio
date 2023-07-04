import React from "react";
import {
  Button,
  Container,
  Heading,
  HeadingWrapper,
} from "../../styles/globalStyles";
import {
  ButtonWrapper,
  ProjectContainer,
  ProjectDescription,
  ProjectImage,
  ProjectImageContainer,
  ProjectMainContainer,
  ProjectMainLayout,
  ProjectTitle,
  TechnologyUsed,
} from "./Projects.style";
interface I_Project {
  height: string;
}
const Projects = ({ height }: I_Project) => {
  return (
    <ProjectMainLayout height={height}>
      <Container width="90%">
        <HeadingWrapper>
          <Heading>PROJECTS</Heading>
        </HeadingWrapper>
        <ProjectMainContainer>
          {Array.from({ length: 10 }, (v, i) => (
            <ProjectContainer>
              <ProjectImageContainer>
                <ProjectImage
                  fill
                  src="https://images.pexels.com/photos/8194829/pexels-photo-8194829.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                  alt="image"
                />
              </ProjectImageContainer>
              <ProjectTitle>Project Title</ProjectTitle>
              <TechnologyUsed>HTML,CSS,Javascript,React,API</TechnologyUsed>
              <ProjectDescription>
                n any given case reducer, Immer expects that you will either
                mutate the existing state, or construct a new state value
                yourself and return it
              </ProjectDescription>
              <ButtonWrapper>
                <Button>Project Link</Button>
              </ButtonWrapper>
            </ProjectContainer>
          ))}
        </ProjectMainContainer>
      </Container>
    </ProjectMainLayout>
  );
};

export default Projects;
