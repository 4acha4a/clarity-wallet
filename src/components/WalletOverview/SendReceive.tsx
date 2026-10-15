import Button from "@/components/Button";

export default function SendReceive() {
    const textProperties = "h-full w-full flex-col gap-2 text-2xl";
    return (
        <div className="flex h-40 w-full items-center justify-between gap-6 py-6">
            <Button
                variant="primary"
                className={textProperties}
            >
                <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="size-8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M7 17 17 7M7 7h10v10" />
                </svg>
                <span>Send</span>
            </Button>
            <Button
                variant="secondary"
                className={textProperties}
            >
                <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="size-8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M17 7 7 17M7 7v10h10" />
                </svg>
                <span>Receive</span>
            </Button>
        </div>
    );
}
