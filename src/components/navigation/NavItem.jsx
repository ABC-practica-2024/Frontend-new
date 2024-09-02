import { NavLink } from "react-router-dom";
import "./NavItem.css";

export default function NavItem({ to, isOpen, icon, children, ...props }) {
    return (
        <li className="nav-item">
            <NavLink
                to={to}
                className="nav-item-container flex flex-row items-center text-slate-950 rounded-2xl border border-slate-950 hover:bg-slate-100"
                {...props}
            >
                <span className="material-symbols-rounded text-base block">
                    {icon}
                </span>
                {isOpen && <label>{children}</label>}
            </NavLink>
        </li>
    );
}
