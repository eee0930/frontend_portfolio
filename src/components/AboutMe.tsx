import { styled } from 'styled-components';
import GrungeContainer from './GrungeContianer';
import { motion } from 'framer-motion';

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
  font-size: 15px;
  line-height: 1.7;
  padding: 2rem 1rem;
  color: rgb(245, 245, 245);
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
    margin-bottom: 0.5rem;
  }
  @media (min-width: 991.5px) {
    font-size: 18px;
    padding: 0;
    .phase {
      margin-bottom: 1rem;
    }
  }
`;
const ImageContainer = styled(motion.div)`
  padding: 0 3rem;
`;
const Image = styled(motion.div)`
  width: 100%;
  max-width: 250px;
  aspect-ratio: 1 / 1;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 0 auto;
  border-radius: 1rem;
  @media (min-width: 991.5px) {
    width: 220px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
  }
`;
const ButtonSection = styled(motion.div)`
  margin-top: 2rem;
`;
const IconSection = styled(motion.div)`
  padding: 1rem;
  text-align: center;
  color: rgb(245, 245, 245);
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  aspect-ratio: 1 / 1;
  margin: 0 auto;
  border-radius: 50%;
  background-color: rgb(196 227 254);
  img {
    width: 50px;
  }
`;
const IconTitle = styled.div`
  font-size: 1.2rem;
  margin-top: 0.5rem;
`;
const IconDetail = styled.div`
  font-size: 16px;
  margin-top: 0.5rem;
`;
const aboutmeVariants = {
  offscreen: {
    y: 0,
  },
  onscreen: {
    y: 0,
  },
};
const imageBounce = {
  offscreen: {
    x: 500,
  },
  onscreen: {
    x: 0,
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 1.4,
    },
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
const IconVBounce = {
  offscreen: {
    y: 50,
  },
  onscreen: {
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 1.2,
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
const IconOpacity = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
function AboutMe() {
  return (
    <GrungeContainer idx={1}>
      <AboutMeContainer
        variants={aboutmeVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.4 }}
      >
        <AboutMeCover>
          <TextContent className="col-12 col-lg-3">ABOUT ME</TextContent>
          <ImageContainer className="col-12 d-lg-none">
            <Image
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/img/hwayeonsong.jpg)`,
              }}
            />
          </ImageContainer>
          <Introduction variants={textBounce} className="col-12 col-lg-6">
            <div>
              <div className="phase">
                안녕하세요! 프론트엔드 개발자 송화연입니다.
              </div>
              <div className="phase">
                토익 공부가 너무 지겨워 영어를 쉽게 잘할 수 있는
                웹어플리케이션을 만들겠다는 결심 하나로 IT에 입문하게
                되었습니다. 학습력과 이해력이 누구보다 좋아 IT 입문 6개월 만에
                마음이 맞는 3명의 팀원들과 <span>스타트업</span>을 창업하여
                3년간 운영 및 프론트엔드 개발을 하였습니다.
              </div>
              <div className="phase">
                평일에는 <span>Vanilla JS</span> 또는 <span>ReactJS</span>로
                다양한 SPA 프로젝트를 만들고 있으며,{' '}
                <a
                  href="https://github.com/eee0930/CodeCrushers"
                  target="_blank"
                  rel="noreferrer"
                >
                  '게으른 개발너드'
                </a>
                의 스터디장으로서 지방에는 잘 없는 개발자들을 모아 매주
                토요일마다 모각코 및 스터디를 진행하고 있습니다.
              </div>
              <div className="phase">
                맡은 프로젝트의 목적을 우선적으로 고려하고 원활한{' '}
                <span>협업</span>을 중요하게 여깁니다.
              </div>
            </div>
            <ButtonSection variants={IconVBounce} className="row">
              <IconSection
                variants={IconOpacity}
                className="d-none d-md-inline-block col-6 col-xl-3"
              >
                <Icon>
                  <img
                    src={`${process.env.PUBLIC_URL}/img/atom.png`}
                    alt="hwayeon"
                  />
                </Icon>
                <IconTitle className="title">Component</IconTitle>
                <IconDetail>
                  React, TypeScript 등 프레임워크 환경에서 컴포넌트 단위 작업을
                  능숙하게 합니다.
                </IconDetail>
              </IconSection>
              <IconSection
                variants={IconOpacity}
                className="d-none d-md-inline-block ol-6 col-xl-3"
              >
                <Icon>
                  <img
                    src={`${process.env.PUBLIC_URL}/img/responsive.png`}
                    alt="hwayeon"
                  />
                </Icon>
                <IconTitle className="title">Responsive</IconTitle>
                <IconDetail>
                  제가 만든 레이아웃은 반응형, 웹 접근성을 항상 고려합니다.
                </IconDetail>
              </IconSection>
              <IconSection
                variants={IconOpacity}
                className="d-none d-md-inline-block col-6 col-xl-3"
              >
                <Icon>
                  <img
                    src={`${process.env.PUBLIC_URL}/img/creative.png`}
                    alt="hwayeon"
                  />
                </Icon>
                <IconTitle className="title">Intuitive</IconTitle>
                <IconDetail>
                  사용하기 쉽고 직관적인 UX/UI를 선호합니다.
                </IconDetail>
              </IconSection>
              <IconSection
                variants={IconOpacity}
                className="d-none d-md-inline-block col-6 col-xl-3"
              >
                <Icon>
                  <img
                    src={`${process.env.PUBLIC_URL}/img/rocket.png`}
                    alt="hwayeon"
                  />
                </Icon>
                <IconTitle className="title">Dynamic</IconTitle>
                <IconDetail>
                  페이지들을 Active하게 살려, 사용자 Interaction을 유도합니다.
                </IconDetail>
              </IconSection>
            </ButtonSection>
          </Introduction>
          <ImageContainer className="d-none d-lg-inline-block col-lg-3">
            <Image
              variants={imageBounce}
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/img/hwayeonsong.jpg)`,
              }}
            />
          </ImageContainer>
        </AboutMeCover>
      </AboutMeContainer>
    </GrungeContainer>
  );
}

export default AboutMe;
