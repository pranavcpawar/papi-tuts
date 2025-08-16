import { config } from "@/config";
import { PolkadotContext } from "@/types/polkadot-provider";
import type { ChainId } from "@reactive-dot/core";
import { ChainProvider, ReactiveDotProvider } from "@reactive-dot/react";
import React, { useMemo, useState } from "react";

export function PolkadotProvider({
	children,
	defaultChainId = "paseo",
}: {
	children: React.ReactNode;
	defaultChainId?: ChainId;
}) {
	const [chainId, setChainId] = useState<ChainId>(defaultChainId);

	const activeChain = config.chains[chainId];

	const value = useMemo(
		() => ({ chainId, activeChain, setChainId }),
		[chainId, activeChain, setChainId]
	);

	return (
		<PolkadotContext value={value}>
			<ChainProvider chainId="paseo">
				<ReactiveDotProvider config={config}>{children}</ReactiveDotProvider>
			</ChainProvider>
		</PolkadotContext>
	);
}
