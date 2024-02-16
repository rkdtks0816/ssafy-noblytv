import { useState } from 'react';
import { ListBoxS, ListBoxUlS, ListBoxLiS, CheckIconS } from './ListBoxStyle';
import ListBoxType from './ListBoxType';

function ListBox({ listContents, CheckList }: ListBoxType) {
  const [checkedName, setCheckedName] = useState<string>('');
  const handleChecked = (listContent: string) => {
    setCheckedName(listContent);
    CheckList(listContent);
  };
  return (
    <ListBoxS>
      <ListBoxUlS>
        {listContents.map(listContent => (
          <ListBoxLiS
            key={listContent}
            onClick={() => handleChecked(listContent)}
          >
            {listContent}
            {checkedName === listContent && <CheckIconS />}
          </ListBoxLiS>
        ))}
      </ListBoxUlS>
    </ListBoxS>
  );
}
export default ListBox;
