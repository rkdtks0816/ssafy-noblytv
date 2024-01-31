import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import SmallBtnStyle from '../SmallBtn/SmallBtnStyle';

function CardHeader() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    axios
      .get('http://3.38.153.237:8080/users/family/flos9537')
      .then(response => {
        setUsername(response.data); // 타입 지정 필요
      })
      .catch(err => {
        console.error('사용자 이름을 가져오는 데 실패했습니다.', err);
      });
  }, []); // 빈 의존성 배열을 사용하여 마운트 시에만 요청.

  const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start; // 상단에 정렬
    width: 90%;
  `;

  return (
    <HeaderContainer>
      <div>{username} 유저네임 </div>
      <SmallBtnStyle>삭제</SmallBtnStyle>
    </HeaderContainer>
  );
}

export default CardHeader;
