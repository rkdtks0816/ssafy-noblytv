import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import {
  PATH_SIGN_IN,
  PATH_SIGN_UP_BIRTH,
  PATH_SIGN_UP_NAME_ID,
  PATH_SIGN_UP_PASSWORD,
  PATH_SENIOR_CONNECT,
  PATH_SENIOR_SIGN_UP_NAME_GENDER,
  PATH_SENIOR_SIGN_UP_BIRTH,
  PATH_SENIOR_SIGN_UP_UNIQUE_CODE,
  PATH_CONNECT_TV,
  PATH_SELECT_SENIOR,
  PATH_COMMUNITY,
  PATH_DATETIME,
} from './constants/api';
import SignIn from './pages/SignIn/SignIn';
import Birthday from './pages/sign_up/Birth';
import NameId from './pages/sign_up/NameId';
import Password from './pages/sign_up/Password';
import SeniorConnect from './pages/SeniorConnect/SeniorConnect';
import ConnectTv from './pages/ConnectTv/ConnectTv';
import SelectSenior from './pages/SelectSenior/SelectSenior';
import SeniorNameGender from './pages/senior_sign_up/SeniorNameGender';
import SeniorBirth from './pages/senior_sign_up/SeniorBirth';
import SeniorUniqueCode from './pages/senior_sign_up/SeniorUniqueCode';
import Community from './pages/community/community';
import Datetime from './pages/datetime/Datetime';
// App 컴포넌트 내에서 라우터 설정
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to={PATH_SIGN_IN} />} />
        {/* SignIn */}
        <Route path={PATH_SIGN_IN} element={<SignIn />} />
        {/* sign_up */}
        <Route path={PATH_SIGN_UP_NAME_ID} element={<NameId />} />
        <Route path={PATH_SIGN_UP_PASSWORD} element={<Password />} />
        <Route path={PATH_SIGN_UP_BIRTH} element={<Birthday />} />
        {/* SeniorConnect */}
        <Route path={PATH_SENIOR_CONNECT} element={<SeniorConnect />} />
        {/* senior_sign_up */}
        <Route
          path={PATH_SENIOR_SIGN_UP_NAME_GENDER}
          element={<SeniorNameGender />}
        />
        <Route path={PATH_SENIOR_SIGN_UP_BIRTH} element={<SeniorBirth />} />
        <Route
          path={PATH_SENIOR_SIGN_UP_UNIQUE_CODE}
          element={<SeniorUniqueCode />}
        />
        {/* ConnectTv */}
        <Route path={PATH_CONNECT_TV} element={<ConnectTv />} />
        {/* SelectSenior */}
        <Route path={PATH_SELECT_SENIOR} element={<SelectSenior />} />
        {/* Community */}
        <Route path={PATH_COMMUNITY} element={<Community />} />
        {/* Datetime */}
        <Route path={PATH_DATETIME} element={<Datetime />} />
      </Routes>
    </Router>
  );
}

export default App;
