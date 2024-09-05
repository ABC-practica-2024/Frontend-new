import { NavLink } from "react-router-dom";
import "./NavItem.css";

export default function NavItem({ to, isOpen, icon, children, ...props }) {
    return (
        <li className="nav-item">
            <NavLink
                to={to}
                className={`nav-item-container ${icon === 'chevron_left' || icon === 'chevron_right' ? 'first-element' : ''} ${isOpen ? "open" : undefined}`}
                {...props}
            >
                <span className="material-symbols-rounded text-base block icon">
                    {icon}
                </span>
                {isOpen && <label>{children}</label>}
            </NavLink>
        </li>
    );
}
