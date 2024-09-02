import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../UI/Button.jsx";
import logoImg from "../../assets/logo.png";
import Card from "../UI/Card.jsx";

export default function TopBar() {
    const navigate = useNavigate();

    return (
        <Card className="m-4 flex items-center justify-between rounded-[20px] px-5 py-4">
            <Link to="/">
                <img src={logoImg} alt="Logo" className="h-14" />
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
