import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import DashboardLayout from "./layouts/DashboardLayout";

import Dashboard from "./pages/Dashboard";
import Agents from "./pages/Agents";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN */}
        <Route path="/" element={<Login />} />

        {/* DASHBOARD LAYOUT */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="agents" element={<Agents />} />
          {/* <Route path="inspectors" element={<Inspectors />} />
          <Route path="properties" element={<Properties />} />
          <Route path="settings" element={<Settings />} /> */}
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
