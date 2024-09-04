import React, { useState } from "react";
import "./Sidebar.css";
import NavItem from "./NavItem.jsx";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <aside className={`sidebar ${isOpen ? "open" : undefined}`}>
            <ul className="sidebar-items">
                <div className="upper-portion">
                    <NavItem
                        isOpen={isOpen}
                        icon={isOpen ? "chevron_left" : "chevron_right"}
                        onClick={toggleSidebar}
                    />
                    <NavItem
                        to={"/dashboard"}
                        isOpen={isOpen}
                        icon="space_dashboard"
                    >
                        Dashboard
                    </NavItem>
                    <NavItem to={"/chat"} isOpen={isOpen} icon="forum">
                        Chat
                    </NavItem>
                    <NavItem to={"/sites"} isOpen={isOpen} icon="list_alt">
                        Sites list
                    </NavItem>
                </div>
                <NavItem to={"/settings"} isOpen={isOpen} icon="settings">
                    Settings
                </NavItem>
            </ul>
        </aside>
    );
}
