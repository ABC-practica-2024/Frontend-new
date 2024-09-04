import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { enableUser } from "../api/authService.jsx";

export default function EnableUserMessage() {
    const { token } = useParams();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const activateUser = async () => {
            try {
                await enableUser(token);
                navigate("/login");
            } catch (err) {
                setError("Failed to activate account");
            }
        };
        activateUser();
    }, [token, navigate]);

    return (
        <div>
            <h2>Activate Account</h2>
            {error ? <p>{error}</p> : <p>Activating your account...</p>}
        </div>
    );
}
