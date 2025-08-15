import { ThemeProvider } from "@/components/theme-provider";
import type { ChainId } from "@reactive-dot/core";
import { ChainProvider, ReactiveDotProvider } from "@reactive-dot/react";
import { createContext, useState } from "react";
import { config } from "../../config";

type PapiWrapperState = {
	chainId: ChainId;
	activeChain: (typeof config.chains)[keyof typeof config.chains];
	setChainId: (chainId: ChainId) => void;
};

const initialState: PapiWrapperState = {
	chainId: "paseo",
	activeChain: config.chains["paseo"],
	setChainId: () => null,
};

export const PapiWrapperContext = createContext<PapiWrapperState>(initialState);

export default function PapiWrapper({
	children,
	defaultChainId = "paseo",
}: {
	children: React.ReactNode;
	defaultChainId?: ChainId;
}) {
	const [chainId, setChainId] = useState<ChainId>(defaultChainId);

	const activeChain = config.chains[chainId as keyof typeof config.chains];

	const value = {
		chainId,
		activeChain,
		setChainId,
	};

	return (
		<PapiWrapperContext value={value}>
			<ThemeProvider>
				<ReactiveDotProvider config={config}>
					<ChainProvider chainId={chainId}>{children}</ChainProvider>
				</ReactiveDotProvider>
			</ThemeProvider>
		</PapiWrapperContext>
	);
}
