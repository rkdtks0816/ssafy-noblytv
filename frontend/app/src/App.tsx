import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import SignIn from './pages/SignIn/SignIn';
import NameId from './pages/SignUp/NameId';
import Password from './pages/SignUp/Password';
import Birthday from './pages/SignUp/Birth';
// import Community from './pages/app/community/community';
// import SeniorConect from './pages/app/sign_up/senior_conect';
// App 컴포넌트 내에서 라우터 설정
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/sign-in" />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up/name-id" element={<NameId />} />
        <Route path="/sign-up/password" element={<Password />} />
        <Route path="/sign-up/birthday" element={<Birthday />} />
        {/* <Route path="/sign-up/senior-conect" element={<SeniorConect />} />
        <Route path="/community" element={<Community />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

