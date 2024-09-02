import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import EnableUserPage from "./pages/EnableUserPage";
import RootLayout from "./layouts/RootLayout";
import Components from "./pages/Components";
import UserLayout from "./layouts/UserLayout";
import { UserContextProvider } from "./contexts/UserContext";
import Router from "./routes/Router";

function App() {
    return (
        <UserContextProvider>
            <Router />
        </UserContextProvider>
    );
}

export default App;
