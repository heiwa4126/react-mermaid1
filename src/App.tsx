import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import App1 from "./App1";
import App2 from "./App2";
import App3 from "./App3";
import App3a from "./App3a";
import App4 from "./App4";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<App3a />} />
				<Route path="/index.html" element={<App3a />} />
				{/* ↑デフォルトアプリ */}
				<Route path="/1" element={<App1 />} />
				<Route path="/2" element={<App2 />} />
				<Route path="/3" element={<App3 />} />
				<Route path="/3a" element={<App3a />} />
				<Route path="/4" element={<App4 />} />
			</Routes>
		</>
	);
}

export function Links() {
	return (
		<ol reversed>
			<li>
				<Link to="/4">Mermaidを入力/更新してみる</Link>
			</li>
			<li>
				<Link to="/3">プルダウンで更新できるかテスト</Link>
			</li>
			<li>
				<Link to="/2">サンプルその2 - 上のテキストが下の図になる</Link>
			</li>
			<li>
				<Link to="/1">サンプルその1 - Mermaidとはこういうやつ</Link>
			</li>
		</ol>
	);
}

export default App;
