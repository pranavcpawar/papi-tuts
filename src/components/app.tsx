import { Dapp } from "./dapp";
import { Footer } from "./footer";
import { Header } from "./header";

function App() {
	return (
		<div className="relative flex w-screen min-h-screen flex-col place-items-center space-y-4 p-3">
			<Header />
      <Dapp />
			<Footer />
		</div>
	);
}

export default App;
