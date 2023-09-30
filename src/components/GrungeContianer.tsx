import styled from 'styled-components';
import { COLORS } from '../data';

const BackgroundColorContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: 64px;
  background-repeat: repeat;
  opacity: 0.1;
  border-radius: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

interface IGrungeContainer {
  children: React.ReactNode;
  idx: number;
  isOut?: boolean;
}

function GrungeContainer({ children, idx, isOut = true }: IGrungeContainer) {
  return (
    <BackgroundColorContainer
      style={{
        backgroundColor: COLORS[idx],
      }}
    >
      {!isOut && children}
      <BackgroundContainer
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/img/grunge_back.png)`,
        }}
      />
      {isOut && children}
    </BackgroundColorContainer>
  );
}

export default GrungeContainer;
