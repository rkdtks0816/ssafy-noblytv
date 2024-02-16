import useModalContentsStore from '../../store/useModalContents';
import {
  ModalBgS,
  ModalBoxS,
  ModalContentsS,
  ModalButtonS,
} from './ModalStyle';

function Modal() {
  const { modalContents, setModalContents } = useModalContentsStore();
  const handleBtnClick = () => {
    setModalContents('');
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
