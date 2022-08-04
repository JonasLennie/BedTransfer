import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Clinician from "./pages/Clinician";
import WardManager from "./pages/WardManager";
import NoPage from "./pages/NoPage";
import Porter from "./pages/Porter";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="clinician" element={<Clinician />} />
          <Route path="wardmanager" element={<WardManager />} />
          <Route path="porter" element={<Porter />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}