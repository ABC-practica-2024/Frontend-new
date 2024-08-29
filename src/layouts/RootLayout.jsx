import { Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        // example of root layout
        //
        // <div className="root-layout">
        //     <TopBar />
        //     <div className="content">
        //         <SideBar />
        //         <Outlet/>
        //     </div>
        // </div>

        <div className="root-layout">
            <Outlet />
        </div>
    );
}
