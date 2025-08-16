import { PolkadotProvider } from "@/components/polkadot-provider.tsx";
import { ThemeProvider } from "@/components/theme-provider";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./app.tsx";
import "./global.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<PolkadotProvider>
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				<App />
			</ThemeProvider>
		</PolkadotProvider>
	</StrictMode>
);
