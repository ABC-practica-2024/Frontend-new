import { createContext, useState } from "react";
import { login } from "../api/authService";

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
    const [role, setRole] = useState("");

    const isLoggedIn = token !== null;

    return (
        <UserContext.Provider
            value={{
                username,
                token,
                isLoggedIn,
                role,
                profilePicture,
                login: async (credentials) => {
                    const response = await login(credentials);
                    const token = response.data;
                    // todo get user data from decrypted token
                    setToken(token);
                },
                logout: () => {
                    setToken(null);
                },
            }}
        >
            {children}
        </UserContext.Provider>
    );
}
