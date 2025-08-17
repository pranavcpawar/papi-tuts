import { SelectedAccountContext } from "@/types/selected-account-provider";
import type { WalletAccount } from "@reactive-dot/core/wallets.js";
import { useAccounts } from "@reactive-dot/react";
import { useEffect, useState } from "react";

const SELECTED_ACCOUNT_KEY = "papi:selected-account";

export function SelectedAccountProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [selectedAccount, _setSelectedAccount] = useState<WalletAccount | null>(
		null
	);

  const [isWalletOpen, setIsWalletOpen] = useState(false);

	const accounts = useAccounts();

	useEffect(() => {
		const stored = localStorage.getItem(SELECTED_ACCOUNT_KEY);
		if (stored) {
			_setSelectedAccount(
				accounts.find((account) => account.address === stored) || null
			);
		}
	}, [accounts]);

	function setSelectedAccount(account: WalletAccount | null) {
		_setSelectedAccount(account);
		if (account) {
			localStorage.setItem(SELECTED_ACCOUNT_KEY, account.address);
		} else {
			localStorage.removeItem(SELECTED_ACCOUNT_KEY);
		}
	}

  // eslint-disable-next-line react-x/no-unstable-context-value
  const value = {
    selectedAccount,
    setSelectedAccount,
    isWalletOpen,
    setIsWalletOpen
  }

	return (
		<SelectedAccountContext value={value}>
			{children}
		</SelectedAccountContext>
	);
}
