import "./App.css";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/dashboard/Dashboard";
import AuthPage from "./pages/auth/AuthPage";
import { Routes, Route } from "react-router-dom";

import TeamMangement from "./pages/team/TeamMangement";

function App() {
  return (
    <>
      <NavBar />
      <Dashboard />

      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/team" element={<TeamMangement />} />
      </Routes>
    </>
  );
}

export default App;
