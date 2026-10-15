export interface WalletAccount {
  id: string;
  name: string;
  address: string;
  derivationPath: string;
  createdAt: number;
}

export interface WalletTransaction {
  id: string;
  accountId: string;
  hash: string;
  timestamp: number;
  status: "pending" | "confirmed" | "failed";
}

export interface WalletSetting {
  key: string;
  value: string;
}