import axios from 'axios';
import { useState, useEffect } from 'react';
import SmallBtnStyle from '../SmallBtn/SmallBtnStyle';

function CardHeader() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    axios
      .get('http://3.38.153.237:8080/')
      .then(response => {
        setUsername(response.data); // 타입 지정 필요
      })
      .catch(err => {
        console.error('사용자 이름을 가져오는 데 실패했습니다.', err);
      });
  }, []); // 빈 의존성 배열을 사용하여 마운트 시에만 요청.

  return (
    <div>
      <span>{username} 유저네임 </span>
      <SmallBtnStyle>삭제</SmallBtnStyle>
    </div>
  );
}

export default CardHeader;
