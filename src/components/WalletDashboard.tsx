"use client";

import Account from "@/components/Account";
import Balance from "@/components/Balance";
import Header from "@/components/Header";
import SendReceive from "@/components/SendReceive";
import TokenList, { type WalletToken } from "@/components/TokenList";
import { useState } from "react";

interface WalletDashboardProps {
  tokens: WalletToken[];
}

export default function WalletDashboard({ tokens }: WalletDashboardProps) {
  const [balancesVisible, setBalancesVisible] = useState(true);
  const totalWalletValue = tokens.reduce(
    (total, token) => total + token.balance * token.priceUsd,
    0,
  );

  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-start px-6">
        <Account>1</Account>
        <Balance
          visible={balancesVisible}
          onToggle={() => setBalancesVisible((visible) => !visible)}
        >
          {totalWalletValue}
        </Balance>
        <SendReceive />
        <TokenList balancesVisible={balancesVisible}>{tokens}</TokenList>
      </main>
    </>
  );
}
