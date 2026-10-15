"use client";

import {
    NetworkIcon,
    TokenIcon,
} from "@web3icons/react/dynamic";
import Button from "../Button";
import { Fragment } from "react";

export interface Network {
    id: string;
    name: string;
    shortName: string;
}

export interface WalletToken {
    id: string;
    name: string;
    symbol: string;
    balance: number;
    priceUsd: number;
    change24h: number;
    network: Network;
    contractAddress?: string;
    verified: boolean;
}

interface TokenListProps {
    children: WalletToken[];
    balancesVisible: boolean;
    className?: string;
}

interface TokenProps {
    token: WalletToken;
    balancesVisible: boolean;
}

function Token({ token, balancesVisible }: TokenProps) {
    const valueUsd = token.balance * token.priceUsd;
    const isPositive = token.change24h >= 0;
    return (
        <Button
            key={token.id}
            variant="transparent"
            className="group w-full py-4 px-3 sm:px-4 text-left rounded-2xl"
        >
            <span className="flex w-full items-center justify-between">
                <span className="flex min-w-0 items-center gap-3">
                    <span className="relative shrink-0">
                        <span className="block size-11 overflow-hidden rounded-full">
                            <TokenIcon
                                symbol={token.symbol}
                                size={44}
                                variant="background"
                                fallback={
                                    <span className="flex size-11 items-center justify-center rounded-full bg-zinc-200 font-semibold dark:bg-zinc-800">
                                        {token.symbol.slice(0, 1)}
                                    </span>
                                }
                            />
                        </span>

                        <span className="absolute -bottom-1 -right-1 block overflow-hidden rounded-full bg-white p-0.5 dark:bg-zinc-950">
                            <NetworkIcon
                                name={token.network.id}
                                size={18}
                                variant="branded"
                            />
                        </span>
                    </span>

                    <span className="min-w-0">
                        <span className="block truncate font-semibold">
                            {token.name}
                        </span>

                        <span className="text-text-muted color-transition group-hover:text-text">
                            <span>{token.symbol}</span>
                            <span> • </span>
                            <span className="truncate">{token.network.name}</span>
                        </span>
                    </span>
                </span>

                <span className="shrink-0 text-right">
                    <span className="block font-semibold">
                        {balancesVisible
                            ? `$${valueUsd.toLocaleString("en-US", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                            })}`
                            : "••••••"}
                    </span>

                    <span className="block text-sm text-zinc-500">
                        {balancesVisible
                            ? `${token.balance.toLocaleString("en-US")} ${token.symbol}`
                            : "••••••"}
                    </span>

                    <span
                        className={`block text-sm ${isPositive ? "text-emerald-500" : "text-red-500"
                            }`}
                    >
                        {isPositive ? "+" : ""}
                        {token.change24h.toFixed(2)}%
                    </span>
                </span>
            </span>
        </Button>
    );
}

export default function TokenList({ children, balancesVisible, className }: TokenListProps) {
    return (
        <span className={className}>
            {children.map((token) => {
                return (
                    <Token
                        key={token.id}
                        token={token}
                        balancesVisible={balancesVisible}
                    />
                );
            })}
        </span>
    );
}
