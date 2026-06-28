import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchProvider } from "./context/SearchContext";
import LandingPage from "./pages/LandingPage";
import Onboarding from "./pages/Onboarding";
import DashboardPreview from "./pages/DashboardPreview";
import Success from "./pages/Success";
import { ThemeProvider } from "./context/ThemeContext";

import "./index.css";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <SearchProvider>  {/* BrowserRouter ke andar karo */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/success" element={<Success />} />
            <Route path="/dashboard" element={<DashboardPreview />} />
            <Route path="/dashboard/analytics" element={<DashboardPreview />} />
            <Route path="/dashboard/projects" element={<DashboardPreview />} />
            <Route path="/dashboard/team" element={<DashboardPreview />} />
            <Route path="/dashboard/settings" element={<DashboardPreview />} />
          </Routes>
        </SearchProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;