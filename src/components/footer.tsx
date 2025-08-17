export function Footer() {
	return (
		<footer className="flex items-center justify-center w-full h-12 font-outfit">
			<span className="flex items-center space-x-2 mx-auto text-sm cursor-pointer text-[#b3b3b3]">
				&copy; {new Date().getFullYear()} Polkadot API dApp
			</span>
		</footer>
	);
}
