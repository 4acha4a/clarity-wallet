import Account from "./Account";
import Balance from "./Balance";
import SendReceive from "./SendReceive";

interface WalletOverviewProps {
    balancesVisible: boolean;
    onToggleBalances: () => void;
    totalWalletValue: number;
}

export default function WalletOverview({balancesVisible, onToggleBalances, totalWalletValue}: WalletOverviewProps) {
    return (<div className="flex-none py-4 border-b border-border">
        <div className="section-inner flex flex-col px-4 items-start">
        <Account>Account 1</Account>
        <Balance
        visible={balancesVisible}
        onToggle={onToggleBalances}
        >
        {totalWalletValue}
        </Balance>
        <SendReceive />
        </div>
    </div>);
}
