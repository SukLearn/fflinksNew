import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SukLearn from "./Components/Suklearn/Suklearn";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Honors from "./Components/Honors/Honors";
import ProjectsRoutes from "./Routes/ProjectsRoutes";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
function App() {
  return (
    <>
      <MantineProvider>
        <Router>
          <Routes>
            <Route path="/" element={<SukLearn />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/honors" element={<Honors />} />
            <Route path="/projects/*" element={<ProjectsRoutes />} />
            <Route path="*" element={<SukLearn />} />
          </Routes>
        </Router>
      </MantineProvider>
    </>
  );
}

export default App;
