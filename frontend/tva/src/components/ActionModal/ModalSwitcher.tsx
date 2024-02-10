import React from 'react';
import DiaryModal from './DiaryModal';
import FamilyVideoModal from './FamilyVideoModal';
import GymnasticsModal from './GymnasticsModal';
import QuizModal from './QuizModal';
import ScheduleModal from './ScheduleModal';

interface ModalSwitcherComponentProps {
  activeModal: number | null;
}

const ModalSwitcherComponent: React.FC<ModalSwitcherComponentProps> =
  React.memo(({ activeModal }) => (
    <div>
      {activeModal === 1 && <GymnasticsModal />}
      {activeModal === 2 && <QuizModal />}
      {activeModal === 3 && <DiaryModal />}
      {activeModal === 4 && <ScheduleModal />}
      {activeModal === 5 && <FamilyVideoModal />}
    </div>
  ));

export default ModalSwitcherComponent;
