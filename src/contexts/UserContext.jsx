import { createContext, useEffect, useState } from "react";
import { login } from "../api/authService";
// jwt_decode from "jsonwebtoken";
import { useNavigate } from "react-router-dom";

const UserContext = createContext({
    username: "",
    token: null,
    isLoggedIn: false,
    profilePicture: "",
    role: "",
    login: async () => {},
    logout: () => {},
});

export default UserContext;

export function UserContextProvider({ children }) {
    const [username, setUsername] = useState("");
    const [token, setToken] = useState(null);
    const [profilePicture, setProfilePicture] = useState("");
    const [role, setRole] = useState("visitor");
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const localStorageToken = localStorage.getItem("jwt");
        if (localStorageToken) {
            setToken(localStorageToken);
            setUsername("username");
            setRole("admin");
            setProfilePicture("https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg");
        }
        setIsReady(true);
    }, []);

    const isLoggedIn = token !== null;

    return (
        <UserContext.Provider
            value={{
                username,
                token,
                isLoggedIn,
                role,
                profilePicture,
                login: async (username, password) => {
                    const response = await login(username, password);
                    const token = response.data;
                    // todo get user data from decrypted token
                    setToken(token);
                    localStorage.setItem("jwt", token);

                },
                logout: () => {
                    setToken(null);
                    localStorage.removeItem("jwt");
                },
            }}
        >
            {isReady ? children : null}
        </UserContext.Provider>
    );
}
