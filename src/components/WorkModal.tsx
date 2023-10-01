import { AnimatePresence, Point, motion } from 'framer-motion';
import styled from 'styled-components';
import { workList } from '../data';
import { useState } from 'react';
import Work from './Work';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
`;
const LayoutBack = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(15px);
`;
const Modalcover = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 500px;
  width: 650px;
  background-color: #fff;
  border-radius: 2rem;
  overflow: auto;
  @media (min-width: 991.5px) {
    height: 500px;
    width: 650px;
  }
  @media (min-width: 1199.5px) {
    top: 5%;
    left: calc(50% - 400px);
    height: 90%;
    width: 800px;
  }
`;
const ImgCards = styled.div`
  width: 100%;
  aspect-ratio: 20 / 13;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;
const ButtonSection = styled.div`
  width: 100%;
  position: absolute;
  z-index: 5;
  top: 50%;
  left: 0;
  padding: 0 2rem;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button`
  border: solid 2px rgb(37, 39, 57);
  background-color: rgba(216, 220, 241, 0.4);
  color: rgb(37, 39, 57);
  font-size: 1.5rem;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  outline: none;
`;
const ImageContainer = styled(motion.div)`
  width: 85%;
  aspect-ratio: 20 / 14;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% auto;
  cursor: grab;
`;
const Description = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 2rem 0;
  text-align: left;
  line-height: 1.2;
`;
const Title = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;
const LinkSection = styled.div`
  margin-bottom: 1rem;
  font-size: 16px;
  span {
    width: 60px;
    display: inline-block;
  }
`;
const Label = styled.label`
  margin-right: 0.5rem;
  border-radius: 2px;
  padding: 2px 5px;
  font-size: 14px;
  color: #fff;
  width: max-content;
  &.JavaScript {
    background-color: #fac942;
    color: #000;
  }
  &.HTML {
    background-color: #b42626;
  }
  &.CSS {
    background-color: #2648b4;
  }
  &.ReactJS {
    background-color: #62dafb;
    color: #000;
  }
  &.TypeScript {
    background-color: #62dafb;
    color: #000;
  }
  &.Recoil {
    background-color: #008ef4;
  }
  &.ReactQuery {
    background-color: #ff4154;
  }
  &.StyledComponents {
    background-color: #db7192;
  }
  &.FramerMotion {
    background-color: #0055fe;
  }
  &.ReactHookForm {
    background-color: #ec598f;
  }
`;
const Border = styled.hr`
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
`;
const DexUl = styled.div`
  line-height: 1.5;
`;
const ButtonSection2 = styled.div`
  margin-top: 2rem;
  a {
    outline: none;
    margin-right: 1rem;
    border: solid 2px rgb(37, 39, 57);
    color: rgb(37, 39, 57);
    background-color: #fff);
    height: 50px;
    border-radius: 25px;
    padding: 8px 20px;
    font-size: 1.2rem;
    transition: background-color 0.3s ease, color 0.3s ease;
    &:hover {
      background-color: rgb(37, 39, 57);
      color: #fff;
    }
  }
`;
const rowVariants = {
  enter: (isNext: number) => {
    return {
      x: isNext ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (isNext: number) => {
    return {
      zIndex: 0,
      x: isNext ? -1000 : 1000,
      opacity: 0,
    };
  },
};
interface IWorkModal {
  callback: () => void;
  workIdx: number;
}
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
function WorkModal({ callback, workIdx }: IWorkModal) {
  const { name, color, img, git, url, skill, des, imgList } = workList[workIdx];
  const [isNext, setIsNext] = useState(true);
  const [idx, setIdx] = useState(0);
  const handleDragImg = (offset: Point, velocity: Point) => {
    const swipe = swipePower(offset.x, velocity.x);
    if (swipe < -swipeConfidenceThreshold) {
      handleNextImg(true);
    } else if (swipe > swipeConfidenceThreshold) {
      handleNextImg(false);
    }
  };
  const handleNextImg = (next: boolean) => {
    if (next) {
      setIsNext(true);
      if (idx + 1 === imgList?.length) {
        setIdx(0);
      } else {
        setIdx((prev) => prev + 1);
      }
    } else {
      setIsNext(false);
      if (idx - 1 < 0 && imgList) {
        setIdx(imgList?.length - 1);
      } else {
        setIdx((prev) => prev - 1);
      }
    }
  };
  return (
    <ModalContainer>
      <LayoutBack onClick={callback} />
      <Modalcover layoutId="content">
        <AnimatePresence initial={false} custom={isNext}>
          <ImgCards>
            {imgList ? (
              <>
                <ImageContainer
                  key={idx}
                  custom={isNext}
                  variants={rowVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 1, right: 1 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) =>
                    handleDragImg(offset, velocity)
                  }
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/img/data/${imgList[idx]}.gif)`,
                  }}
                />

                <ButtonSection>
                  <Button onClick={() => handleNextImg(false)}>
                    <i className="fa-solid fa-angle-left" />
                  </Button>
                  <Button onClick={() => handleNextImg(true)}>
                    <i className="fa-solid fa-angle-right" />
                  </Button>
                </ButtonSection>
              </>
            ) : (
              <Work work={workList[workIdx]} />
            )}
          </ImgCards>
        </AnimatePresence>
        <Description>
          <Title className="title">{name}</Title>
          <LinkSection>
            {skill.map((s) => (
              <Label key={s} className={s}>
                {s}
              </Label>
            ))}
          </LinkSection>
          <Border />
          <DexUl>{des}</DexUl>
          <ButtonSection2>
            <a href={url} target="_blank" rel="noreferrer">
              View Site
            </a>
            <a href={git} target="_blank" rel="noreferrer">
              GitHub Storage
            </a>
          </ButtonSection2>
        </Description>
      </Modalcover>
    </ModalContainer>
  );
}

export default WorkModal;
