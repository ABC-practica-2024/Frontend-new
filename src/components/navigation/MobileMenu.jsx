import NavItem from "./NavItem.jsx";
import './MobileMenu.css';
import useCustomMenuButtons from "../../utils/useCustomMenuButtons.jsx";
import NavItemMobile from "./NavItemMobile.jsx";

function MobileMenu() {
    const { menuButtons } = useCustomMenuButtons();

    return (
        <div className="mobile-menu">
            <ul className="mobile-menu-items">
                {menuButtons.filter(button => button.location === "sidebar_top").map((button, index) => (
                    <NavItemMobile
                        key={index}
                        to={button.link}
                        icon={button.iconName}
                    >
                        {button.name}
                    </NavItemMobile>
                ))}
                {menuButtons.filter(button => button.location === "sidebar_bottom").map((button, index) => (
                    <NavItemMobile
                        key={index}
                        to={button.link}
                        icon={button.iconName}
                    >
                        {button.name}
                    </NavItemMobile>
                ))}
                {menuButtons.filter(button => button.location === "topbar").map((button, index) => (
                    <NavItemMobile
                        key={index}
                        to={button.link}
                        icon={button.iconName}
                    >
                        {button.name}
                    </NavItemMobile>
                ))}
            </ul>
        </div>
    );
}

export default MobileMenu;