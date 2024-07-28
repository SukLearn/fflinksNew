import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fflinks from "./fflinks/fflinks";
import ShowPage from "./fflinks/Components/ShowPage/ShowPage";
import SukLearn from "./Suklearn/Suklearn";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Honors from "./Components/Honors/Honors";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SukLearn />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/honors" element={<Honors />} />
          <Route path="/fflinks" element={<Fflinks />} />
          <Route path="/fflinks/show" element={<ShowPage />} />
          <Route path="*" element={<SukLearn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
