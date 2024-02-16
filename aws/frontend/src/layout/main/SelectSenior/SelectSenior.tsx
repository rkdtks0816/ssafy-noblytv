import { useEffect, useState } from 'react';
import BackBtnStyle from '../../../components/BackBtn/BackBtnStyle';
import BgImgStyle from '../../../components/BgImg/BgImgStyle';
import FlexBoxStyle from '../../../components/FlexBox/FlexBoxStyle';
import InputBoxStyle from '../../../components/InputBox/InputBoxStyle';
import LargeBtnStyle from '../../../components/LargeBtn/LargeBtnStyle';
import MenuTitleStyle from '../../../components/MenuTitle/MenuTitleStyle';
import ListBox from '../../../components/ListBox/ListBox';
import { PATH_SENIOR_SIGN_UP } from '../../../constants/constants';
import AddSeniorS from '../../../components/AddSenior/AddSeniorS';
import { UserInfoGetOldInfoType } from '../../../types/api_types';
import useOldUserStore from '../../../store/useOldUserStore';

function SelectSenior({
  familyRelations,
  setSubMenu,
}: {
  familyRelations: UserInfoGetOldInfoType[];
  setSubMenu: (subMenu: string) => void;
}) {
  const { setOldUserId, setOldUsername } = useOldUserStore();
  const [showList, setShowList] = useState<string[]>([]);
  const [checkedName, setCheckedName] = useState<string>('');

  useEffect(() => {
    setShowList(
      familyRelations.map(
        familyRelation => familyRelation.oldUserInfo.username,
      ),
    );
  }, [familyRelations]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value;

    const filteredList = familyRelations
      .filter((familyRelation: UserInfoGetOldInfoType) =>
        familyRelation.oldUserInfo.username
          .toLowerCase()
          .includes(searchText.toLowerCase()),
      )
      .map(familyRelation => familyRelation.oldUserInfo.username);
    setShowList(filteredList);
  };

  const handleBackBtn = () => {
    setSubMenu('');
  };

  const handleSubmit = () => {
    const matchingSenior = familyRelations.find(
      familyRelation => familyRelation.oldUserInfo.username === checkedName,
    );
    if (matchingSenior) {
      setOldUserId(matchingSenior.oldUserInfo.userId);
      setOldUsername(matchingSenior.oldUserInfo.username);
      handleBackBtn();
    }
  };

  return (
    <div>
      <BgImgStyle>
        <FlexBoxStyle>
          <BackBtnStyle onClick={handleBackBtn} />
          <MenuTitleStyle>어르신 선택</MenuTitleStyle>
          <InputBoxStyle
            placeholder="성함을 입력하세요."
            style={{ marginTop: '30px' }}
            onChange={handleInputChange}
          />
          <ListBox listContents={showList} CheckList={setCheckedName} />
        </FlexBoxStyle>
        <FlexBoxStyle>
          <LargeBtnStyle
            style={{ marginBottom: '20px' }}
            onClick={handleSubmit}
          >
            완료
          </LargeBtnStyle>
          <AddSeniorS to={PATH_SENIOR_SIGN_UP}>
            어르신을 등록하고 싶어요!
          </AddSeniorS>
        </FlexBoxStyle>
      </BgImgStyle>
    </div>
  );
}

export default SelectSenior;
