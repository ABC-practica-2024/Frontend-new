import {NavLink} from "react-router-dom";
import "./NavItem.css";

export default function NavItemMobile({to, icon, children, ...props}) {
    return (
        <li className="nav-item-mobile">
            <NavLink to={to} className="nav-item-container-mobile" {...props}>
                <span className="material-symbols-rounded text-base block icon">
                    {icon}
                </span>
                <label>{children}</label>
            </NavLink>
        </li>
    );
}