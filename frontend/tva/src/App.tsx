import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInTV from './pages/SignInTV/SignInTV';
import Overlay from './pages/Overlay/Overlay';
import GymnasticsStart from './pages/gymnastics/GymnasticsStart';
import Gymnastics from './pages/gymnastics/Gymnastics';
// App 컴포넌트 내에서 라우터 설정
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Overlay />} />
        <Route path="/sign-in" element={<Overlay />} />
      </Routes>
    </Router>
  );
}

export default App;
=========
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TvLayout from './pages/TvLayout';
import InstallPage from './pages/Install/InstallPage';
// App 컴포넌트 내에서 라우터 설정
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InstallPage />} />
        <Route path="/tv" element={<TvLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
>>>>>>>>> Temporary merge branch 2
