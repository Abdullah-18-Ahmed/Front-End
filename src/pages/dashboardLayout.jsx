import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/ui/Sidebardashbaord";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen w-full flex bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 relative">
        
      
      {/* Sidebar – stays on all pages */}
      <Sidebar />

      {/* Main content area */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
