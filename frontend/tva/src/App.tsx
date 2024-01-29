import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInTV from './pages/SignInTV/SignInTV';
import Overlay from './pages/Overlay/Overlay';
// App 컴포넌트 내에서 라우터 설정
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Overlay />} />
        <Route path="/sign-in" element={<SignInTV />} />
      </Routes>
    </Router>
  );
}

export default App;
