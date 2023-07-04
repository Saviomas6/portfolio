import { useState, useEffect } from "react";
import { ScrollTopButtonContainer } from "./ScrollTopButton.style";
import { BsFileArrowUpFill } from "react-icons/bs";
const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (document.body.scrollTop) {
        if (document.body.scrollTop >= 150) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    };
    document.body.addEventListener("scroll", handleScroll);
    return () => document.body.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    document.body.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <ScrollTopButtonContainer onClick={scrollToTop}>
          <BsFileArrowUpFill size={30} />
        </ScrollTopButtonContainer>
      )}
    </>
  );
};

export default ScrollTopButton;
