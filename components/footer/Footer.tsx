import { useRef } from "react";
import { ColorExtractor } from "react-color-extractor";
import { Container } from "../../styles/globalStyles";
import {
  CopyRightContent,
  FooterMainLayout,
  SocialIcon,
  SocialIconWrapper,
} from "./Footer.style";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillCodeSandboxCircle,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  const colorExtractorRef = useRef();
  const handleColors = (colors: any) => {
    console.log(colors);
  };
  return (
    <FooterMainLayout>
      <Container width="90%">
        <SocialIconWrapper>
          <div>
            <ColorExtractor
              src="https://storage.uat.thewearableinternet.com/image/jpeg/2023/04/06/pexels_pixabay_163036.jpg-bdc28746-3309-474c-a8d3-997e78da99b7.jpg"
              getColors={handleColors}
              ref={colorExtractorRef}
            />
          </div>
          <SocialIcon>
            <AiFillTwitterCircle size={20} />
          </SocialIcon>
          <SocialIcon>
            <AiFillLinkedin size={20} />
          </SocialIcon>
          <SocialIcon>
            <AiFillGithub size={20} />
          </SocialIcon>
          <SocialIcon>
            <AiFillCodeSandboxCircle size={20} />
          </SocialIcon>
          <SocialIcon>
            <AiFillFacebook size={20} />
          </SocialIcon>
          <SocialIcon>
            <AiFillInstagram size={20} />
          </SocialIcon>
        </SocialIconWrapper>
        <CopyRightContent>
          &#169; Copyright 2022 Savio Mascarenhas - All Rights Received
        </CopyRightContent>
      </Container>
    </FooterMainLayout>
  );
};

export default Footer;
