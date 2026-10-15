import TokenList, { type WalletToken } from "./TokenList";

interface TokensProps {
    tokenList: WalletToken[];
    balancesVisible: boolean;
}

export default function Tokens({ tokenList, balancesVisible }: TokensProps) {
    return <TokenList balancesVisible={balancesVisible}>{tokenList}</TokenList>;
}
