import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { enableUser } from "../api/authService.jsx";

export default function EnableUserPage() {
    const { token } = useParams();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const activateUser = async () => {
            try {
                console.log(token);
                await enableUser(token);
                console.log("Account activated");
                navigate("/login");
            } catch (err) {
                setError(err.message);
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
