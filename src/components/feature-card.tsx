import { Button } from "@/components/ui/button";

export function FeatureCard({ title }: { title: string }) {
	return (
		<div className="w-full h-40 flex flex-col items-center justify-between rounded-md bg-[#181818] p-3">
			<p>{title}</p>
			<span className="w-full h-8 bg-[#252525] rounded-md"></span>
			<Button className="w-full h-10 font-outfit text-base cursor-pointer bg-[#252525] text-white hover:bg-[#252525]/80">
				{title}
			</Button>
		</div>
	);
}
