import { FeatureCard } from "@/components/feature-card";

export function Dapp() {
	return (
		<div className="flex flex-col items-center justify-center p-2 h-full mx-auto w-full max-w-3xl">
			<div className="grid grid-cols-2 gap-2 w-full h-full">
				<FeatureCard title="getBalances" />
				<FeatureCard title="getNonces" />
				<FeatureCard title="getSS58Prefix" />
				<FeatureCard title="getSS58Address" />
				<FeatureCard title="signMessage" />
				<FeatureCard title="transferTokens" />
			</div>
		</div>
	);
}
