import * as React from "react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ChainSelectButton() {
	const [position, setPosition] = React.useState("paseo");

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button size="icon" variant="ghost">
					Open
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-28">
				<DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
					<DropdownMenuRadioItem value="polkadot">Polkadot</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value="paseo">Paseo</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value="westend">Westend</DropdownMenuRadioItem>
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
