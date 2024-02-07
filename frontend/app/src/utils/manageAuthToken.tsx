import Cookies from 'js-cookie';

function manageAuthToken({ handleNavigate }: { handleNavigate: () => void }) {
  const accessToken = Cookies.get('accessToken');

  // 토큰이 없으면 로그인 페이지로 이동
  if (!accessToken) {
    handleNavigate();
  } else {
    // 토큰이 있으면 쿠키에 저장 (또는 갱신)
    Cookies.set('accessToken', accessToken, { expires: 7 });
  }
}

export default manageAuthToken;
