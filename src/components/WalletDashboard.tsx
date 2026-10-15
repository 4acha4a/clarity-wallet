"use client";

import Header from "@/components/Header/Header";
import WalletOverview from "@/components/WalletOverview/WalletOverview";
import TokenList, { type WalletToken } from "@/components/Tokens/TokenList";
import { useState } from "react";
import Tokens from "./Tokens/Tokens";

interface WalletDashboardProps {
    tokens: WalletToken[];
}

export default function WalletDashboard({ tokens }: WalletDashboardProps) {
    const [balancesVisible, setBalancesVisible] = useState(true);
    const totalWalletValue = tokens.reduce(
        (total, token) => total + token.balance * token.priceUsd,
        0,
    );
    const [tokenListVisible, setTokenListVisible] = useState(true);

    return (
        <>
        <Header />
        <WalletOverview
            balancesVisible={balancesVisible}
            onToggleBalances={() => setBalancesVisible((visible) => !visible)}
            totalWalletValue={totalWalletValue}
        />
        <Tokens balancesVisible={balancesVisible} tokenList={tokens} tokenListVisible={tokenListVisible} setTokenListVisible={() => setTokenListVisible((visible) => !visible)}></Tokens>
        </>
    );
}
