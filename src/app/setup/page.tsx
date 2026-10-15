"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { db } from "@/lib/db/db";
import Button from "@/components/Button";


// h1 {
//   max-width: 28ch;
//   color: var(--text);
//   font-family: "Hito Sans", ui-sans-serif, system-ui, sans-serif;
//   font-size: 3.5rem;
//   font-weight: 700;
//   line-height: 1.2;
//   text-wrap: balance;
// }

interface ListElementDescription {
    header: string;
    details: string;
}

export default function SetupPage() {
    const router = useRouter();
    const [isCreatingWallet, setIsCreatingWallet] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const liStyle = "grid grid-cols-[48px_256px_minmax(0,1fr)] gap-4 items-baseline py-4";
    const checkList: ListElementDescription[] = [
        {
            header: "Pair your Hito",
            details: "Unlock your Hito and send pairing request via Bluetooth"
        },
        {
            header: "Scan the QR code appeared",
            details: "The QR appeared will contain the data needed to pair your wallet with the app."
        },
        {
            header: "You're ready",
            details: "Start using Clarity Wallet"
        }
    ]

    async function createWallet() {
        if (isCreatingWallet) return;

        setIsCreatingWallet(true);
        setError(null);

        try {
            await db.transaction("rw", db.accounts, async () => {
                const id = "mock-hito-wallet";
                if (await db.accounts.get(id)) return;

                await db.accounts.add({
                    id,
                    name: "Mock Hito Wallet",
                    address: "0x000000000000000000000000000000000000dEaD",
                    derivationPath: "m/44'/60'/0'/0/0",
                    createdAt: Date.now(),
                });
            });

            router.replace("/dashboard");
        } catch {
            setError("Could not create your mock wallet. Please try again.");
            setIsCreatingWallet(false);
        }
    }

    return (
    <div className="py-6 flex section-inner flex-col gap-6">
        <h1 className="text-6xl font-bold font-sans">Set up your Clarity Wallet</h1>
        <p className="max-w-[64ch] m-0 text-text-muted text-lg leading-normal">
            In a few steps, connect your Hito wallet and get your account ready. Your private data never leaves the hardware wallet.
        </p>

        <ol className="">
            {checkList.map((currElement, index) => {return <li className={liStyle} key={index}>
                <span className="text-text-muted">0{index + 1}</span>
                <h3 className="text-3xl font-bold">{currElement.header}</h3>
                <p className="max-w-[48ch] m-0 text-text-muted text-xl leading-normal">{currElement.details}</p>
            </li>})}
        </ol>

        <Button variant="primary" className="px-8 py-4 max-w-72" onClick={createWallet} disabled={isCreatingWallet} aria-busy={isCreatingWallet}>
            {isCreatingWallet ? "Creating wallet..." : "Link Hardware Wallet"}
        </Button>
        {error && <p role="alert">{error}</p>}

    </div>
    );
}
