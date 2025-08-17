import { paseo, polkadot, westend } from "@polkadot-api/descriptors";
import { defineConfig } from "@reactive-dot/core";
import { InjectedWalletProvider } from "@reactive-dot/core/wallets.js";
import { getWsProvider } from "polkadot-api/ws-provider/web";
import { logos } from "./components/logos";

export const config = defineConfig({
	chains: {
		polkadot: {
			descriptor: polkadot,
			name: "polkadot",
			provider: getWsProvider("wss://rpc.ibp.network/polkadot"),
			icon: logos.polkadot,
		},
		paseo: {
			descriptor: paseo,
			name: "paseo",
			provider: getWsProvider("wss://paseo.rpc.amforc.com"),
			icon: logos.paseo,
		},
		westend: {
			descriptor: westend,
			name: "westend",
			provider: getWsProvider("wss://westend-rpc.n.dwellir.com"),
			icon: logos.westend,
		},
	},
	wallets: [new InjectedWalletProvider()],
	ssr: false,
});
