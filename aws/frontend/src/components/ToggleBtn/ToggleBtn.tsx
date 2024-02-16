import { useEffect, useState } from 'react';
import { ToggleBtnBoxS, ToggleBtnS } from './ToggleBtnStyle';
import ToggleBtnType from './ToggleBtnType';

function ToggleBtn({
  optionLeft,
  optionRight,
  initType,
  onToggle,
}: ToggleBtnType) {
  const [selectedType, setSelectedType] = useState<string>('');
  useEffect(() => {
    setSelectedType(initType || '');
  }, [initType]);

  const handleToggle = (type: string) => {
    setSelectedType(type);
    onToggle(type);
  };
  return (
    <ToggleBtnBoxS>
      <ToggleBtnS
        $toggleBtnType="left"
        $isSelected={selectedType === 'left'}
        onClick={() => handleToggle('left')}
      >
        {optionLeft}
      </ToggleBtnS>
      <ToggleBtnS
        $toggleBtnType="right"
        $isSelected={selectedType === 'right'}
        onClick={() => handleToggle('right')}
      >
        {optionRight}
      </ToggleBtnS>
    </ToggleBtnBoxS>
  );
}

export default ToggleBtn;
