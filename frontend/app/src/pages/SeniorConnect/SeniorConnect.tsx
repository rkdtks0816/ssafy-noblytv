import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import BackBtnStyle from '../../components/BackBtn/BackBtnStyle';
import BgImgStyle from '../../components/BgImg/BgImgStyle';
import FlexBoxStyle from '../../components/FlexBox/FlexBoxStyle';
import InputBoxStyle from '../../components/InputBox/InputBoxStyle';
import LargeBtnStyle from '../../components/LargeBtn/LargeBtnStyle';
import MenuTitleStyle from '../../components/MenuTitle/MenuTitleStyle';
import AddSeniorS from './SeniorConnectStyle';
import Modal from '../../components/Modal/Modal';
import {
  API_FAMILY,
  API_PORT,
  BASE_URL,
  API_FAMILY,
  API_PORT,
  BASE_URL,
  PATH_COMMUNITY,
  PATH_SENIOR_SIGN_UP_NAME_GENDER,
  PATH_SIGN_IN,
} from '../../constants/constants';
import manageAuthToken from '../../utils/manageAuthToken';
import getUserInfo from '../../utils/getUserInfo';

function SeniorConnect() {
  const navigate = useNavigate();
  const grantType = Cookies.get('grantType');
  const accessToken = Cookies.get('accessToken');
  const userId = Cookies.get('userId');
  const grantType = Cookies.get('grantType');
  const accessToken = Cookies.get('accessToken');
  const userId = Cookies.get('userId');

  const [oldUserId, setOldUserId] = useState('');
  const [oldUserIds, setOldUserIds] = useState<string[]>([]);
  const [oldUserId, setOldUserId] = useState('');
  const [oldUserIds, setOldUserIds] = useState<string[]>([]);
  const [modalContents, setModalContents] = useState<React.ReactNode>('');
  // 로그인 확인
  useEffect(() => {
    manageAuthToken({
      handleNavigate: () => navigate(PATH_SIGN_IN, { state: PATH_COMMUNITY }),
    });
  }, [navigate]);

  useEffect(() => {
    getUserInfo({
      successFunc: userInfoData => {
        setOldUserIds(
          userInfoData.familyRelations.map(item => item.oldUserInfo.userId),
        );
      },
    }).catch((error: Error) => console.error('Axios error:', error));
  }, []);

  useEffect(() => {
    getUserInfo({
      successFunc: userInfoData => {
        setOldUserIds(
          userInfoData.familyRelations.map(item => item.oldUserInfo.userId),
        );
      },
    }).catch((error: Error) => console.error('Axios error:', error));
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOldUserId(event.target.value);
    setOldUserId(event.target.value);
  };

  const handleBackBtn = () => {
    navigate(PATH_COMMUNITY);
  };

  const handleSubmit = () => {
    setOldUserIds([...oldUserIds, oldUserId]);
    console.log(oldUserId);
    axios
      .put(
        `${BASE_URL}:${API_PORT}${API_FAMILY}/${userId}/oldUsers`,
        oldUserIds,
        {
          headers: {
            Authorization: `${grantType} ${accessToken}`,
            'Content-Type': 'application/json',
          },
        },
      )
      .then(() => {
        Cookies.set('oldUserId', oldUserId, { expires: 7 });
        navigate(PATH_COMMUNITY);
      })
      .catch(err => console.error('Axios error:', err));
  };

  return (
    <div>
      <BgImgStyle>
        <FlexBoxStyle>
          <BackBtnStyle onClick={handleBackBtn} />
          <MenuTitleStyle>어르신 연결</MenuTitleStyle>
          <InputBoxStyle
            placeholder="어르신 고유코드를 입력하세요."
            style={{ marginTop: '70px' }}
            onChange={handleInputChange}
          />
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
      {modalContents && (
        <Modal modalContents={modalContents} onClickBtn={setModalContents} />
      )}
    </div>
  );
}

export default SeniorConnect;
