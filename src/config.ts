import { paseo } from "@polkadot-api/descriptors";
import { defineConfig } from "@reactive-dot/core";
import { InjectedWalletProvider } from "@reactive-dot/core/wallets.js";
import { getWsProvider } from "polkadot-api/ws-provider/web";
import { logos } from "./components/logos";

export const config = defineConfig({
	chains: {
		paseo: {
			descriptor: paseo,
			name: "paseo",
			provider: getWsProvider("wss://paseo.rpc.amforc.com"),
			icon: logos.paseo,
		},
	},
	wallets: [new InjectedWalletProvider()],
	ssr: false,
});
