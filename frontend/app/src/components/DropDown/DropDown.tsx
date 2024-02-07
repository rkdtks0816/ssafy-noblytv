import { useState } from 'react';
import { DropDownSelectS, DropDownOptionS } from './DropDownStyle';

function DropDown({
  initValue,
  options,
  setSelected,
}: {
  initValue: string;
  options: string[];
  setSelected: (value: string) => void;
}) {
  const [isClick, setIsClick] = useState<boolean>(false);

  return (
    <DropDownSelectS>
      {!isClick && (
        <DropDownOptionS onClick={() => setIsClick(prev => !prev)}>
          {initValue}
        </DropDownOptionS>
      )}
      {isClick &&
        options.map(option => (
          <DropDownOptionS
            key={option}
            onClick={() => {
              setSelected(option);
              setIsClick(prev => !prev);
            }}
          >
            {option}
          </DropDownOptionS>
        ))}
    </DropDownSelectS>
  );
}

export default DropDown;
