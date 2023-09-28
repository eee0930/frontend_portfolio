import { AnimatePresence, motion } from 'framer-motion';
import { styled } from 'styled-components';

const TickerWrap = styled.div`
  width: 100%;
  overflow: hidden;
`;

const TickerCollection = styled(motion.div)`
  display: inline-flex;
`;

const tickerVariants = {
  initial: { x: 0 },
  animate: ({ imgWidth, len }: ICuston) => {
    const width = imgWidth * len * -1 - len;
    return {
      x: width + 'rem',
      transition: { duration: 30, ease: 'linear', repeat: Infinity },
    };
  },
};

interface ICuston {
  imgWidth: number;
  len: number;
}
interface TickerProps {
  children: JSX.Element[];
  width: number;
}
export const Ticker = ({ children, width }: TickerProps) => {
  const imgWidth = width;
  const len = children.length;
  return (
    <TickerWrap>
      <AnimatePresence custom={{ imgWidth, len }}>
        <TickerCollection
          variants={tickerVariants}
          initial="initial"
          animate="animate"
          custom={{ imgWidth, len }}
        >
          {children}
          {children}
        </TickerCollection>
      </AnimatePresence>
    </TickerWrap>
  );
};
