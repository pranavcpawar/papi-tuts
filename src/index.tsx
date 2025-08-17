import Loader from "@/components/loader.tsx";
import { PolkadotProvider } from "@/components/polkadot-provider.tsx";
import { SelectedAccountProvider } from "@/components/selected-account-provider.tsx";
import { ThemeProvider } from "@/components/theme-provider";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";

import { Toaster } from "sonner";
import App from "./app.tsx";
import "./global.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<PolkadotProvider>
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				<Suspense fallback={<Loader />}>
					<SelectedAccountProvider>
						<App />
						<Toaster position="bottom-center" theme="dark" richColors />
					</SelectedAccountProvider>
				</Suspense>
			</ThemeProvider>
		</PolkadotProvider>
	</StrictMode>
);
