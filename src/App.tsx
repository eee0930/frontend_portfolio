import { useRef } from 'react';
import Header from './components/Header';
import Head from './components/Head';
import styled from 'styled-components';
import AboutMe from './components/AboutMe';
import Works from './components/Works';
import ContactMe from './components/ContactMe';
import Intro from './components/Intro';
import IntroEffect from './components/IntroEffect';
import { motion } from 'framer-motion';

const ContainerWrapper = styled(motion.div)`
  height: 100vh;
`;
function App() {
  const scrollRef = useRef<HTMLDivElement[]>([]);
  const handleScroll = (idx: number) => {
    scrollRef?.current[idx]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head />
      <Header scrollCallback={(idx) => handleScroll(idx)} />
      {[<Intro />, <AboutMe />, <Works />, <ContactMe />].map((com, i) => {
        return (
          <ContainerWrapper
            key={i}
            ref={(el: HTMLDivElement) => (scrollRef.current[i] = el)}
            style={{ height: `${i === 1 || i === 2 ? '150vh' : '100vh'}` }}
          >
            {com}
          </ContainerWrapper>
        );
      })}
      <IntroEffect />
    </>
  );
}

export default App;
