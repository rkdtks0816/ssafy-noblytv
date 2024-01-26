import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
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
// App 컴포넌트 내에서 라우터 설정
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/sign-in" />} />
        {/* SignIn */}
        <Route path="/sign-in" element={<SignIn />} />
        {/* sign_up */}
        <Route path="/sign-up/name-id" element={<NameId />} />
        <Route path="/sign-up/password" element={<Password />} />
        <Route path="/sign-up/birthday" element={<Birthday />} />
        {/* SeniorConnect */}
        <Route path="/senior-connect" element={<SeniorConnect />} />
        {/* senior_sign_up */}
        <Route
          path="/senior-sign-up/name-gender"
          element={<SeniorNameGender />}
        />
        <Route path="/senior-sign-up/birth" element={<SeniorBirth />} />
        <Route
          path="/senior-sign-up/unique-code"
          element={<SeniorUniqueCode />}
        />
        {/* ConnectTv */}
        <Route path="/connect-tv" element={<ConnectTv />} />
        {/* SelectSenior */}
        <Route path="/select-senior" element={<SelectSenior />} />
        {/* Community */}
        <Route path="/community" element={<Community />} />
      </Routes>
    </Router>
  );
}

export default App;
