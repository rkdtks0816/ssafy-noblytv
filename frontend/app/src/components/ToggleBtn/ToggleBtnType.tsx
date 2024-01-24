interface ToggleBtnType {
  optionLeft: string;
  optionRight: string;
}

interface ToggleBtnProps {
  toggleBtnType: string;
  isSelected: boolean;
}

export type { ToggleBtnType, ToggleBtnProps };
