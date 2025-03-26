import { Link, Route, Routes } from "react-router";
import "./App.css";
import App1 from "./App1";
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";

const links = [
	{ to: "/4", text: "Mermaidを入力/更新してみる" },
	{ to: "/3", text: "プルダウンで更新できるかテスト" },
	{ to: "/2", text: "サンプルその2 - 上のテキストが下の図になる" },
	{ to: "/1", text: "サンプルその1 - Mermaidとはこういうやつ" },
];

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<App3 />} />
				<Route path="/index.html" element={<App3 />} />
				{/* ↑デフォルトアプリ */}
				<Route path="/1" element={<App1 />} />
				<Route path="/2" element={<App2 />} />
				<Route path="/3" element={<App3 />} />
				<Route path="/4" element={<App4 />} />
			</Routes>
		</>
	);
}

export function Links({ me }: { me?: string }) {
	return (
		<ol reversed>
			{links.map((link) => (
				<li key={link.to}>{link.to !== me ? <Link to={link.to}>{link.text}</Link> : link.text}</li>
			))}
		</ol>
	);
}

export default App;
