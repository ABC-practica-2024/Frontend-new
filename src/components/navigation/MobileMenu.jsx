import NavItem from "./NavItem.jsx";
import './MobileMenu.css';

function MobileMenu() {
    return (
        <div className="mobile-menu">
            <ul className="mobile-menu-items">
                <NavItem to={"/dashboard"} icon="space_dashboard">
                    Dashboard
                </NavItem>
                <NavItem to={"/chat"} icon="forum">
                    Chat
                </NavItem>
                <NavItem to={"/sites"} icon="list_alt">
                    Sites list
                </NavItem>
                <NavItem to={"/settings"} icon="settings">
                    Settings
                </NavItem>
            </ul>
        </div>
    );
}

export default MobileMenu;