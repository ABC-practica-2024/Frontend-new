import RegisterForm from "../components/RegisterForm";

export default function RegisterPage() {
    return (
        <div>
            <h2>Register</h2>
            <RegisterForm />
            <p>
                Already have an account? <a href="/login">Login here</a>
            </p>
        </div>
    );
}
