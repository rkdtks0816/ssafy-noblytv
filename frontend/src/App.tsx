import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLayout from "./pages";

// App 컴포넌트 내에서 라우터 설정
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
        </Routes>
    </Router>
  );
}

export default App;