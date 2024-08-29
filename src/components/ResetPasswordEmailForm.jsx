import { useState } from "react";
import { sendResetPasswordEmail } from "../api/authService";

export default function ResetPasswordEmailForm() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await sendResetPasswordEmail(email);
            setMessage(
                "An email has been sent with instructions to reset your password."
            );
        } catch (err) {
            setError("Failed to send reset email");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            {message && <p>{message}</p>}
            {error && <p>{error}</p>}
            <button type="submit">Send Reset Link</button>
        </form>
    );
}
