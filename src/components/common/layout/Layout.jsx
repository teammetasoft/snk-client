import { useState } from "react";
import { Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import Navbar from "../navbar/Navbar";

export default function Layout() {

    const [mobileOpen, setMobileOpen] = useState(false);

    return (

        <div className="flex h-screen ">
            {/* Sidebar */}
            <Sidebar />

            {/* Main content */}
            <div className="flex  flex-col flex-1 overflow-hidden relative">
                {/* Topbar */}
                <div className="">
                    <Navbar />
                </div>

                {/* Page Content */}
                <div className="flex-1 overflow-y-auto  ">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
