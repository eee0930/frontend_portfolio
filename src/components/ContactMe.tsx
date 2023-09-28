import { styled } from 'styled-components';
import GrungeContainer from './GrungeContianer';
import { motion } from 'framer-motion';
const AboutMeContainer = styled(motion.div)`
  width: 90%;
  margin: 0 auto;
  height: 100vh;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const AboutMeCover = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const TextContent = styled.div`
  padding: 2rem;
  text-align: left;
  font-size: 20px;

  color: rgb(245, 245, 245);
  @media (min-width: 991.5px) {
    padding: 0 3rem;
  }
`;
const Introduction = styled(motion.div)`
  font-size: 16px;
  line-height: 1.7;
  padding: 2rem;
  color: rgb(245, 245, 245);
  .email {
    font-size: 5vmax;
    line-height: 0.8;
    letter-spacing: -3px;
  }
  span,
  a {
    position: relative;
    z-index: 10;
  }
  span::after,
  a::after {
    content: '';
    width: 100%;
    height: 2px;
    background-color: rgba(167, 167, 255, 0.5);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
  a::after {
    background-color: rgba(254, 255, 167, 0.5);
  }
  .phase {
    margin-bottom: 1rem;
  }
  @media (min-width: 991.5px) {
    font-size: 18px;
    padding: 0;
  }
`;
const ButtonSection = styled(motion.div)`
  margin-top: 5rem;
`;
const Button = styled.button`
  border: 2px solid #e8e8e8;
  background-color: #e8e8e8;
  color: #262626;
  border-radius: 25px;
  height: 50px;
  padding: 1px 20px;
  font-size: 16px;
`;
const aboutmeVariants = {
  offscreen: {
    y: 0,
  },
  onscreen: {
    y: 0,
  },
};
const textBounce = {
  offscreen: {
    y: 50,
  },
  onscreen: {
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 1.2,
    },
  },
};
function ContactMe() {
  return (
    <GrungeContainer idx={1}>
      <AboutMeContainer
        variants={aboutmeVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.4 }}
      >
        <AboutMeCover>
          <TextContent className="col-12 col-lg-3">CONTACT ME</TextContent>
          <Introduction variants={textBounce} className="col-12 col-lg-9">
            <div className="email title">lazyhysong@gmail.com</div>
            <ButtonSection>
              <Button>Email 보내기</Button>
            </ButtonSection>
          </Introduction>
        </AboutMeCover>
      </AboutMeContainer>
    </GrungeContainer>
  );
}

export default ContactMe;
