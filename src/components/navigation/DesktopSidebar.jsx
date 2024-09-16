import React, { useState } from "react";
import "./Sidebar.css";
import NavItem from "./NavItem.jsx";
import useCustomMenuButtons from "../../utils/useCustomMenuButtons.jsx";

export default function DesktopSidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const { menuButtons } = useCustomMenuButtons();

    const toggleSidebar = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <aside className={`desktop-sidebar ${isOpen ? "open" : undefined}`}>
            <ul className="sidebar-items">
                <div className="portion">
                    <NavItem
                        isOpen={isOpen}
                        icon={isOpen ? "chevron_left" : "chevron_right"}
                        onClick={toggleSidebar}
                        isLongButton
                    />

                    {menuButtons.filter(button => button.location === "sidebar_top").map((button, index) => (
                        <NavItem
                            key={index}
                            to={button.link}
                            isOpen={isOpen}
                            icon={button.iconName}
                        >
                            {button.name}
                        </NavItem>
                    ))}
                </div>
                <div className="portion">
                    {menuButtons.filter(button => button.location === "sidebar_bottom").map((button, index) => (
                        <NavItem
                            key={index}
                            to={button.link}
                            isOpen={isOpen}
                            icon={button.iconName}
                        >
                            {button.name}
                        </NavItem>
                    ))}
                </div>
            </ul>
        </aside>
    );
}