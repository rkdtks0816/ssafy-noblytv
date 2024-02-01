import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

interface ManageAuthTokenProps {
  handleNavigate: ReturnType<typeof useNavigate>;
  targetUrl: string;
  state?: any;
}
function manageAuthToken({
  handleNavigate,
  targetUrl,
  state,
}: ManageAuthTokenProps) {
  const authToken = Cookies.get('authToken');

  // 토큰이 없으면 로그인 페이지로 이동
  if (!authToken) {
    handleNavigate(targetUrl, { state });
  } else {
    // 토큰이 있으면 쿠키에 저장 (또는 갱신)
    Cookies.set('authToken', authToken, { expires: 7 });
  }
}

export default manageAuthToken;
