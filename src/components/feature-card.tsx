import type { ReactNode } from "react";

export function FeatureCard({ children }: { children: ReactNode }) {
	return (
		<div className="w-full h-40 flex flex-col items-center justify-between rounded-md bg-[#181818] p-3">
			{children}
		</div>
	);
}
