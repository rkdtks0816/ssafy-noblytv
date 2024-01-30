<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Overlay from './pages/Overlay/Overlay';
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
=======
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
>>>>>>> e7ff5c087cc8f849098937ce08b970c200e7fcfd
