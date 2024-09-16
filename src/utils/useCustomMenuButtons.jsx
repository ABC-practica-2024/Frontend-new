import {useContext, useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import UserContext from "../contexts/UserContext";

const useCustomMenuButtons = () => {
    const { role, isLoggedIn } = useContext(UserContext);
    const location = useLocation();

    const [menuButtons, setMenuButtons] = useState([]);
    useEffect(() => {
        const buttons = [
            {
                name: "Login",
                iconName: "settings",
                link: "/login",
                isImportant: true,
                location: "topbar",
                roles: ["visitor"]
            },
            {
                name: "Register",
                iconName: "settings",
                link: "/register",
                isImportant: false,
                location: "topbar",
                roles: ["visitor"]
            },
            {
                name: "Logout",
                iconName: "logout",
                link: "/logout",
                isImportant: true,
                location: "topbar",
                roles: ["admin", "user"]
            },
            {
                name: "Approve Users",
                iconName: "group_add",
                link: "/approve-users",
                isImportant: false,
                location: "sidebar_top",
                roles: ["admin"]
            },
            {
                name: "CRUD Users",
                iconName: "person",
                link: "/crud-users",
                isImportant: false,
                location: "sidebar_top",
                roles: ["admin"]
            },
            {
                name: "Approve Sites",
                iconName: "add_location_alt",
                link: "/approve-sites",
                isImportant: false,
                location: "sidebar_top",
                roles: ["admin"]
            },
            {
                name: "CRUD Sites",
                iconName: "location_on",
                link: "/crud-sites",
                isImportant: false,
                location: "sidebar_top",
                roles: ["admin"]
            },
            {
                name: "Settings",
                iconName: "settings",
                link: "/settings",
                isImportant: false,
                location: "sidebar_bottom",
                roles: ["admin", "user"]
            },
            {
                name: "Dashboard",
                iconName: "dashboard",
                link: "/",
                isImportant: true,
                location: "sidebar_top",
                roles: ["user"]
            },
            {
                name: "Sites",
                iconName: "location_on",
                link: "/sites",
                isImportant: false,
                location: "sidebar_top",
                roles: ["user"]
            },
            {
                name: "Sections",
                iconName: "layers",
                link: "/sections",
                isImportant: false,
                location: "sidebar_top",
                roles: ["user"]
            },
            {
                name: "Chat",
                iconName: "forum",
                link: "/chat",
                isImportant: false,
                location: "sidebar_top",
                roles: ["user"]
            }
        ];
        setMenuButtons(buttons.filter(button => button.roles.includes(role)));
    }, [role]);

    return { menuButtons };
};

export default useCustomMenuButtons;