import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BackBtnStyle from '../../../components/BackBtn/BackBtnStyle';
import BgImgStyle from '../../../components/BgImg/BgImgStyle';
import FlexBoxStyle from '../../../components/FlexBox/FlexBoxStyle';
import LargeBtnStyle from '../../../components/LargeBtn/LargeBtnStyle';
import MenuTitleStyle from '../../../components/MenuTitle/MenuTitleStyle';
import { PATH_MY_MAIN, PATH_SELECT_SENIOR } from '../../../constants/constants';
import {
  NoticesListBoxS,
  NoticesListUlS,
  NoticesListLiS,
  NoticesListLiContentsS,
} from './NoticesStyle';

function Notices({ setSubMenu }: { setSubMenu: (subMenu: string) => void }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [uniqueCode, setUniqueCode] = useState('');

  useEffect(() => {
    // URLSearchParams 객체를 생성하여 현재 URL의 쿼리 스트링 파싱
    const queryParams = new URLSearchParams(location.search);
    // queryParams 객체에서 'UniqueCode' 파라미터 값 가져오기
    const uniqueCodeFromUrl = queryParams.get('UniqueCode');
    // 'UniqueCode' 파라미터 값이 존재하면 상태 변수 uniqueCode를 업데이트
    if (uniqueCodeFromUrl) {
      setUniqueCode(uniqueCodeFromUrl);
      navigate(PATH_SELECT_SENIOR, { state: uniqueCode });
    }
  }, [location, navigate, uniqueCode]); // location 객체가 변경될 때마다 이 useEffect 훅을 실행

  const handleBackBtn = () => {
    setSubMenu(PATH_MY_MAIN);
  };

  const handleSubmit = () => {
    setSubMenu('');
  };

  return (
    <BgImgStyle>
      <FlexBoxStyle>
        <BackBtnStyle onClick={handleBackBtn} />
        <MenuTitleStyle>알림</MenuTitleStyle>
        <NoticesListBoxS>
          <NoticesListUlS>
            <NoticesListLiS>
              <NoticesListLiContentsS>
                ⚠ 어르신 낙상이 감지되었습니다.
              </NoticesListLiContentsS>
            </NoticesListLiS>
            <NoticesListLiS>
              <NoticesListLiContentsS>
                어르신 체조 영상을 확인하세요!
              </NoticesListLiContentsS>
            </NoticesListLiS>
            <NoticesListLiS>
              <NoticesListLiContentsS>
                가족이 게시글을 등록했습니다.
              </NoticesListLiContentsS>
            </NoticesListLiS>
          </NoticesListUlS>
        </NoticesListBoxS>
      </FlexBoxStyle>
      <FlexBoxStyle>
        <LargeBtnStyle style={{ marginBottom: '10vh' }} onClick={handleSubmit}>
          확인
        </LargeBtnStyle>
      </FlexBoxStyle>
    </BgImgStyle>
  );
}

export default Notices;
