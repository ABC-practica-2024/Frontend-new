import { Link } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import FormLayout from "../layouts/FormLayout.jsx";
import "./RegisterPage.css";

export default function RegisterPage() {
    return (
        <div className="register-page">
            <FormLayout
                title="Register"
                bottomLinks={
                    <p>
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-blue-500 hover:text-blue-600"
                        >
                            Login here
                        </Link>
                    </p>
                }
            >
                <RegisterForm />
            </FormLayout>
        </div>
    );
}
