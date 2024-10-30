import { Links } from "./App";
import { MermaidComponent } from "./MermaidComponent";
import { m2j } from "./examples";

function App() {
	return (
		<>
			<h1>2. サンプルその2 - 上のテキストが下の図になる</h1>
			<pre>{m2j}</pre>
			<p>↓</p>
			<MermaidComponent src={m2j} />
			<nav>
				<Links me="/2" />
			</nav>
		</>
	);
}
export default App;
