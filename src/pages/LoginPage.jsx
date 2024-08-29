import LoginForm from "../components/LoginForm";

export default function LoginPage() {
    return (
        <div>
            <h2>Login</h2>
            <LoginForm />
            <p>
                Don&apos;t have an account?{" "}
                <a href="/register">Register here</a>
            </p>
            <p>
                Forgot your password?{" "}
                <a href="/reset-password">Reset it here</a>
            </p>
        </div>
    );
}
