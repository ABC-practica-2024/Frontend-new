import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api/authService.jsx";
import Input from "./UI/Input.jsx";
import Button from "./UI/Button.jsx";
import Card from "./UI/Card.jsx";

export default function RegisterForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [role, setRole] = useState("ARHEO");

    const [matchingPasswordsError, setMatchingPasswordsError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMatchingPasswordsError(true);
            return;
        }
        const userData = {
            username,
            password,
            email,
            firstName,
            lastName,
            role,
        };

        try {
            await register(userData);
            navigate("/login");
        } catch (err) {
            // ... todo handle error
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                required
                label="Username"
                id="username"
                value={username}
                onChange={setUsername}
            />
            <Input
                required
                label="Password"
                id="password"
                type="password"
                value={password}
                onChange={setPassword}
            />
            <Input
                required
                label="Confirm password"
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={setConfirmPassword}
            />
            <Input
                required
                label="Email"
                id="email"
                type="email"
                value={email}
                onChange={setEmail}
            />
            <div className="flex flex-row gap-4 justify-between">
                <Input
                    required
                    label="First name"
                    id="firstname"
                    value={firstName}
                    onChange={setFirstName}
                />
                <Input
                    required
                    label="Last name"
                    id="lastname"
                    value={lastName}
                    onChange={setLastName}
                />
            </div>
            <div className="flex flex-row gap-4 justify-around">
                <Button
                    outlined={role === "ARHEO" ? true : false}
                    styleType={role === "ARHEO" ? "warning" : "default"}
                    onClick={() => setRole("ARHEO")}
                    type="button"
                >
                    Archeologist
                </Button>
                <Button
                    outlined={role === "LABWORKER" ? true : false}
                    styleType={role === "LABWORKER" ? "success" : "default"}
                    onClick={() => setRole("LABWORKER")}
                    type="button"
                >
                    Lab Worker
                </Button>
            </div>
            {matchingPasswordsError && (
                <Card className="text-red-500 border-red-500 bg-red-50">
                    Passwords do not match!
                </Card>
            )}

            {/* todo add photo upload field */}
            <Button type="submit" outlined styleType="primary">
                Register
            </Button>
        </form>
    );
}
