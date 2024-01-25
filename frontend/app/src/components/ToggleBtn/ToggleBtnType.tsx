interface ToggleBtnType {
  optionLeft: string;
  optionRight: string;
  initType: string;
  onToggle: (selected: string) => void; // 콜백 함수 prop 추가
}

interface ToggleBtnProps {
  toggleBtnType: string;
  isSelected: boolean;
}

export type { ToggleBtnType, ToggleBtnProps };
