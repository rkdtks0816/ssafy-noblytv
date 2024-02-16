import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {
  PATH_SIGN_IN,
  PATH_SENIOR_CONNECT,
  PATH_SENIOR_UNIQUE_CODE,
  PATH_CONNECT_TV,
  PATH_MAIN,
  PATH_SIGN_UP,
  PATH_SENIOR_SIGN_UP,
} from './constants/constants';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import SeniorConnect from './pages/SeniorConnect/SeniorConnect';
import ConnectTv from './pages/ConnectTv/ConnectTv';
import SeniorUniqueCode from './pages/SeniorUniqueCode.tsx/SeniorUniqueCode';
import Main from './pages/Main/Main';
import SeniorSignUp from './pages/SeniorSignUp/SeniorSignUp';
// App 컴포넌트 내에서 라우터 설정
function App() {
  return (
    <Router>
      <Routes>
        {/* SignIn */}
        <Route path={PATH_SIGN_IN} element={<SignIn />} />
        {/* SignUp */}
        <Route path={PATH_SIGN_UP} element={<SignUp />} />
        {/* SeniorConnect */}
        <Route path={PATH_SENIOR_CONNECT} element={<SeniorConnect />} />
        {/* SeniorSignUp */}
        <Route path={PATH_SENIOR_SIGN_UP} element={<SeniorSignUp />} />
        {/* SeniorUniqueCode */}
        <Route path={PATH_SENIOR_UNIQUE_CODE} element={<SeniorUniqueCode />} />
        {/* Main */}
        <Route path={PATH_MAIN} element={<Main />} />
        {/* ConnectTv */}
        <Route path={PATH_CONNECT_TV} element={<ConnectTv />} />
      </Routes>
    </Router>
  );
}

export default App;
