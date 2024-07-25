import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fflinks from "./fflinks/fflinks";
import ShowPage from "./fflinks/Components/ShowPage/ShowPage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Fflinks />} />
          <Route path="/show" element={<ShowPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
