import { Outlet } from "react-router-dom";
import TopBar from "../components/navigation/TopBar.jsx";
import Sidebar from "../components/navigation/Sidebar.jsx";
import UserTopBar from "../components/navigation/UserTopBar.jsx";

function UserLayout() {
    return (
        <div className="user-layout flex flex-row">
            <Sidebar />
            <div className="content">
                <UserTopBar />
                <Outlet />
            </div>
        </div>
    );
}

export default UserLayout;
