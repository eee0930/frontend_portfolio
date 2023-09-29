import { useEffect, useRef } from 'react';
import Header from './components/Header';
import Head from './components/Head';
import styled from 'styled-components';
import AboutMe from './components/AboutMe';
import Works from './components/Works';
import ContactMe from './components/ContactMe';
import Intro from './components/Intro';
import IntroEffect from './components/IntroEffect';

const ContainerWrapper = styled.div`
  height: 100vh;
`;
function App() {
  const scrollRef = useRef<HTMLDivElement[]>([]);
  const handleScroll = (idx: number) => {
    scrollRef?.current[idx]?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    scrollRef?.current[4]?.scrollIntoView();
  }, []);
  return (
    <>
      <Head />
      <Header scrollCallback={(idx) => handleScroll(idx)} />
      <ContainerWrapper
        ref={(el: HTMLDivElement) => (scrollRef.current[4] = el)}
      >
        <Intro />
      </ContainerWrapper>
      <ContainerWrapper
        ref={(el: HTMLDivElement) => (scrollRef.current[0] = el)}
        style={{ height: '170vh' }}
      >
        <AboutMe />
      </ContainerWrapper>
      <ContainerWrapper
        ref={(el: HTMLDivElement) => (scrollRef.current[1] = el)}
        style={{ height: '170vh' }}
      >
        <Works />
      </ContainerWrapper>
      <ContainerWrapper
        ref={(el: HTMLDivElement) => (scrollRef.current[2] = el)}
      >
        <ContactMe />
      </ContainerWrapper>
      <IntroEffect />
    </>
  );
}

export default App;
