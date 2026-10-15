"use client";

interface AccountProps {
    children: string,
}

export default function Account({ children }: AccountProps) {
    return (
        <div className="flex flex-col py-3">
            <button
                type="button"
                className="rounded-lg text-start text-3xl font-semibold color-transition hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text"
                aria-label="Balance Button"
            >
                {children}
            </button>
        </div>
    );
}