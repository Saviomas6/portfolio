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
import { IoSchoolSharp } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";
import { Icon, TimelineMainLayout } from "./Timeline.style";
interface I_TimeLine {
  height: string;
}

const timeline = [
  {
    title: "Role : Front End Developer",
    companyName: "Company Name : Rapid Innovation",
    location: "Location : Noida, Uttar Pradesh, India ",
    year: "Year : August/2021 - Present",
    icon: <MdOutlineWork color={"#fff"} />,
  },
  {
    title: "Role : CM Technician",
    companyName: "Company Name : R T Corporation",
    location: "Location : Mumbai, Maharashtra, India",
    year: "Year : July/2020 - August/2021",
    icon: <MdOutlineWork color={"#fff"} />,
  },
  {
    title: "Bachelor of Engineering - Computer Engineering",
    companyName: "University of Mumbai",
    location: "College Name : Don Bosco Institute of Technology",
    year: "Year : 2017 - 2020",
    icon: <IoSchoolSharp color={"#fff"} />,
  },
  {
    title: "Diploma-Computer Engineering",
    companyName: "Maharashtra State Board of Technical Education",
    location: "College Name : Vidyalankar Polytechnic",
    year: "Year : 2014 - 2017",
    icon: <IoSchoolSharp color={"#fff"} />,
  },
];

const Timeline = ({ height }: I_TimeLine) => {
  return (
    <TimelineMainLayout height={height}>
      <Container width="90%">
        <HeadingWrapper>
          <Heading>TIMELINE</Heading>
        </HeadingWrapper>
        <BoxContainer>
          {timeline.map((value, index) => (
            <BoxEducation key={index}>
              <Icon>{value?.icon}</Icon>
              <BoxHeadingTitle>{value?.title}</BoxHeadingTitle>
              <BoxSubHeadingTitle>{value?.companyName}</BoxSubHeadingTitle>
              <BoxSubHeadingTitle>{value?.location}</BoxSubHeadingTitle>
              <YearTitle>{value?.year}</YearTitle>
            </BoxEducation>
          ))}
        </BoxContainer>
      </Container>
    </TimelineMainLayout>
  );
};

export default Timeline;
