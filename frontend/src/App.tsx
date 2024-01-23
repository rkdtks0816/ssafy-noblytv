import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import TvLayout from './pages/tv';
import SignIn from './pages/app/sign_in/sign_in';
import NameId from './pages/app/sign_up/name_id';
import Community from './pages/app/community/community';
// App 컴포넌트 내에서 라우터 설정
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/app/sign-in" />} />
        <Route path="/tv" element={<TvLayout />} />
        <Route path="/app/sign-in" element={<SignIn />} />
        <Route path="/app/sign-up/name-id" element={<NameId />} />
          <Route path="/app/sign-up/pw" element={<PW />} />
          <Route path="/app/sign-up/birthday" element={<Birthday />} />
        <Route path="/app/community" element={<Community />} />
      </Routes>
    </Router>
  );
}

export default App;
