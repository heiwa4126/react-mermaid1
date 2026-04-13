import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	base: process.env.GITHUB_REPO_NAME ?? "",
	plugins: [react()],
	build: {
		minify: true,
		rolldownOptions: {
			external: ["react", "react-dom/client", "react-router", "mermaid"],
			output: {
				minify: {
					compress: {
						dropConsole: true,
						dropDebugger: true,
					},
				},
			},
		},
	},
});
