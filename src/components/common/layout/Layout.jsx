import { useState } from "react";
import { Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";

export default function Layout() {

    const [mobileOpen, setMobileOpen] = useState(false);

    return (
       

        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

            {/* Main content */}
            <div className="flex flex-col flex-1 overflow-hidden">
                {/* Topbar */}
                <div className="sticky top-0 z-20 bg-white shadow px-4 h-16 flex items-center justify-between">
                    {/* Mobile menu toggle */}
                    <button
                        className="md:hidden text-xl"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        <FaBars />
                    </button>
                    <Topbar />
                </div>

                {/* Page Content */}
                <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
