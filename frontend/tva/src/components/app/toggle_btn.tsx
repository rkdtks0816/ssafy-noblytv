import React, { useState } from 'react';
import ToggleBtnS from './styles/toggle_btn_style';

interface ToggleBtnProps {
  optionLeft: string;
  optionRight: string;
}

function ToggleBtn({ optionLeft, optionRight }: ToggleBtnProps){
  const [selectedType, setSelectedType] = useState<string>("");

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginLeft: 'auto', marginTop: '70px' }}>
      <ToggleBtnS style={{ borderRadius: '10px 0 0 10px', backgroundColor: selectedType === 'left' ? '#eac164' : '#FFFFFF' }} onClick={() => setSelectedType('left')}>
        {optionLeft}
      </ToggleBtnS>
      <ToggleBtnS style={{ borderRadius: '0 10px 10px 0', backgroundColor: selectedType === 'right' ? '#eac164' : '#FFFFFF' }} onClick={() => setSelectedType('right')}>
        {optionRight}
      </ToggleBtnS>
    </div>
  );
};

export default ToggleBtn;
