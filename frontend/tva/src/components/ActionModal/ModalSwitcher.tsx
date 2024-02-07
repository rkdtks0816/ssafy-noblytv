import React from 'react';
import DiaryModal from './DiaryModal';
import GymnasticsModal from './GymnasticsModal';
import QuizModal from './QuizModal';

interface ModalSwitcherComponentProps {
  activeModal: number | null;
}

const ModalSwitcherComponent: React.FC<ModalSwitcherComponentProps> =
  React.memo(({ activeModal }) => (
    <div>
      {activeModal === 1 && <GymnasticsModal />}
      {activeModal === 2 && <QuizModal />}
      {activeModal === 3 && <DiaryModal />}
    </div>
  ));

export default ModalSwitcherComponent;
