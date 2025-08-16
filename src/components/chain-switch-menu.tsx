import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { config } from "@/config";
import { PolkadotContext } from "@/types/polkadot-provider";
import type { ChainId } from "@reactive-dot/core";
import { use, useMemo } from "react";

export function ChainSwitchMenu() {
	const { chainId, setChainId, activeChain } = use(PolkadotContext);

	const Trigger = useMemo(() => {
		return (
			<Button className="size-10 cursor-pointer" variant="ghost" size="icon">
				{activeChain?.icon}
			</Button>
		);
	}, [activeChain]);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>{Trigger}</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56 font-outfit mr-2">
				<DropdownMenuLabel>Select Chain</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuRadioGroup
					value={chainId}
					onValueChange={(value) => {
						if (value) {
							setChainId(value as ChainId);
						}
					}}
				>
					{Object.keys(config.chains).map((chainId) => {
						const chain = config.chains[chainId as keyof typeof config.chains];
						return (
							<DropdownMenuRadioItem key={chainId} value={chainId}>
								{chain.icon}
								{chain.name}
							</DropdownMenuRadioItem>
						);
					})}
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
