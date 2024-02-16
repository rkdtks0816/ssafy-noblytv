import { useState } from 'react';
import {
  DropDownSelectS,
  DropDownOptionS,
  DropDownSelectedS,
  DropDownBoxS,
} from './DropDownStyle';

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
    <DropDownBoxS>
      <DropDownSelectedS onClick={() => setIsClick(prev => !prev)}>
        {initValue}
      </DropDownSelectedS>
      <DropDownSelectS>
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
    </DropDownBoxS>
  );
}

export default DropDown;
