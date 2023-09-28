import { styled } from 'styled-components';
import GrungeContainer from './GrungeContianer';

const JumboTitleConver = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  color: rgb(245, 245, 245);
`;
const CoverWrap = styled.div`
  width: 100%;
  position: relative;
  min-height: 1px;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  align-self: end;
  padding: 1rem 2rem;
`;
const JumboTitle = styled(CoverWrap)`
  font-size: 18vmin;
  line-height: 0.9;
  font-weight: 900;
  @media (min-width: 991.5px) {
    font-size: 12vmax;
    padding: 1.5rem 1.5rem 3rem 3rem;
    -ms-flex: 0 0 67%;
    flex: 0 0 67%;
    max-width: 67%;
  }
  @media (min-width: 1199.5px) {
    padding: 2rem 2rem 4rem 3rem;
  }
`;
const InfoTitle = styled(CoverWrap)`
  font-size: 3vmax;
  line-height: 1.5;
  @media (min-width: 991.5px) {
    font-size: 3vmin;
    padding: 1.5rem 3rem 1.5rem 1.5rem;
    -ms-flex: 0 0 33%;
    flex: 0 0 33%;
    max-width: 33%;
  }
  @media (min-width: 1199.5px) {
    padding: 2rem 3rem 2rem 2rem;
  }
`;

function Intro() {
  return (
    <GrungeContainer idx={1} isOut={false}>
      <JumboTitleConver className="title">
        <JumboTitle>
          HwaYeon
          <br />
          Song
        </JumboTitle>
        <InfoTitle>
          I am a passionate Front-End Developer who specializes in React.JS,
          TypeScript, JavaScript, and Web Design.
        </InfoTitle>
      </JumboTitleConver>
    </GrungeContainer>
  );
}

export default Intro;
