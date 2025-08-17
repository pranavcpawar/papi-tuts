"use client";

import { NavigationButton } from "@/components/account/navigation-button";
import { dotWallets } from "@/components/account/wallets";
import { Identicon } from "@/components/identicon";
import { Button } from "@/components/ui/button";
import type { ViewNavigationProps } from "@/components/ui/multi-view-dialog";
import { trimAddress } from "@/lib/utils";
import { SelectedAccountContext } from "@/types/selected-account-provider";
import { useAccounts, useWallets } from "@reactive-dot/react";
import { use } from "react";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

function AccountInfo({
	address,
	logo,
	name,
}: {
	address: string;
	logo: string | undefined;
	name: string;
}) {
	return (
		<div className="flex w-full items-center justify-between gap-2 font-outfit">
			<Identicon className="h-10 w-10" value={address} size={32} />
			<div className="flex w-full flex-col items-start justify-center gap-1">
				<div className="flex items-center gap-1">
					{logo && (
						<img
							src={logo}
							alt={name}
							width={32}
							height={32}
							className="h-4 w-4"
						/>
					)}
					<span className="text-foreground truncate text-sm font-bold">
						{name}
					</span>
				</div>
				<span className="text-info font-poppins text-xs font-medium tracking-tight">
					{trimAddress(address, 12)}
				</span>
			</div>
		</div>
	);
}
export default function ViewSelectAccount({ previous }: ViewNavigationProps) {
	const accounts = useAccounts();
	const wallets = useWallets();

	const { setIsWalletOpen, setSelectedAccount } = use(SelectedAccountContext);

	return (
		<div className="flex flex-col gap-2 p-2">
			<div className="flex max-h-[45vh] grow flex-col gap-2 overflow-y-auto px-2 sm:max-h-[70vh]">
				{wallets.map((wallet) => {
					const walletMetadata = dotWallets.find((w) => w.id === wallet.name);

					const walletAccounts = accounts.filter(
						(account) => account.wallet === wallet
					);

					return (
						<div key={wallet.name} className="flex flex-col gap-2">
							{walletAccounts.map((account) => {
								return (
									<Button
										key={account.address}
										variant="outline"
										className="font-manrope bg-background/10 border-border flex h-14 w-full cursor-pointer items-center gap-2 rounded-[0.625rem] border-2 p-2 px-2 py-1 text-sm font-medium font-stretch-condensed transition-colors duration-100 hover:bg-[#252525]/50 active:scale-[0.99]"
										onClick={() => {
											setSelectedAccount(account);
											setIsWalletOpen(false);
										}}
									>
										<AccountInfo
											key={account.address}
											address={account.address}
											logo={walletMetadata?.logoUrls[0]}
											name={walletMetadata?.name ?? wallet.name}
										/>
									</Button>
								);
							})}
						</div>
					);
				})}
			</div>
			<NavigationButton
				Icon={MdOutlineKeyboardDoubleArrowLeft}
				text="Manage wallets"
				onClick={previous}
				disabled={!wallets.length}
			/>
		</div>
	);
}
