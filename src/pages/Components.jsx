import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import Input from "../components/UI/Input";

export default function Components() {
    return (
        <Card className="m-6">
            <h2>Filled buttons</h2>
            <div className="flex flex-row gap-[42px] mt-3 mb-6">
                <Button>Default</Button>
                <Button styleType="primary">Primary</Button>
                <Button styleType="secondary">Secondary</Button>
                <Button styleType="error">Error</Button>
                <Button styleType="warning">Warning</Button>
                <Button styleType="success">Success</Button>
            </div>
            <h2>Outlined buttons</h2>
            <div className="flex flex-row gap-10 my-4">
                <Button outlined>Default</Button>
                <Button outlined styleType="primary">
                    Primary
                </Button>
                <Button outlined styleType="secondary">
                    Secondary
                </Button>
                <Button outlined styleType="error">
                    Error
                </Button>
                <Button outlined styleType="warning">
                    Warning
                </Button>
                <Button outlined styleType="success">
                    Success
                </Button>
            </div>
            <h2>Input fields</h2>
            <div className="flex flex-col gap-10 my-4">
                <Input label="Example input field" />
                <Input type="number" label="Example number input field" />
                <Input label="Example textarea field" textarea />
            </div>
        </Card>
    );
}
