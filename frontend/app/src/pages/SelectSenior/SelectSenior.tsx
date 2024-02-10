import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import BackBtnStyle from '../../components/BackBtn/BackBtnStyle';
import BgImgStyle from '../../components/BgImg/BgImgStyle';
import FlexBoxStyle from '../../components/FlexBox/FlexBoxStyle';
import InputBoxStyle from '../../components/InputBox/InputBoxStyle';
import LargeBtnStyle from '../../components/LargeBtn/LargeBtnStyle';
import MenuTitleStyle from '../../components/MenuTitle/MenuTitleStyle';
import ListBox from '../../components/ListBox/ListBox';
import manageAuthToken from '../../utils/manageAuthToken';
import {
  PATH_MAIN,
  PATH_SENIOR_CONNECT,
  PATH_SENIOR_SIGN_UP_NAME_GENDER,
  PATH_SIGN_IN,
} from '../../constants/constants';
import AddSeniorS from '../../components/AddSenior/AddSeniorS';
import getUserInfo from '../../utils/getUserInfo';
import { UserInfoGetOldInfoType } from '../../types/api_types';

function SelectSenior() {
  const location = useLocation();
  const navigate = useNavigate();

  const [oldUserInfo, setOldUserInfo] = useState<UserInfoGetOldInfoType[]>([]);
  const [oldUsernames, setOldUsernames] = useState<string[]>([]);
  const [showList, setShowList] = useState<string[]>([]);
  const [checkedName, setCheckedName] = useState<string>('');

  useEffect(() => {
    manageAuthToken({
      handleNavigate: () => navigate(PATH_SIGN_IN),
    });
  }, [navigate]);

  useEffect(() => {
    getUserInfo({
      successFunc: userInfoData => {
        if (!userInfoData.lastVisitedId) {
          navigate(PATH_SENIOR_CONNECT);
        } else {
          const oldUsernamesData = userInfoData.familyRelations.map(
            senior => senior.oldUserInfo.username,
          );
          setOldUserInfo(userInfoData.familyRelations);
          setOldUsernames(oldUsernamesData);
          setShowList(oldUsernamesData);
        }
      },
    }).catch((error: Error) => console.error('Axios error:', error));
  }, [navigate]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value;

    const filteredList = oldUsernames.filter(oldUsername =>
      oldUsername.toLowerCase().includes(searchText.toLowerCase()),
    );
    setShowList(filteredList);
  };

  const handleBackBtn = () => {
    navigate(location.state as string);
  };

  const handleSubmit = () => {
    const matchingSenior = oldUserInfo.find(
      senior => senior.oldUserInfo.username === checkedName,
    );
    if (matchingSenior) {
      Cookies.set('oldUserId', matchingSenior.oldUserInfo.userId);
      Cookies.set('oldUsername', matchingSenior.oldUserInfo.username);
      navigate(PATH_MAIN);
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
          <AddSeniorS to={PATH_SENIOR_SIGN_UP_NAME_GENDER}>
            어르신을 등록하고 싶어요!
          </AddSeniorS>
        </FlexBoxStyle>
      </BgImgStyle>
    </div>
  );
}

export default SelectSenior;
