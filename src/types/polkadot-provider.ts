import { config } from "@/config";
import type { ChainId } from "@reactive-dot/core";
import { createContext } from "react";

export type PolkadotState = {
	chainId: ChainId;
	activeChain: (typeof config.chains)[ChainId];
	setChainId: (chainId: ChainId) => void;
};

const initialState: PolkadotState = {
	chainId: "paseo",
	activeChain: config.chains["paseo"],
	setChainId: () => null,
};

export const PolkadotContext = createContext(initialState);
