import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BackBtnStyle from '../../components/BackBtn/BackBtnStyle';
import BgImgStyle from '../../components/BgImg/BgImgStyle';
import FlexBoxStyle from '../../components/FlexBox/FlexBoxStyle';
import InputBoxStyle from '../../components/InputBox/InputBoxStyle';
import LargeBtnStyle from '../../components/LargeBtn/LargeBtnStyle';
import MenuTitleStyle from '../../components/MenuTitle/MenuTitleStyle';
import ListBox from '../../components/ListBox/ListBox';
import SeniorDump from './SeniorDump';
import { PATH_MAIN } from '../../constants/constants';

function SelectSenior() {
  const location = useLocation();
  const navigate = useNavigate();

  const [redirect, setRedirect] = useState<string>('/');
  const [showList, setShowList] = useState<string[]>([]);
  const [checkedName, setCheckedName] = useState<string>('');
  const [checkedid, setcheckedid] = useState<string>('');

  const oldUserNames: string[] = SeniorDump.map(senior => senior.oldUserName);

  useEffect(() => {
    if (location.state && typeof location.state === 'object') {
      setRedirect(location.state.rediecte as string);
    } else {
      setRedirect(PATH_MAIN);
    }
  }, [location.state]);

  useEffect(() => {
    setShowList(oldUserNames);
  }, [oldUserNames]);

  const findOldUserId = () => {
    // checkedName에 해당하는 oldUserId 찾기
    const matchingSenior = SeniorDump.find(
      senior => senior.oldUserName === checkedName,
    );

    // 찾은 경우에는 해당 oldUserId로, 못 찾은 경우에는 빈 문자열로 설정
    const matchingUserId = matchingSenior?.oldUserId || '';
    setcheckedid(matchingUserId);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value;

    const filteredList = oldUserNames.filter(oldUserName =>
      oldUserName.toLowerCase().includes(searchText.toLowerCase()),
    );
    setShowList(filteredList);
  };

  const handleBackBtn = () => {
    navigate(redirect);
  };

  const handleSubmit = () => {
    findOldUserId();
    // eslint-disable-next-line no-console
    console.log(checkedid);
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
            style={{ marginBottom: '10vh' }}
            onClick={handleSubmit}
          >
            다음
          </LargeBtnStyle>
        </FlexBoxStyle>
      </BgImgStyle>
    </div>
  );
}

export default SelectSenior;
