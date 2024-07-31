import { Route, Routes } from "react-router-dom";
import Fflinks from "./fflinks";
import ShowPage from "./Components/ShowPage/ShowPage";

export default function FflinksRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Fflinks />} />
        <Route path="show" element={<ShowPage />} />
      </Routes>
    </>
  );
}
