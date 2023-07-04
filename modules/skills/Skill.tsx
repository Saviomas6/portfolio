import React from "react";
import { Container, Heading, HeadingWrapper } from "../../styles/globalStyles";
import {
  SkillContainer,
  SkillHeading,
  SkillIcon,
  SkillIconWrapper,
  SkillMainLayout,
  SkillText,
} from "./Skill.style";
import { TbBrandJavascript } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiWeb3Dotjs,
  SiMaterialui,
  SiAntdesign,
  SiHtml5,
  SiCss3,
  SiApollographql,
  SiStyledcomponents,
  SiMongodb,
  SiFirebase,
  SiVisualstudio,
  SiSublimetext,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import { FaNodeJs, FaSass } from "react-icons/fa";
import { TbBrandTailwind } from "react-icons/tb";
import { BsFillBootstrapFill } from "react-icons/bs";
import Image from "next/image";
import metamask from "../../assets/images/metamask.svg";
import walletconnect from "../../assets/images/walletconnect.svg";
import coinbase from "../../assets/images/coinbase.svg";

interface I_Skill {
  height: string;
}

const Skill = ({ height }: I_Skill) => {
  return (
    <SkillMainLayout height={height}>
      <Container width="90%">
        <HeadingWrapper>
          <Heading>SKILLS</Heading>
        </HeadingWrapper>
        <SkillContainer>
          <SkillHeading>DApp Development</SkillHeading>
          <SkillIconWrapper>
            <SkillIcon title="Web3js">
              <SiWeb3Dotjs />
            </SkillIcon>
            <SkillText title="Web3-React">Web3-React</SkillText>
          </SkillIconWrapper>
          <SkillHeading>Crypto Wallets</SkillHeading>
          <SkillIconWrapper>
            <SkillIcon title="MetaMask">
              <Image src={metamask} alt="logo" height={20} width={20} />
            </SkillIcon>
            <SkillIcon title="Wallet Connect">
              <Image src={walletconnect} alt="logo" height={40} width={40} />
            </SkillIcon>
            <SkillIcon title="Coinbase">
              <Image src={coinbase} alt="logo" height={25} width={25} />
            </SkillIcon>
          </SkillIconWrapper>
          <SkillHeading>Programming</SkillHeading>
          <SkillIconWrapper>
            <SkillIcon title="JavaScript">
              <TbBrandJavascript size={25} />
            </SkillIcon>
          </SkillIconWrapper>
          <SkillHeading>Web Technologies</SkillHeading>
          <SkillIconWrapper>
            <SkillIcon title="ReactJs">
              <RiReactjsLine size={25} />
            </SkillIcon>
            <SkillIcon title="NextJs">
              <SiNextdotjs size={25} />
            </SkillIcon>
            <SkillIcon title="NodeJs">
              <FaNodeJs size={25} />
            </SkillIcon>
            <SkillIcon title="Tailwind">
              <TbBrandTailwind size={25} />
            </SkillIcon>
            <SkillIcon title="Typescript">
              <SiTypescript size={20} />
            </SkillIcon>
            <SkillIcon title="Redux-Toolkit">
              <SiRedux size={20} />
            </SkillIcon>
            <SkillIcon title="Bootstrap">
              <BsFillBootstrapFill size={20} />
            </SkillIcon>
            <SkillIcon title="SASS/SCSS">
              <FaSass size={25} />
            </SkillIcon>
            <SkillIcon title="MaterialUI">
              <SiMaterialui size={20} />
            </SkillIcon>
            <SkillIcon title="AntDesign">
              <SiAntdesign size={20} />
            </SkillIcon>
            <SkillIcon title="HTML">
              <SiHtml5 size={20} />
            </SkillIcon>
            <SkillIcon title="CSS">
              <SiCss3 size={20} />
            </SkillIcon>
            <SkillIcon title="ApolloGraphql">
              <SiApollographql size={20} />
            </SkillIcon>
            <SkillIcon title="StyledComponents">
              <SiStyledcomponents size={20} />
            </SkillIcon>
            <SkillText title="React Query">React Query</SkillText>
            <SkillText title="Formik">Formik</SkillText>
          </SkillIconWrapper>
          <SkillHeading>Databases</SkillHeading>
          <SkillIconWrapper>
            <SkillIcon title="Mongodb">
              <SiMongodb size={20} />
            </SkillIcon>
            <SkillIcon title="Firebase">
              <SiFirebase size={20} />
            </SkillIcon>
          </SkillIconWrapper>
          <SkillHeading>Tools & IDE's</SkillHeading>
          <SkillIconWrapper>
            <SkillIcon title="VisualStudio">
              <SiVisualstudio size={20} />
            </SkillIcon>
            <SkillIcon title="Sublime">
              <SiSublimetext size={20} />
            </SkillIcon>
            <SkillIcon title="Git">
              <SiGit size={20} />
            </SkillIcon>{" "}
            <SkillIcon title="Github">
              <SiGithub size={20} />
            </SkillIcon>{" "}
            <SkillIcon title="Postman">
              <SiPostman size={20} />
            </SkillIcon>
          </SkillIconWrapper>
        </SkillContainer>
      </Container>
    </SkillMainLayout>
  );
};

export default Skill;
