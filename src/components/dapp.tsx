import { FeatureCard } from "@/components/feature-card";
import { PolkadotContext } from "@/types/polkadot-provider";
import { useBlock, useLazyLoadQuery } from "@reactive-dot/react";
import { use } from "react";

export function Dapp() {
	const { activeChain } = use(PolkadotContext);
	const timestamp = useLazyLoadQuery((builder) =>
		builder.storage("Timestamp", "Now", [], { at: "finalized" })
	);

	const block = useBlock("finalized", { chainId: activeChain.name });

	return (
		<div className="flex flex-col items-center justify-center p-2 h-full mx-auto w-full max-w-3xl gap-2 flex-1">
			<FeatureCard title="getVersion" />
			<div className="grid grid-cols-2 gap-2 w-full h-full">
				<FeatureCard title="getBalances" />
				<FeatureCard title="getNonces" />
				<FeatureCard title="getSS58Prefix" />
				<FeatureCard title="getSS58Address" />
				<FeatureCard title="signMessage" />
				<FeatureCard title="transferTokens" />
				<FeatureCard title="transferTokens" />
				<FeatureCard title="transferTokens" />
				<FeatureCard title="transferTokens" />
			</div>
			<div className="flex flex-col items-center space-x-2 text-sm cursor-pointer font-outfit w-full p-2 flex-1 justify-end">
				<span className="flex items-center space-x-1 text-sm cursor-pointer justify-end w-full">
					<span className="bg-green-500 w-1.5 h-1.5 rounded-full inline-block animate-pulse" />
					<span className="text-[#b3b3b3]">{block.number}</span>
				</span>
				<span className="flex items-center justify-end text-sm cursor-pointer text-[#b3b3b3] w-full">
					{new Date(Number(timestamp)).toLocaleString()}
				</span>
			</div>
		</div>
	);
}
