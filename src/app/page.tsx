import type { WalletToken } from "@/components/Tokens/TokenList";
import WalletDashboard from "@/components/WalletDashboard";

const tokens: WalletToken[] = [
    {
        id: "bitcoin-native",
        name: "Bitcoin",
        symbol: "BTC",
        balance: 0.0421,
        priceUsd: 117_430.25,
        change24h: 2.41,
        network: {
            id: "bitcoin",
            name: "Bitcoin",
            shortName: "BTC",
        },
        verified: true,
    },
    {
        id: "ethereum-native",
        name: "Ethereum",
        symbol: "ETH",
        balance: 1.375,
        priceUsd: 4_620.82,
        change24h: -1.18,
        network: {
            id: "ethereum",
            name: "Ethereum",
            shortName: "ETH",
        },
        verified: true,
    },
    {
        id: "zcash-native",
        name: "Zcash",
        symbol: "ZEC",
        balance: 24.8,
        priceUsd: 53.74,
        change24h: 4.63,
        network: {
            id: "zcash",
            name: "Zcash",
            shortName: "ZEC",
        },
        verified: true,
    },
    {
        id: "solana-native",
        name: "Solana",
        symbol: "SOL",
        balance: 8.42,
        priceUsd: 238.16,
        change24h: 3.07,
        network: {
            id: "solana",
            name: "Solana",
            shortName: "SOL",
        },
        verified: true,
    },
    {
        id: "usdc-ethereum",
        name: "USD Coin",
        symbol: "USDC",
        balance: 1_250.5,
        priceUsd: 1,
        change24h: 0.01,
        network: {
            id: "ethereum",
            name: "Ethereum",
            shortName: "ETH",
        },
        contractAddress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        verified: true,
    },
    {
        id: "usdc-solana",
        name: "USD Coin",
        symbol: "USDC",
        balance: 340,
        priceUsd: 1,
        change24h: 0.01,
        network: {
            id: "solana",
            name: "Solana",
            shortName: "SOL",
        },
        contractAddress: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        verified: true,
    },
    {
        id: "usdt-ethereum",
        name: "Tether",
        symbol: "USDT",
        balance: 420,
        priceUsd: 0.9998,
        change24h: -0.02,
        network: {
            id: "ethereum",
            name: "Ethereum",
            shortName: "ETH",
        },
        contractAddress: "0xdac17f958d2ee523a2206206994597c13d831ec7",
        verified: true,
    },
];

export default function Dashboard() {
    return <WalletDashboard tokens={tokens} />;
}
