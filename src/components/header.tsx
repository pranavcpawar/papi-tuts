import { ChainSwitchMenu } from "@/components/chain-switch-menu";

export function Header() {
	return (
		<header className="sticky top-0 w-full h-12 flex items-center justify-between bg-amber-600 shadow-sm px-2">
			<div className="flex items-center space-x-4 w-full justify-between">
				<a href="/" className="flex items-center space-x-2 cursor-pointer">
					<img src="/polkadot.svg" alt="polkadot" className="w-8 h-8" />
					<h2 className="text-2xl font-unbounded text-white">Polkadot API</h2>
				</a>
			</div>
			<div className="flex items-center gap-2 justify-center">
				<ChainSwitchMenu />
			</div>
		</header>
	);
}
