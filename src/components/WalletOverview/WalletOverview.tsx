import Account from "./Account";
import Balance from "./Balance";
import SendReceive from "./SendReceive";

interface WalletOverviewProps {
    balancesVisible: boolean;
    onToggleBalances: () => void;
    totalWalletValue: number;
}

export default function WalletOverview({balancesVisible, onToggleBalances, totalWalletValue}: WalletOverviewProps) {
    return (<main className="flex flex-1 flex-col items-start px-6">
        <Account>Account 1</Account>
        <Balance
        visible={balancesVisible}
        onToggle={onToggleBalances}
        >
        {totalWalletValue}
        </Balance>
        <SendReceive />
    </main>);
}
