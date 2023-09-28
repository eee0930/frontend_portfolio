import { motion } from 'framer-motion';
import { styled } from 'styled-components';

const IntroContainer = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  background-color: transparent;
  z-index: 20;
`;
const LeftContainer = styled(motion.div)`
  width: 100%;
  position: relative;
  min-height: 1px;
  height: 100%;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  background-color: rgb(245, 245, 245);
  @media (min-width: 991.5px) {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
  @media (min-width: 1199.5px) {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
`;
const InnerBack = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-size: 64px;
  background-repeat: repeat;
  opacity: 0.1;
  border-radius: 0;
`;
const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(26, 26, 26);
  font-size: 20px;
`;

const introVariants = {
  initial: {
    y: 0,
  },
  animate: {
    y: '-500%',
    transition: {
      delay: 1.15,
      duration: 2,
    },
  },
};
const leftVariants = {
  initial: {
    y: 0,
  },
  animate: {
    y: '-500%',
    transition: {
      delay: 0.7,
      duration: 2,
    },
  },
};
const leftVariants2 = {
  initial: {
    y: 0,
  },
  animate: {
    y: '-500%',
    transition: {
      delay: 1,
      duration: 2,
    },
  },
};
const titleVariants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      delay: 0.8,
      duration: 0.5,
    },
  },
};
function IntroEffect() {
  return (
    <IntroContainer
      variants={introVariants}
      initial="initial"
      animate="animate"
    >
      <LeftContainer
        className="d-none d-lg-inline-block"
        variants={leftVariants}
      >
        <InnerBack
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/grunge_back.png)`,
          }}
        />
      </LeftContainer>
      <LeftContainer>
        <InnerBack
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/grunge_back.png)`,
          }}
        />
      </LeftContainer>
      <LeftContainer
        className="d-none d-xl-inline-block"
        variants={leftVariants2}
      >
        <InnerBack
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/grunge_back.png)`,
          }}
        />
      </LeftContainer>
      <Title variants={titleVariants}>
        <div>HwaYeonSong&trade;</div>
      </Title>
    </IntroContainer>
  );
}

export default IntroEffect;
