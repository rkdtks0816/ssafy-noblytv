import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InstallPage from './pages/Install/InstallPage';
import Overlay from './pages/Overlay/Overlay';
// App 컴포넌트 내에서 라우터 설정
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<Overlay />} />
        <Route path="/" element={<InstallPage />} />
      </Routes>
    </Router>
  );
}

export default App;
