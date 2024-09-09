import { Outlet } from "react-router-dom";
import TopBar from "../components/navigation/TopBar.jsx";
import DesktopSidebar from "../components/navigation/DesktopSidebar.jsx";

function AdminLayout() {
    return (
        <div className="user-layout flex flex-row">
            <DesktopSidebar />
            <div className="content">
                <TopBar />
                <Outlet />
            </div>
        </div>
    );
}

export default AdminLayout;
