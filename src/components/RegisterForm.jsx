import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api/authService.jsx";

export default function RegisterForm() {
    const [userData, setUserData] = useState({
        username: "",
        password: "",
        email: "",
        firstName: "",
        lastName: "",
        role: "arheolog",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(userData);
            navigate("/login");
        } catch (err) {
            setError("Registration failed");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={userData.username}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>First Name:</label>
                <input
                    type="text"
                    name="firstName"
                    value={userData.firstName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Last Name:</label>
                <input
                    type="text"
                    name="lastName"
                    value={userData.lastName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Role:</label>
                <select
                    name="role"
                    value={userData.role}
                    onChange={handleChange}
                >
                    <option value="arheolog">Arheolog</option>
                    <option value="admin">Admin</option>
                </select>
            </div>
            {error && <p>{error}</p>}
            <button type="submit">Register</button>
        </form>
    );
}
