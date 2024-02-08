import {
  ModalBgS,
  ModalBoxS,
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
          <ModalContentsS>{modalContents}</ModalContentsS>
          <ModalButtonS onClick={handleBtnClick}> 확인</ModalButtonS>
        </ModalBoxS>
      </ModalBgS>
    </div>
  );
}

export default Modal;
