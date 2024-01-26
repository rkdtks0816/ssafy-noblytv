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
