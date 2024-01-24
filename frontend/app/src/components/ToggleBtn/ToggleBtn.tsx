import { useState } from 'react';
import { ToggleBtnBoxS, ToggleBtnS } from './ToggleBtnStyle';
import { ToggleBtnType } from './ToggleBtnType';

function ToggleBtn({ optionLeft, optionRight }: ToggleBtnType) {
  const [selectedType, setSelectedType] = useState<string>('');

  return (
    <ToggleBtnBoxS>
      <ToggleBtnS
        toggleBtnType="left"
        isSelected={selectedType === 'left'}
        onClick={() => setSelectedType('left')}
      >
        {optionLeft}
      </ToggleBtnS>
      <ToggleBtnS
        toggleBtnType="right"
        isSelected={selectedType === 'right'}
        onClick={() => setSelectedType('right')}
      >
        {optionRight}
      </ToggleBtnS>
    </ToggleBtnBoxS>
  );
}

export default ToggleBtn;
