"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db/db";

export default function Dashboard() {
    const router = useRouter();

    const hasWallet = useLiveQuery(
        async () => (await db.accounts.count()) > 0,
        []
    );

    useEffect(() => {
        if (hasWallet === undefined) return;

        router.replace(hasWallet ? "/dashboard" : "/setup");
    }, [hasWallet, router]);

    return (
        <p>Loading...</p>
    );
}