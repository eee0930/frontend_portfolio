import { styled } from 'styled-components';
import GrungeContainer from './GrungeContianer';
import { motion } from 'framer-motion';

import { useState } from 'react';
const AboutMeContainer = styled(motion.div)`
  margin: 0 auto;
  height: 100vh;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  @media (min-width: 991.5px) {
    width: 90%;
  }
`;
const AboutMeCover = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const TextContent = styled.div`
  padding: 2rem;
  text-align: center;
  font-size: 20px;

  color: rgb(245, 245, 245);
  @media (min-width: 991.5px) {
    padding: 0 3rem;
    text-align: left;
  }
`;
const Introduction = styled(motion.div)`
  font-size: 16px;
  line-height: 1.7;
  padding: 1rem;
  text-align: center;
  color: rgb(245, 245, 245);
  .email {
    font-size: 7.5vmin;
  }

  .phase {
    margin-bottom: 1rem;
  }
  @media (min-width: 991.5px) {
    font-size: 18px;
    padding: 0;
    text-align: left;
    .email {
      font-size: 5vmax;
      line-height: 0.8;
      letter-spacing: -3px;
    }
  }
`;
const ButtonSection = styled(motion.div)`
  margin-top: 3rem;
  display: flex;

  @media (min-width: 991.5px) {
    margin-top: 5rem;
  }
`;
const Button = styled.a`
  border: 2px solid #c6cbdc;
  background-color: #2a2c40;
  color: #c6cbdc;
  border-radius: 25px;
  height: 50px;
  width: 150px;
  padding: 1px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  outline: none;
  transition: background-color 0.3s ease, color 0.3s ease;
  margin-right: 1rem;
  &:hover {
    background-color: #c6cbdc;
    color: #2a2c40;
  }
  &.clone {
    width: 50px;
    position: relative;
  }
`;
const ButtonMsg = styled.div`
  background-color: #e8e8e8;
  color: #2a2c40;
  border-radius: 5px;
  width: 205px;
  padding: 5px 5px;
  position: absolute;
  top: 0;
  left: calc(100% + 1rem);
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
const EMAIL = 'lazyhysong@gmail.com';
const EMAIL_BTN_VALUE = 'Email 보내기';
const CLONE_VALUE = '클립보드에 복사되었습니다.';
function ContactMe() {
  const [openMsg, setOpenMsg] = useState(false);
  const handleClickClone = () => {
    setOpenMsg(true);
    navigator.clipboard.writeText(EMAIL).catch((err) => {
      console.log('Something went wrong', err);
    });
    const timeout = setTimeout(() => {
      setOpenMsg(false);
      clearTimeout(timeout);
    }, 1500);
  };
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
            <div className="email title">{EMAIL}</div>
            <ButtonSection>
              <Button href="mailto:lazyhysong@gmail.com">
                {EMAIL_BTN_VALUE}
              </Button>
              <Button
                as="button"
                onClick={handleClickClone}
                className="clone"
                disabled={openMsg}
              >
                <i className="fa-regular fa-clone" />
                {openMsg && <ButtonMsg>{CLONE_VALUE}</ButtonMsg>}
              </Button>
            </ButtonSection>
          </Introduction>
        </AboutMeCover>
      </AboutMeContainer>
    </GrungeContainer>
  );
}

export default ContactMe;
