import { useState } from 'react';
import {
  ChildModalBg,
  ChildModalTitle,
  ChildModalContent,
  ChildModalImg,
} from './ChildModalStyles';

function ChildModal() {
  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  return (
    <div>
      <button type="button" onClick={toggleModal}>
        Open Modal
      </button>
      <ChildModalBg style={{ right: isModalOpen ? '3vw' : '-100%' }}>
        <ChildModalTitle>할아버지!</ChildModalTitle>
        <ChildModalContent>움직일 시간이야!</ChildModalContent>
        <ChildModalImg />
      </ChildModalBg>
    </div>
  );
}

export default ChildModal;
