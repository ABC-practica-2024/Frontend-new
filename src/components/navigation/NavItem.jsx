import { NavLink } from "react-router-dom";
import "./NavItem.css";

export default function NavItem({ to, isOpen, icon, children, isLongButton, ...props }) {
    if (isLongButton) {
        return (
            <li className={`nav-item nav-item-container long-button ${isOpen ? "open" : undefined}`} onClick={props.onClick}>
                <span className="material-symbols-rounded text-base block icon">
                    {icon}
                </span>
            </li>
        );
    }

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