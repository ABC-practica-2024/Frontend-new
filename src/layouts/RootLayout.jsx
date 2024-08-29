import { Outlet } from "react-router-dom";
import TopBar from "../components/navigation/TopBar.jsx";
import Sidebar from "../components/navigation/Sidebar.jsx"; // Corectare pentru import

import { useState } from 'react';

export default function RootLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="root-layout">
            <TopBar />
            <div className="content">
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                <Outlet />
            </div>
        </div>
    );
}
