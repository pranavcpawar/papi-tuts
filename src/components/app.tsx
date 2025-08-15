import { Dapp } from "@/components/dapp";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

function App() {
	return (
		<div className="dark relative flex w-screen min-h-screen flex-col place-items-center p-2 space-x-2">
			<Header />
			<Dapp />
			<Footer />
		</div>
	);
}

export default App;
