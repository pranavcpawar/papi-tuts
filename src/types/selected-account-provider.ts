import type { WalletAccount } from "@reactive-dot/core/wallets.js";
import { createContext } from "react";

export type SelectedAccountContext = {
	selectedAccount: WalletAccount | null;
	setSelectedAccount: (account: WalletAccount | null) => void;
  isWalletOpen: boolean;
  setIsWalletOpen: (open: boolean) => void;
};

export const SelectedAccountContext = createContext<SelectedAccountContext>({
	selectedAccount: null,
	setSelectedAccount: () => null,
  isWalletOpen: false,
  setIsWalletOpen: () => null
});
