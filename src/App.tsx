import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import App1 from "./App1";
import App2 from "./App2";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<App1 />} />
				<Route path="/index.html" element={<App1 />} />
				{/* ↑デフォルトアプリ */}
				<Route path="/1" element={<App1 />} />
				<Route path="/2" element={<App2 />} />
			</Routes>
		</>
	);
}

export function Links() {
	return (
		<ol reversed>
			<li>
				<Link to="/2">その2</Link>
			</li>
			<li>
				<Link to="/1">その1</Link>
			</li>
		</ol>
	);
}

export default App;
