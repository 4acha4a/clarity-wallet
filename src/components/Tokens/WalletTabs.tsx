import Button from "../Button";

interface WalletTabsProps {
    activeTab: Tab;
    onToggleTab: (tab: Tab) => void;
}

export type Tab = "tokens" | "history";

export default function WalletTabs({activeTab, onToggleTab}: WalletTabsProps) {
    const buttonType = "transparent";

    return (
        <div className="flex h-12 gap-2">
            <Button
                variant={activeTab === "tokens" ? `${buttonType}_selected` : `${buttonType}`}
                onClick={() => onToggleTab("tokens")}
                className="gap-2 rounded-lg px-4 py-2"
            >
                <span
                    aria-hidden="true"
                    className="size-5 shrink-0 bg-current mask-[url('/icons/tokens.svg')] mask-contain mask-no-repeat mask-center"
                />
                Tokens
            </Button>

            <Button
                variant={activeTab === "history" ? `${buttonType}_selected` : `${buttonType}`}
                onClick={() => onToggleTab("history")}
                className="gap-2 rounded-lg px-4 py-2"
            >
                <span
                    aria-hidden="true"
                    className="size-5 shrink-0 bg-current mask-[url('/icons/transaction-history.svg')] mask-contain mask-no-repeat mask-center"
                />
                Transaction History
            </Button>
        </div>
    );
}
