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
        <Route path="/" element={<SignInTV />} />
        <Route path="/sign-in" element={<Overlay />} />
        {/* gymnastics */}
        <Route path="/gymnastics/start" element={<GymnasticsStart />} />
        <Route path="/gymnastics" element={<Gymnastics />} />
      </Routes>
    </Router>
  );
}

export default App;
