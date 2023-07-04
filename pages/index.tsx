import HomePage from "../modules/homePage/HomePage";
import dynamic from "next/dynamic";
import ScrollTopButton from "../components/scrollTopButton/ScrollTopButton";
import { FadeAnimation } from "../styles/globalStyles";
import { useRef } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
const About = dynamic(() => import("../modules/about/About"));
const Contact = dynamic(() => import("../modules/contact/Contact"));
const Projects = dynamic(() => import("../modules/projects/Projects"));
const Skill = dynamic(() => import("../modules/skills/Skill"));
const Timeline = dynamic(() => import("../modules/timeline/Timeline"));

const App = () => {
  const targetRef1 = useRef(null);
  const targetRef2 = useRef(null);
  const targetRef3 = useRef(null);
  const targetRef4 = useRef(null);
  const targetRef5 = useRef(null);
  const targetRef6 = useRef(null);

  const scrollToComponent = (targetRef: any) => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <FadeAnimation>
      <Navbar
        scrollToComponent={scrollToComponent}
        targetRef1={targetRef1}
        targetRef2={targetRef2}
        targetRef3={targetRef3}
        targetRef4={targetRef4}
        targetRef5={targetRef5}
        targetRef6={targetRef6}
      />
      <div ref={targetRef6}>
        <HomePage
          height="calc(100vh - 70px)"
          scrollToComponent={scrollToComponent}
          targetRef4={targetRef4}
          targetRef5={targetRef5}
        />
      </div>

      <div ref={targetRef1}>
        <About height="calc(100vh - 0px)" />
      </div>
      <div ref={targetRef2}>
        <Timeline height="calc(100vh - 0px)" />
      </div>
      <div ref={targetRef3}>
        <Skill height="calc(100vh - 0px)" />
      </div>
      <div ref={targetRef4}>
        <Projects height="calc(100vh - 0px)" />
      </div>
      <div ref={targetRef5}>
        <Contact height="calc(100vh - 0px)" />
      </div>
      <Footer />
      <ScrollTopButton />
    </FadeAnimation>
  );
};

export default App;
