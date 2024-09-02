import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import EnableUserPage from "./pages/EnableUserPage";
import RootLayout from "./layouts/RootLayout";
import Components from "./pages/Components";
import UserLayout from "./layouts/UserLayout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/components" element={<Components />} />
                <Route path="/" element={<UserLayout />}>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route
                        path="/reset-password"
                        element={<ResetPasswordPage />}
                    />
                    <Route path="/enable/:token" element={<EnableUserPage />} />
                    <Route
                        path="/dashboard"
                        element={<h2>Dashboard - Protected Page</h2>}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
