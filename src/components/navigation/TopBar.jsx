import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../UI/Button.jsx";
import logoImg from "../../assets/logo.svg";
import Card from "../UI/Card.jsx";
import './TopBar.css';
import './Sidebar.css'
import NavItem from "./NavItem.jsx";
import MobileMenu from "./MobileMenu.jsx";

export default function TopBar() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Close the menu when the window is resized to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <div className={`background-blur ${isMenuOpen ? "active" : ""}`}>
            </div>
            <div className="top-container">
                <div className="top">
                    <div className="menu-button">
                        <ul className="sidebar-items">
                            <NavItem
                                icon={isMenuOpen ? "close" : "menu"}
                                onClick={toggleMenu}
                                isLongButton
                            />
                        </ul>
                    </div>
                    <Card className="topbar">
                        <Link to="/">
                            <img src={logoImg} alt="Logo" className="logo"/>
                        </Link>

                        <div className="top-buttons">
                            <Button onClick={() => navigate("/register")}>
                                Register
                            </Button>

                            <Button outlined styleType="primary" onClick={() => navigate("/login")}>
                                Login
                            </Button>
                        </div>
                    </Card>
                </div>
                {isMenuOpen && <MobileMenu/>}
            </div>
        </>
    );
}
