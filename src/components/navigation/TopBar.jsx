import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../UI/Button.jsx";
import logoImg from "../../assets/logo.svg";
import Card from "../UI/Card.jsx";

export default function TopBar() {
    const navigate = useNavigate();

    return (
        <Card className="h-[70px] mb-3 flex items-center justify-between rounded-[20px] px-5 py-4 bg-white">
            <Link to="/">
                <img src={logoImg} alt="Logo" className="h-8 logo" />
            </Link>

            <div className="flex gap-5">
                <Button onClick={() => navigate("/register")}>Register</Button>

                <Button
                    outlined
                    styleType="primary"
                    onClick={() => navigate("/login")}
                >
                    Login
                </Button>
            </div>
        </Card>
    );
}
