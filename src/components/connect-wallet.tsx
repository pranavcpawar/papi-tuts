import { ChainSelectButton } from "@/components/chain-select-menu";

export function ConnectWallet() {
	return (
		<div className="flex items-center justify-center p-2 gap-2 text-white">
			<ChainSelectButton />
			{/* <Button
				variant="outline"
				className="flex items-center space-x-2 font-outfit cursor-pointer border-2 text-base h-10 rounded-xl"
			>
				Connect Wallet
			</Button> */}
			<div></div>
		</div>
	);
}
