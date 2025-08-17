import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function FeatureCard({ title }: { title: string }) {
	async function handleSubmitGetBalances() {
		toast.success("GetBalances");
	}

	async function handleSubmitGetVersion() {
		toast.success("GetVersion");
	}

	async function handleSubmitGetNonce() {
		toast.success("GetNonce");
	}

	async function handleSubmitSignMessage() {
		toast.success("SignMessage");
	}

	async function handleSubmitGetSS58Address() {
		toast.success("GetSS58Address");
	}

	async function handleSubmitGetSS58Prefix() {
		toast.success("GetSS58Prefix");
	}

	const papi = [
		{
			title: "getVersion",
			handleSubmit: handleSubmitGetVersion,
		},
		{
			title: "getBalances",
			handleSubmit: handleSubmitGetBalances,
		},
		{
			title: "getNonces",
			handleSubmit: handleSubmitGetNonce,
		},
		{
			title: "getSS58Prefix",
			handleSubmit: handleSubmitGetSS58Prefix,
		},
		{
			title: "getSS58Address",
			handleSubmit: handleSubmitGetSS58Address,
		},
		{
			title: "signMessage",
			handleSubmit: handleSubmitSignMessage,
		},
		{
			title: "transferTokens",
			handleSubmit: handleSubmitGetBalances,
		},
	];

	return (
		<div className="w-full h-40 flex flex-col items-center justify-between rounded-md bg-[#181818] p-3">
			<p className="w-full h-8 font-outfit text-base tracking-tight">
				{papi.find((p) => p.title === title)?.title}
			</p>
			<span className="w-full h-8 bg-[#252525] rounded-md"></span>
			<Button
				onClick={papi.find((p) => p.title === title)?.handleSubmit}
				className="w-full h-10 font-outfit text-base cursor-pointer bg-[#252525] text-white hover:bg-[#252525]/80"
			>
				Submit
			</Button>
		</div>
	);
}
