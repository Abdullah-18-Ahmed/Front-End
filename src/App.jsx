import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { ForgotPassword } from "./pages/forgotpsw";
import DashboardLayout from "./pages/DashboardLayout";
import { Dashboard } from "./pages/dashboard";
import { Donate } from "./pages/Donate";
import { Campaigns } from "./pages/campaigns";
import { MyDonations } from "./pages/mydonations";
import { Settings } from "./pages/setting";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* public auth pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpsw" element={<ForgotPassword />} />

        {/* all pages that use sidebar */}
        <Route path="/app" element={<DashboardLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="donate" element={<Donate />} />
          <Route path="campaigns" element={<Campaigns />} />
          <Route path="my-donations" element={<MyDonations />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
