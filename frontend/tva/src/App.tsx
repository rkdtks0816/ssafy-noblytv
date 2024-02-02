import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInTV from './pages/SignInTV/SignInTV';
import Overlay from './pages/Overlay/Overlay';
import GymnasticsStart from './pages/gymnastics/GymnasticsStart';
import Gymnastics from './pages/gymnastics/Gymnastics';
import Quiz from './pages/Quiz/Quiz';
import QuizStart from './pages/Quiz/QuizStart';
import Diary from './pages/Diary/Diary';
import OverlayR1 from './pages/Overlay/Overlay_R1';
// App 컴포넌트 내에서 라우터 설정
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Overlay />} />
        <Route path="/R1" element={<OverlayR1 />} />
        <Route path="/sign-in" element={<SignInTV />} />
        {/* gymnastics */}
        <Route path="/gymnastics/start" element={<GymnasticsStart />} />
        <Route path="/gymnastics" element={<Gymnastics />} />
        {/* Quiz */}
        <Route path="/quiz/start" element={<QuizStart />} />
        <Route path="/quiz" element={<Quiz />} />
        {/* Diary */}
        <Route path="/diary" element={<Diary />} />
      </Routes>
    </Router>
  );
}

export default App;
