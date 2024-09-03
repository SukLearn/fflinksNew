import { Route, Routes } from "react-router-dom";
import StopWatch from "../Components/Projects/StopWatch/StopWatch";
import Projects from "../Components/Projects/PageProjects";

export default function ProjectsRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="StopWatch" element={<StopWatch />} />
      </Routes>
    </>
  );
}
