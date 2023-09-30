import { styled } from 'styled-components';
import { IWork } from '../data';

const WorkContentContainer = styled.div`
  width: 100%;
  aspect-ratio: 10 / 7;
  height: 100%;
  position: relative;
  background-color: #fff;
  cursor: pointer;
`;
const WorkContentBack = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.7;
`;
const WorkContentWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const PcContainer = styled.div`
  width: 80%;
  padding: 2.5%;
  border-radius: 0.5rem;
  position: absolute;
  background-color: #fff;
  top: 10%;
  left: 7%;
  box-shadow: inset -3px -3px 8px rgba(0, 0, 0, 0.2),
    inset 1px 1px 4px rgba(0, 0, 0, 0.05), 2px 2px 5px rgba(0, 0, 0, 0.2);
`;
const PcImg = styled.img`
  border-radius: 0.4rem;
  width: 100%;
  box-shadow: -1px -1px 4px rgba(0, 0, 0, 0.2),
    2px 2px 6px rgba(255, 255, 255, 0.3);
`;
const MobileContainer = styled.div`
  width: 20%;
  padding: 1.5%;
  border-radius: 0.5rem;
  position: absolute;
  bottom: 10%;
  right: 7%;
  background-color: #fff;
  box-shadow: inset -1px -1px 4px rgba(0, 0, 0, 0.2),
    3px 3px 7px rgba(0, 0, 0, 0.2);
  &.middle {
    animation: updown 01.6s ease infinite;
  }

  @keyframes updown {
    0%,
    100% {
      transform: translateY(-5%);
    }
    50% {
      transform: translateY(0%);
    }
  }
`;
const MobileImg = styled.img`
  border-radius: 0.4rem;
  width: 100%;
  box-shadow: -1px -1px 2px rgba(0, 0, 0, 0.2),
    1px 1px 3px rgba(255, 255, 255, 0.2);
`;
interface IWorkData {
  work: IWork;
  isMiddle?: boolean;
}

function Work({ work, isMiddle = false }: IWorkData) {
  const backColor = {
    backgroundColor: `${work.color}`,
  };
  return (
    <WorkContentContainer>
      <WorkContentBack style={backColor} />
      <WorkContentWrap>
        <PcContainer style={backColor}>
          <PcImg
            src={`${process.env.PUBLIC_URL}/img/data/${work.img[0]}.png`}
            alt={work.name}
          />
        </PcContainer>
        <MobileContainer
          className={`${isMiddle && 'middle'}`}
          style={backColor}
        >
          <MobileImg
            src={`${process.env.PUBLIC_URL}/img/data/${work.img[1]}.png`}
            alt={work.name}
          />
        </MobileContainer>
      </WorkContentWrap>
    </WorkContentContainer>
  );
}

export default Work;
