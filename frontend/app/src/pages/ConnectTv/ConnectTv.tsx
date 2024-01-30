import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BackBtnStyle from '../../components/BackBtn/BackBtnStyle';
import BgImgStyle from '../../components/BgImg/BgImgStyle';
import FlexBoxStyle from '../../components/FlexBox/FlexBoxStyle';
import InputBoxStyle from '../../components/InputBox/InputBoxStyle';
import LargeBtnStyle from '../../components/LargeBtn/LargeBtnStyle';
import MenuTitleStyle from '../../components/MenuTitle/MenuTitleStyle';
import StatusMsg from '../../components/StatusMsg/StatusMsg';

function ConnectTv() {
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
    }
  }, [location]); // location 객체가 변경될 때마다 이 useEffect 훅을 실행

  const handleBackBtn = () => {
    navigate('/cummunity');
  };

  const handleSubmit = () => {
    navigate('/select-senior');
  };

  return (
    <div>
      <BgImgStyle>
        <FlexBoxStyle>
          <BackBtnStyle onClick={handleBackBtn} />
          <MenuTitleStyle>TV 연결</MenuTitleStyle>
          <InputBoxStyle
            value={uniqueCode}
            placeholder="TV 고유코드를 입력하세요."
            style={{ marginTop: '70px' }}
            onChange={e => setUniqueCode(e.target.value)}
          />
          <StatusMsg
            statusMsgType="error"
            statusMsgContents="TV고유코드가 일치하지 않습니다."
          />
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

export default ConnectTv;
