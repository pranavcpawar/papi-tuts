import { FeatureCard } from "@/components/feature-card";
import { PolkadotContext } from "@/types/polkadot-provider";
import { SelectedAccountContext } from "@/types/selected-account-provider";
import { MultiAddress } from "@polkadot-api/descriptors";
import { idle } from "@reactive-dot/core";
import { useBlock, useLazyLoadQuery, useTypedApi } from "@reactive-dot/react";
import { use } from "react";
import { Button } from "./ui/button";
import { formatBalance } from "@/lib/utils";

export function Dapp() {
	const { activeChain } = use(PolkadotContext);
	const api = useTypedApi();
	const { selectedAccount } = use(SelectedAccountContext);
	const timestamp = useLazyLoadQuery((builder) =>
		builder.storage("Timestamp", "Now", [], { at: "finalized" })
	);
	const block = useBlock("finalized", { chainId: activeChain.name });

	async function send() {
		const amount = document.getElementById("amount") as HTMLInputElement | null;

		if (api && selectedAccount && amount) {
			const value = BigInt(amount.value) * 10n ** BigInt(10);
			try {
				await api.tx.Balances.transfer_keep_alive({
					dest: MultiAddress.Id(selectedAccount.address),
					value,
				}).signAndSubmit(selectedAccount.polkadotSigner);
			} catch (error) {
				console.error(error);
			}
		}
	}

	const balances = useLazyLoadQuery((builder) =>
		selectedAccount?.address
			? builder.storage("System", "Account", [selectedAccount.address], {
					at: "best",
			  })
			: undefined
	);
	if (balances === idle) return 0;

	return (
		<div className="flex flex-col items-center justify-center p-2 h-full mx-auto w-full max-w-3xl gap-2 flex-1">
			<div className="grid grid-cols-2 gap-2 w-full h-full">
				<FeatureCard>
					<p className="w-full h-8 font-outfit text-base tracking-tight">
						Account Balance
					</p>
					<span className="w-full h-8 bg-[#252525] rounded-md flex items-center justify-center">
						{formatBalance({
							value: balances.data.free,
							decimals: 10,
							options: {
								nDecimals: 2,
							}
						})} PAS
					</span>
				</FeatureCard>
				<FeatureCard>
					<p className="w-full h-8 font-outfit text-base tracking-tight">
						Nonce
					</p>
					<span className="w-full h-8 bg-[#252525] rounded-md flex items-center justify-center">
						{balances.nonce}
					</span>
				</FeatureCard>
				<FeatureCard>
					<p className="w-full h-8 font-outfit text-base tracking-tight">
						Transfer Tokens
					</p>
					<input
						id="amount"
						name="amount"
						type="number"
						autoComplete="off"
						className="w-full h-10 bg-[#252525] rounded-md outline-none p-2"
					/>
					<Button onClick={send} className="w-full h-8 bg-[#252525] rounded-md">
						Send
					</Button>
				</FeatureCard>
			</div>
			<div className="flex flex-col items-center space-x-2 text-sm cursor-pointer font-outfit w-full p-2 flex-1 justify-end">
				<span className="flex items-center space-x-1 text-sm cursor-pointer justify-end w-full">
					<span className="bg-green-500 w-1.5 h-1.5 rounded-full inline-block animate-pulse" />
					<span className="text-[#b3b3b3]">{block.number}</span>
				</span>
				<span className="flex items-center justify-end text-sm cursor-pointer text-[#b3b3b3] w-full">
					{new Date(Number(timestamp)).toLocaleString()}
				</span>
			</div>
		</div>
	);
}
