import { useState } from "react";
import ResetPasswordEmailForm from "../components/ResetPasswordEmailForm";
import ResetPasswordTokenForm from "../components/ResetPasswordTokenForm";

export default function ResetPasswordPage() {
    const [emailSent, setEmailSent] = useState(false);

    return (
        <div>
            <h2>Reset Password</h2>
            {!emailSent ? (
                <ResetPasswordEmailForm
                    onEmailSent={() => setEmailSent(true)}
                />
            ) : (
                <ResetPasswordTokenForm />
            )}
        </div>
    );
}
