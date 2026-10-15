import Button from "@/components/Button";

export default function SendReceive() {
    const textProperties = "h-full min-w-0 w-full max-w-50 flex-col text-2xl";
    return (
        <div className="flex h-40 w-full items-start justify-start gap-4 sm:gap-8 py-6">
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
