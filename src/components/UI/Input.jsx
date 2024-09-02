import { useState } from "react";
import "./Input.css";

export default function Input({
    textarea = false,
    className,
    label,
    id,
    type = "text",
    value,
    onChange,
    ...props
}) {
    const [showPassword, setShowPassword] = useState(false);

    function togglePassword() {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    }

    function handleChange(event) {
        if (type === "number") {
            onChange(+event.target.value);
        } else {
            onChange(event.target.value);
        }
    }

    return (
        <div>
            <div className={`input-field ${className}`}>
                {textarea ? (
                    <textarea
                        id={id}
                        value={value}
                        placeholder={label}
                        onChange={(event) => handleChange(event)}
                        {...props}
                    ></textarea>
                ) : (
                    <input
                        type={
                            type === "password" && !showPassword
                                ? "password"
                                : "text"
                        }
                        id={id}
                        value={value}
                        placeholder={label}
                        onChange={(event) => handleChange(event)}
                        {...props}
                    />
                )}
                {type === "password" && (
                    <span
                        className="material-symbols-rounded password-icon"
                        onClick={togglePassword}
                    >
                        {showPassword ? "visibility_off" : "visibility"}
                    </span>
                )}
                <label htmlFor={id}>{label}</label>
            </div>
        </div>
    );
}
