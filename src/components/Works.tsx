import { useState } from 'react';
import { styled } from 'styled-components';
import GrungeContainer from './GrungeContianer';
import { workList } from '../data';
import { AnimatePresence, motion } from 'framer-motion';
import WorkModal from './WorkModal';
import Work from './Work';

const WorksContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  @media (min-width: 991.5px) {
    width: 90%;
  }
`;
const Title = styled.div`
  position: absolute;
  top: 10rem;
  left: 0;
  font-size: 20px;
  width: 100%;
  text-align: center;
  font-weight: bold;
  color: #2a2c40;
  text-transform: uppercase;
  @media (min-width: 991.5px) {
    padding-left: 3rem;
    text-align: left;
    width: 30%;
  }
`;
const TickerContainer = styled.div`
  width: 100%;
  z-index: 20;
`;
const ButtonSection = styled.div`
  text-align: center;
  padding: 3rem;
  align-self: center;
`;
const Button = styled.button`
  border: 2px solid #2a2c40;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  font-size: 1.5rem;
  background-color: #c6cbdc;
  color: #2a2c40;
  position: relative;
  transition: background-color 0.3s ease, color 0.3s ease;
  z-index: 25;
  &:hover {
    color: #c6cbdc;
    background-color: #2a2c40;
  }
`;
const TickerWrapper = styled.div`
  width: 100%;
`;
const TickerOneCollection = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SideItem = styled(motion.div)`
  width: 300px;
  margin: 0 0.1rem;
  border-radius: 1rem;
  overflow: hidden;
  @media (min-width: 991.5px) {
    margin: 0 0.5rem;
  }
`;
const MiddleItem = styled(motion.div)`
  width: 500px;
  margin: 0 0.1rem;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  overflow: hidden;
  @media (min-width: 991.5px) {
    margin: 0 0.5rem;
  }
  @media (min-width: 1199.5px) {
    margin: 0 1.5rem;
  }
`;

export const tickerOneVariants = {
  initial: (isNext: boolean) => {
    return { x: isNext ? 100 : -100 };
  },

  animate: {
    x: 0,
  },
  end: (isNext: boolean) => {
    return { x: isNext ? -100 : 100 };
  },
};
export const hideItem = {
  initial: (isNext: boolean) => {
    return {
      scale: isNext ? 1.3 : 0.8,
      zIndex: isNext ? 2 : 0,
    };
  },
  animate: {
    scale: 1,
    zIndex: 1,
  },
  end: (isNext: boolean) => {
    return {
      scale: isNext ? 0.8 : 1.3,
      zIndex: isNext ? 0 : 2,
    };
  },
};
export const middleItem = {
  initial: { scale: 1, zIndex: 1 },
  animate: {
    scale: 1.3,
    zIndex: 2,
  },
  end: {
    scale: 1,
    zIndex: 1,
  },
};
export const biggerItem = {
  initial: (isNext: boolean) => {
    return {
      scale: isNext ? 0.8 : 1.3,
      zIndex: isNext ? 0 : 2,
    };
  },
  animate: {
    scale: 1,
    zIndex: 1,
  },
  end: (isNext: boolean) => {
    return {
      scale: isNext ? 1.3 : 0.8,
      zIndex: isNext ? 2 : 0,
    };
  },
};
function Works() {
  const [idx, setIdx] = useState([0, 1, 2]);
  const [isNext, setIsNext] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [workIdx, setWorkIdx] = useState(0);

  const changeIdx = (next: boolean) => {
    setIdx((prev) => {
      const len = workList.length as number;
      let newIdx: number[];
      if (next) {
        setIsNext(true);
        newIdx = Array.from(prev, (idx) =>
          idx + 1 >= len ? idx - len + 1 : idx + 1
        );
      } else {
        setIsNext(false);
        newIdx = Array.from(prev, (idx) =>
          idx - 1 < 0 ? idx - 1 + len : idx - 1
        );
      }
      return newIdx;
    });
  };
  const handleClickWork = (workIdx: number) => {
    setWorkIdx(workIdx);
    setModalOpen(true);
  };

  return (
    <>
      <GrungeContainer idx={0}>
        <WorksContainer>
          <TickerContainer className="row">
            <Title>Selected Project (6)</Title>
            <ButtonSection className="d-none d-lg-inline-block col-lg-2">
              <Button onClick={() => changeIdx(false)}>
                <i className="fa-solid fa-angle-left" />
              </Button>
            </ButtonSection>
            <AnimatePresence initial={false} custom={isNext}>
              <TickerWrapper className="col-12 col-lg-8">
                <TickerOneCollection
                  key={idx[0]}
                  variants={tickerOneVariants}
                  initial="initial"
                  animate="animate"
                  exit="end"
                  transition={{
                    ease: 'linear',
                    duration: 0.3,
                  }}
                  custom={isNext}
                >
                  <SideItem
                    variants={hideItem}
                    transition={{
                      duration: 0.6,
                      delay: 0.1,
                    }}
                    custom={isNext}
                    onClick={() => changeIdx(false)}
                  >
                    <Work work={workList[idx[0]]} />
                  </SideItem>
                  <MiddleItem
                    variants={middleItem}
                    transition={{
                      duration: 0.3,
                      delay: 0.1,
                    }}
                    layoutId="content"
                    onClick={() => handleClickWork(idx[1])}
                  >
                    <Work work={workList[idx[1]]} isMiddle={true} />
                  </MiddleItem>
                  <SideItem
                    variants={biggerItem}
                    transition={{
                      duration: 0.5,
                      delay: 0.1,
                    }}
                    custom={isNext}
                    onClick={() => changeIdx(true)}
                  >
                    <Work work={workList[idx[2]]} />
                  </SideItem>
                </TickerOneCollection>
              </TickerWrapper>
            </AnimatePresence>
            <ButtonSection className="d-none d-lg-inline-block col-lg-2">
              <Button onClick={() => changeIdx(true)}>
                <i className="fa-solid fa-angle-right" />
              </Button>
            </ButtonSection>
          </TickerContainer>
        </WorksContainer>
      </GrungeContainer>

      {modalOpen && (
        <WorkModal callback={() => setModalOpen(false)} workIdx={workIdx} />
      )}
    </>
  );
}

export default Works;
