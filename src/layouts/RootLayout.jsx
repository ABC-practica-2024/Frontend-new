import { Outlet } from "react-router-dom";
import TopBar from "../components/navigation/TopBar";

function RootLayout() {
    return (
        <div className="root-layout">
            <TopBar />
            <Outlet />
        </div>
    );
}

export default RootLayout;
