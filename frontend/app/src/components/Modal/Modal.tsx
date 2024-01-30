import {
  ModalBgS,
  ModalBoxS,
  ModalTitleS,
  ModalContentsS,
  ModalButtonS,
} from './ModalStyle';
import ModalProps from './ModalType';

function Modal({ modalContents }: ModalProps) {
  return (
    <div>
      <ModalBgS>
        <ModalBoxS>
          <ModalTitleS>경고</ModalTitleS>
          <ModalContentsS>{modalContents}</ModalContentsS>
          <ModalButtonS> 확인</ModalButtonS>
        </ModalBoxS>
      </ModalBgS>
    </div>
  );
}

export default Modal;
