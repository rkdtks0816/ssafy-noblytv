import { create } from 'zustand';

interface ReloadStoreState {
  reload: boolean;
  setReload: (trigger: boolean) => void;
}

const useReloadStore = create<ReloadStoreState>(set => ({
  reload: false,
  setReload: trigger => set({ reload: trigger }),
}));

export default useReloadStore;
