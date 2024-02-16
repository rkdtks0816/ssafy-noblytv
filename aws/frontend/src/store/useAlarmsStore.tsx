import { create } from 'zustand';
import { AlarmType } from '../types/api_types';

interface AlarmsStoreState {
  alarms: AlarmType[];
  setAlarms: (setData: AlarmType[]) => void;
}

const useAlarmsStore = create<AlarmsStoreState>(set => ({
  alarms: [],
  setAlarms: setData => {
    set({ alarms: setData });
  },
}));

export default useAlarmsStore;
