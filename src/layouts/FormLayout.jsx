import Card from "../components/UI/Card";
import "./FormLayout.css";

function FormLayout({ title, bottomLinks, children }) {
    return (
        <Card className="form-container px-16 py-16">
            <h2>{title}</h2>
            {children}
            <div className="bottom-links">{bottomLinks}</div>
        </Card>
    );
}

export default FormLayout;
