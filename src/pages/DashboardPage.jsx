import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../api/userService";

export default function DashboardPage() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const loggedInUser = JSON.parse(localStorage.getItem("jwt"));

    useEffect(() => {
        if (!loggedInUser) {
            navigate("/login");
        } else {
            getAllUsers().then((data) => setUsers(data.data || []));
        }
    }, [navigate, loggedInUser]);

    const handleLogout = () => {
        localStorage.removeItem("loggedInUser");
        navigate("/login");
    };

    return (
        <div>
            <h2>Welcome, {loggedInUser?.firstName}!</h2>
            <button onClick={handleLogout}>Logout</button>
            <h3>User List</h3>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.username} - {user.email} ({user.role})
                    </li>
                ))}
            </ul>
        </div>
    );
}
