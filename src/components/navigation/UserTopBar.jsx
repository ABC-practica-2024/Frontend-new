import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../UI/Button.jsx";
import logoImg from "../../assets/logo.png";
import Card from "../UI/Card.jsx";
import UserContext from "../../contexts/UserContext.jsx";

export default function UserTopBar() {
    const navigate = useNavigate();

    const { logout } = useContext(UserContext);

    return (
        <Card className="my-4 me-4 flex items-center justify-between rounded-[20px] px-5 py-4">
            <Link to="/">
                <img src={logoImg} alt="Logo" className="h-14" />
            </Link>

            <div className="flex gap-5">
                <Button
                    outlined
                    styleType="primary"
                    onClick={() => {
                        logout();
                        navigate("/");
                    }}
                >
                    Logout
                </Button>
            </div>
        </Card>
    );
}
