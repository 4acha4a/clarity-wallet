"use client";

interface AccountProps {
    children: string,
}

export default function Account({ children }: AccountProps) {
    return (
        <div className="flex flex-col py-3">
            <button
                type="button"
                className="rounded-lg text-start text-3xl font-semibold color-transition hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-900 dark:focus-visible:outline-zinc-100"
                aria-label="Balance Button"
            >
                {children}
            </button>
        </div>
    );
}