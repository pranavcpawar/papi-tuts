import { ConnectWallet } from "./connect-wallet";

export function Header() {
	return (
		<header className="sticky top-0 w-full h-14 flex items-center justify-between">
			<div className="flex items-center space-x-4 w-full justify-between">
				<a href="/" className="flex items-center space-x-2 cursor-pointer">
					<img src="/polkadot.svg" alt="polkadot" className="w-8 h-8" />
					<h2 className="text-2xl font-unbounded text-white">Papi dApp</h2>
				</a>
				<ConnectWallet />
			</div>
		</header>
	);
}
