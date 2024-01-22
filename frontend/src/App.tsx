import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./pages/app/community/main";
import Login from "./pages/app/login/main";
import TvLayout from "./pages/tv";

// App 컴포넌트 내에서 라우터 설정
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/app" element={<AppLayout />} />
          <Route path="/app/login" element={<Login />} />
          <Route path="/tv" element={<TvLayout />} />
        </Routes>
    </Router>
  );
}

export default App;