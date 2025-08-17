import { ViewSelectAccount, ViewSelectWallet } from "@/components/account";
import { Identicon } from "@/components/identicon";
import { Button } from "@/components/ui/button";
import {
	type DialogView,
	MultiViewDialog,
} from "@/components/ui/multi-view-dialog";
import { convertSS58, trimAddress } from "@/lib/utils";
import { PolkadotContext } from "@/types/polkadot-provider";
import { SelectedAccountContext } from "@/types/selected-account-provider";
import { useConnectedWallets } from "@reactive-dot/react";
import { use } from "react";

function Wallet({ address, name }: { address: string; name: string }) {
	return (
		<div className="font-outfit flex w-full items-center justify-between gap-3">
			<div className="flex w-full flex-col items-start justify-center">
				<span className="text-foreground truncate text-sm font-bold">
					{name}
				</span>
				<span className="font-outfit text-[12px] font-medium">
					{trimAddress(address, 6)}
				</span>
			</div>
		</div>
	);
}

export default function ConnectButton() {
	const { selectedAccount } = use(SelectedAccountContext);
	const { chainId } = use(PolkadotContext);
	const connectedWallets = useConnectedWallets();

	const views: DialogView[] = [
		{
			title: "Connect Wallet",
			description:
				"Select a wallet to connect to your account. If you don't have a wallet installed, you can install one from the list.",
			content: ({ next, previous }) => (
				<ViewSelectWallet next={next} previous={previous} />
			),
		},
		{
			title: "Select Account",
			description: "Select an account to use for app interactions",
			content: ({ previous }) => <ViewSelectAccount previous={previous} />,
		},
	];
	return (
		<Button
			size="lg"
			variant="outline"
			className="font-outfit flex h-10 min-w-32 cursor-pointer items-center justify-center rounded-[0.625rem] px-2 py-1 text-base font-medium tracking-tight font-stretch-condensed transition-colors duration-100 active:scale-[0.99]"
		>
			<MultiViewDialog
				initialView={connectedWallets.length > 0 ? 1 : 0}
				trigger={
					<div className="flex items-center gap-2 w-full font-outfit">
						{selectedAccount?.name && (
							<Wallet
								address={convertSS58(selectedAccount.address, chainId)}
								name={selectedAccount.name}
							/>
						)}
						{!selectedAccount?.address && (
							<span className="truncate sm:block w-full text-center">
								Connect
							</span>
						)}
					</div>
				}
				views={views}
			/>
			{selectedAccount?.address && (
				<Identicon
					value={selectedAccount.address}
					size={30}
					className="[&>svg>circle:first-child]:fill-none"
				/>
			)}
		</Button>
	);
}
