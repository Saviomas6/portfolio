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
import { EducationMainLayout } from "./Education.style";
interface I_Education {
  height: string;
}
const Education = ({ height }: I_Education) => {
  const education = [
    {
      title: "Bachelor of Engineering - Computer Engineering",
      university: "University of Mumbai",
      collegeName: "College Name : Don Bosco Institute of Technology",
      year: "Year : 2017 - 2020",
    },
    {
      title: "Diploma-Computer Engineering",
      university: "Maharashtra State Board of Technical Education",
      collegeName: "College Name : Vidyalankar Polytechnic",
      year: "Year : 2014 - 2017",
    },
  ];

  return (
    <EducationMainLayout height={height}>
      <Container width="90%">
        <HeadingWrapper>
          <Heading>EDUCATION</Heading>
        </HeadingWrapper>
        <BoxContainer>
          {education.map((value) => (
            <BoxEducation>
              <BoxHeadingTitle>{value?.title}</BoxHeadingTitle>
              <BoxSubHeadingTitle>{value?.university}</BoxSubHeadingTitle>
              <BoxSubHeadingTitle>{value?.collegeName}</BoxSubHeadingTitle>
              <YearTitle>{value?.year}</YearTitle>
            </BoxEducation>
          ))}
        </BoxContainer>
      </Container>
    </EducationMainLayout>
  );
};

export default Education;
