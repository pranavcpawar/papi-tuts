export function Footer() {
	return (
		<footer className="fixed bottom-0 w-full max-w-3xl h-8 flex items-center justify-between text-[#b3b3b3] font-outfit text-sm">
      <span className="flex items-center space-x-2 mx-auto text-sm cursor-pointer">
			&copy; {new Date().getFullYear()} Polkadot-API Dapp
      </span>
		</footer>
	);
}
