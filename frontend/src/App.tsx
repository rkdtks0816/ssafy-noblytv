import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CommunityMain from "./pages/community/main";

// App 컴포넌트 내에서 라우터 설정
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<CommunityMain />} />
        </Routes>
    </Router>
  );
}

export default App;