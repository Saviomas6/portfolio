import React from "react";
import {
  BoxContainer,
  BoxEducation,
  BoxHeadingTitle,
  BoxSubHeadingTitle,
  Container,
  Heading,
  HeadingWrapper,
  YearTitle,
} from "../../styles/globalStyles";
import { ExperienceMainLayout } from "./Experience.style";
interface I_Experience {
  height: string;
}

const experience = [
  {
    title: "Role : Front End Developer",
    companyName: "Company Name : Rapid Innovation",
    location: "Location : Noida, Uttar Pradesh, India ",
    year: "Year : August/2021 - Present",
  },
  {
    title: "Role : CM Technician",
    companyName: "Company Name : R T Corporation",
    location: "Location : Mumbai, Maharashtra, India",
    year: "Year : July/2020 - August/2021",
  },
];

const Experience = ({ height }: I_Experience) => {
  return (
    <ExperienceMainLayout height={height}>
      <Container width="90%">
        <HeadingWrapper>
          <Heading>EXPERIENCE</Heading>
        </HeadingWrapper>
        <BoxContainer>
          {experience.map((value) => (
            <BoxEducation>
              <BoxHeadingTitle>{value?.title}</BoxHeadingTitle>
              <BoxSubHeadingTitle>{value?.companyName}</BoxSubHeadingTitle>
              <BoxSubHeadingTitle>{value?.location}</BoxSubHeadingTitle>
              <YearTitle>{value?.year}</YearTitle>
            </BoxEducation>
          ))}
        </BoxContainer>
      </Container>
    </ExperienceMainLayout>
  );
};

export default Experience;
