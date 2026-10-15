import Button from "@/components/Button";

export default function SendReceive() {
    const textProperties = "h-full w-full flex-col gap-2 text-2xl";
    return (
        <div className="flex h-40 w-full items-center justify-between gap-6 py-6">
            <Button
                variant="primary"
                className={textProperties}
            >
                Send
            </Button>
            <Button
                variant="secondary"
                className={textProperties}
            >
                Receive
            </Button>
        </div>
    );
}
