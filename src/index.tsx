import App from "@/components/app.tsx";
import PapiWrapper from "@/components/papi-wrapper.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const root = document.getElementById("root") as HTMLElement;

createRoot(root).render(
	<StrictMode>
		<PapiWrapper>
			<App />
		</PapiWrapper>
	</StrictMode>
);
