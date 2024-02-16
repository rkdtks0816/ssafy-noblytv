import { create } from 'zustand';

interface ModalContentsStoreState {
  modalContents: string;
  setModalContents: (setData: string) => void;
}

const useModalContentsStore = create<ModalContentsStoreState>(set => ({
  modalContents: '',
  setModalContents: setData =>
    set({
      modalContents: setData,
    }),
}));

export default useModalContentsStore;
