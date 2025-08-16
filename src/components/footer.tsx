export function Footer() {
	return (
		<footer className="flex items-center justify-center w-full h-12">
			<span className="flex items-center space-x-2 mx-auto text-sm cursor-pointer">
				&copy; {new Date().getFullYear()} Polkadot-API Dapp
			</span>
		</footer>
	);
}
