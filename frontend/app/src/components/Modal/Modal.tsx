import {
  ModalBgS,
  ModalBoxS,
  ModalTitleS,
  ModalContentsS,
  ModalButtonS,
} from './ModalStyle';
import ModalProps from './ModalType';

function Modal({ modalContents, onClickBtn }: ModalProps) {
  const handleBtnClick = () => {
    onClickBtn('');
  };
  return (
    <div>
      <ModalBgS onClick={handleBtnClick}>
        <ModalBoxS>
          <ModalTitleS>경고</ModalTitleS>
          <ModalContentsS>{modalContents}</ModalContentsS>
          <ModalButtonS onClick={handleBtnClick}> 확인</ModalButtonS>
        </ModalBoxS>
      </ModalBgS>
    </div>
  );
}

export default Modal;
