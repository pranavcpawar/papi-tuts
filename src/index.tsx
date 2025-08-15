import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app.tsx";
import PapiWrapper from "./components/papi-wrapper.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<PapiWrapper>
			<App />
		</PapiWrapper>
	</StrictMode>
);
