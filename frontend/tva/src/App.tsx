import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import VideoModal from './components/ActionModal/FamilyVideoModal';
import StreamingModal from './components/ChildModal/StreamingModal';
import Diary from './pages/Diary/Diary';
import Overlay from './pages/Overlay/Overlay';
import Quiz from './pages/Quiz/Quiz';
import QuizStart from './pages/Quiz/QuizStart';
import SignInTV from './pages/SignInTV/SignInTV';
import Gymnastics from './pages/gymnastics/Gymnastics';
// App 컴포넌트 내에서 라우터 설정
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Overlay />} />
        <Route path="/sign-in" element={<SignInTV />} />
        {/* gymnastics */}
        <Route path="/gymnastics" element={<Gymnastics />} />
        <Route path="/streaming" element={<StreamingModal />} />
        {/* Quiz */}
        <Route path="/quiz/start" element={<QuizStart />} />
        <Route path="/quiz" element={<Quiz />} />
        {/* Diary */}
        <Route path="/diary" element={<Diary />} />
        {/* Video */}
        <Route path="/video" element={<VideoModal />} />
      </Routes>
    </Router>
  );
}

export default App;
