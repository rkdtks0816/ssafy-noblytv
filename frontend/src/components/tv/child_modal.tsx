import React, { useState } from 'react';
import { ChildModalBg, ChildModalTitle, ChildModalContent, ChildModalImg } from './styles/child_modal_styles';


const ChildModal: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>
      <ChildModalBg style={{ right: isModalOpen ? '3vw' : '-100%' }}>
        <ChildModalTitle>할아버지!</ChildModalTitle>
        <ChildModalContent>움직일 시간이야!</ChildModalContent>
        <ChildModalImg></ChildModalImg>
      </ChildModalBg>
    </div>
  );
};

export default ChildModal;
