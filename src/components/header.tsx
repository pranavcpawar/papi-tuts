import { ChainSwitchMenu } from "@/components/chain-switch-menu";
import ConnectButton from "@/components/connect-button";

export function Header() {
	return (
		<header className="sticky top-0 w-full h-12 flex items-center justify-between shadow-sm px-2 bg-background rounded-2xl">
			<div className="flex items-center space-x-4 w-full justify-between">
				<a href="/" className="flex items-center space-x-2 cursor-pointer">
					<img src="/polkadot.svg" alt="polkadot" className="w-8 h-8" />
					<h2 className="text-2xl font-unbounded text-white">PAPI</h2>
				</a>
			</div>
			<div className="flex items-center gap-2 justify-center">
				<ChainSwitchMenu />
				<ConnectButton />
			</div>
		</header>
	);
}
