import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/authService.jsx";
import Input from "../components/UI/Input.jsx";
import Button from "../components/UI/Button.jsx";
import FormLayout from "../layouts/FormLayout.jsx";
import "./LoginPage.css";
import UserContext from "../contexts/UserContext.jsx";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const { login } = useContext(UserContext);

    function handleSubmit(event) {
        event.preventDefault();

        login(username, password)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    return (
        <div className="login-page h-full ">
            <FormLayout
                title="Login"
                bottomLinks={
                    <>
                        <p>
                            Don&apos;t have an account?{" "}
                            <Link
                                to="/register"
                                className="text-blue-500 hover:text-blue-600"
                            >
                                Register here
                            </Link>
                        </p>
                        <p>
                            Forgot your password?{" "}
                            <Link
                                to="/reset-password"
                                className="text-blue-500 hover:text-blue-600"
                            >
                                Reset it here
                            </Link>
                        </p>
                    </>
                }
            >
                <form onSubmit={handleSubmit}>
                    <Input
                        label="Username"
                        id="username"
                        value={username}
                        onChange={setUsername}
                    />
                    <div className="submit-row">
                        <Input
                            label="Password"
                            id="password"
                            type="password"
                            value={password}
                            onChange={setPassword}
                        />
                        {/* {error && <p>{error}</p>} */}
                        <Button
                            type="submit"
                            outlined
                            className="submit"
                            styleType="primary"
                        >
                            <span className="material-symbols-rounded">
                                chevron_right
                            </span>
                        </Button>
                    </div>
                </form>
            </FormLayout>
        </div>
    );
}
