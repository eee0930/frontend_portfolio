import { motion } from 'framer-motion';
import styled from 'styled-components';
import { workList } from '../data';

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
  top: calc(50% - 250px);
  left: calc(50% - 325px);
  height: 500px;
  width: 650px;
  background-color: #fff;
  border-radius: 2rem;
`;
interface IWorkModal {
  callback: () => void;
  workIdx: number;
}
function WorkModal({ callback, workIdx }: IWorkModal) {
  return (
    <ModalContainer>
      <LayoutBack onClick={callback} />
      <Modalcover layoutId="content">
        <img
          src={`${process.env.PUBLIC_URL}/img/${workIdx}.jpg`}
          alt="hwayeon"
        />
      </Modalcover>
    </ModalContainer>
  );
}

export default WorkModal;
