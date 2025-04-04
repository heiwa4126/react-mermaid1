import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root");
if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<HashRouter>
				<App />
			</HashRouter>
		</StrictMode>,
	);
} else {
	console.error("Failed to find the root element.");
}
