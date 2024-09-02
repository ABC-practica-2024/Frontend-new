function Card({ children, className, ...props }) {
    return (
        <div
            className={`border rounded-2xl border-slate-900 p-4 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}

export default Card;
