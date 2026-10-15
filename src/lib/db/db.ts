import Dexie, { type EntityTable } from "dexie";

import type {
    WalletAccount,
    WalletTransaction,
    WalletSetting,
} from "./types";

export const db = new Dexie("hito-wallet") as Dexie & {
    accounts: EntityTable<WalletAccount, "id">;
    transactions: EntityTable<WalletTransaction, "id">;
    settings: EntityTable<WalletSetting, "key">;
};

db.version(4).stores({
    profiles: null,
    networks: null,
    accounts: "id, address",
    transactions: "id, accountId, hash, timestamp",
    settings: "key",
});