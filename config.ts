import { logos } from "@/components/logos";
import { paseo, polkadot, westend } from "@polkadot-api/descriptors";
import { defineConfig } from "@reactive-dot/core";
import { InjectedWalletProvider } from "@reactive-dot/core/wallets.js";
import { getWsProvider } from "polkadot-api/ws-provider/web";

export const config = defineConfig({
	chains: {
		polkadot: {
			name: "Polkadot",
			descriptor: polkadot,
			provider: getWsProvider("wss://rpc.polkadot.io"),
			icon: logos.polkadot,
		},
		paseo: {
			name: "Paseo",
			descriptor: paseo,
			provider: getWsProvider("wss://paseo.api.onfinality.io/public-ws"),
			icon: logos.paseo,
		},
		westend: {
			name: "Westend",
			descriptor: westend,
			provider: getWsProvider("wss://westend.api.onfinality.io/public-ws"),
			icon: logos.westend,
		},
	},
	wallets: [new InjectedWalletProvider()],
});
