import React from 'react';
import { NavLink } from 'react-router-dom';
import './TopBar.css';
import Button from "../Button.jsx";

export default function TopBar() {
    return (
        <div className="topbar">
            <div className="logo">
                <img src="/src/utils/img.png" alt="Logo" className="logo-image" />
            </div>
            <div className="nav-buttons">
                <NavLink to="/login">
                    <Button label="Autentificare" styleType="auth" />
                </NavLink>
                <div className="rectangle-register">
                    <NavLink to="/register">
                        <Button label="Inregistrare" styleType="register" />
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
