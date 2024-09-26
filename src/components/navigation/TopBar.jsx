import React, {useContext, useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../UI/Button.jsx";
import logoImg from "../../assets/logo.svg";
import Card from "../UI/Card.jsx";
import './TopBar.css';
import './Sidebar.css'
import NavItem from "./NavItem.jsx";
import MobileMenu from "./MobileMenu.jsx";
import useCustomMenuButtons from "../../utils/useCustomMenuButtons.jsx";
import UserContext from "../../contexts/UserContext.jsx";

export default function TopBar() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const { menuButtons } = useCustomMenuButtons();
    const { profilePicture } = useContext(UserContext);

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
            <div className={`background-blur ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
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
                            {menuButtons.filter(button => button.location === "topbar").map((button, index) => (
                                <Button
                                    key={index}
                                    onClick={() => navigate(button.link)}
                                    outlined={!button.isImportant}
                                    styleType={button.isImportant && "primary"}
                                >
                                    {button.name}
                                </Button>
                            ))}
                        </div>
                    </Card>

                    <div className="profile">
                        <img src={profilePicture} alt="Profile" />
                    </div>
                </div>
                {isMenuOpen && <MobileMenu/>}
            </div>
        </>
);
}
