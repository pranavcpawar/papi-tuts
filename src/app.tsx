import { Dapp } from "@/components/dapp";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function App() {
	return (
		<div className="dark relative flex min-h-screen flex-col items-center justify-between p-2 space-x-1  mx-auto min-w-screen bg-background">
			<div className="flex flex-col flex-1 items-center justify-start w-full h-full">
				<Header />
				<Dapp />
				<Footer />
			</div>
		</div>
	);
}
