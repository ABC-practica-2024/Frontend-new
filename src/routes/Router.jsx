import { useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import UserContext from "../contexts/UserContext";
import UserLayout from "../layouts/UserLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import EnableUserPage from "../pages/EnableUserPage";
import AdminLayout from "../layouts/AdminLayout.jsx";

const visitorRouter = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/register",
                element: <RegisterPage />,
            },
            {
                path: "/reset-password",
                element: <ResetPasswordPage />,
            },
            {
                path: "/enable/:token",
                element: <EnableUserPage />,
            },
        ],
    },
]);

const userRouter = createBrowserRouter([
    {
        path: "/",
        element: <UserLayout />,
        children: [{}],
    },
]);

const adminRouter = createBrowserRouter([
    {
        path: "/",
        element: <AdminLayout />,
        children: [{}],
    },
]);

export default function Router() {
    const { isLoggedIn, role } = useContext(UserContext);

    if (!isLoggedIn) {
        return <RouterProvider router={visitorRouter} />;
    }

    return (
        <RouterProvider router={role === "admin" ? adminRouter : userRouter} />
    );
}
