import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../api/authService";

export default function ResetPasswordTokenForm() {
    const [token, setToken] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await resetPassword({ token, password });
            navigate("/login");
        } catch (err) {
            setError("Failed to reset password");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Token:</label>
                <input
                    type="text"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                />
            </div>
            <div>
                <label>New Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            {error && <p>{error}</p>}
            <button type="submit">Reset Password</button>
        </form>
    );
}
