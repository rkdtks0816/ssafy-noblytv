import { useState } from 'react';
import useUserStore from '../../store/user';

function Signup() {
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');

  const addUser = useUserStore(state => state.addUser);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (password1 !== password2) {
      // eslint-disable-next-line no-alert
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    const user = { name, userId, password1, password2, birthday, gender };
    addUser(user);
    // 백엔드 요청 로직 추가 필요
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="이름"
      />
      <input
        type="text"
        value={userId}
        onChange={e => setUserId(e.target.value)}
        placeholder="사용자 ID"
      />
      <input
        type="password"
        value={password1}
        onChange={e => setPassword1(e.target.value)}
        placeholder="비밀번호"
      />
      <input
        type="password"
        value={password2}
        onChange={e => setPassword2(e.target.value)}
        placeholder="비밀번호 확인"
      />
      <input
        type="date"
        value={birthday}
        onChange={e => setBirthday(e.target.value)}
        placeholder="생일"
      />
      <select value={gender} onChange={e => setGender(e.target.value)}>
        <option value="">성별 선택</option>
        <option value="male">남성</option>
        <option value="female">여성</option>
      </select>
      <button type="submit">회원가입</button>
    </form>
  );
}

export default Signup;
