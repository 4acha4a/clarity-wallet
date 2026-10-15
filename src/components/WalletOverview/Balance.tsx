interface BalanceProps {
    children: number;
    visible: boolean;
    onToggle: () => void;
}

export default function Balance({ children, visible, onToggle }: BalanceProps) {
    return (
        <button
            type="button"
            className="relative z-50 rounded-lg text-center text-5xl font-bold color-transition hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-900 dark:focus-visible:outline-zinc-100"
            aria-label={visible ? "Hide balances" : "Show balances"}
            aria-pressed={!visible}
            onClick={onToggle}
        >
            {
                visible ?
                    <p className="font-semibold">
                        $
                        {children.toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        })}
                    </p> : "••••••"
            }
        </button>
    );
}
