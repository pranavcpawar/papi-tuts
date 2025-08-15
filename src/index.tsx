import App from "@/components/app.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const root = document.getElementById("root") as HTMLElement;

createRoot(root).render(
	<StrictMode>
		<App />
	</StrictMode>
);
