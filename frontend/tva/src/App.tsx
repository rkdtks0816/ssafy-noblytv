import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import TvLayout from './pages/TvLayout';
// App 컴포넌트 내에서 라우터 설정
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/tv" />} />
        <Route path="/tv" element={<TvLayout />} />
      </Routes>
    </Router>
  );
}

export default App;

