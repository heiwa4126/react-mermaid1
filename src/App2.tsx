import { Links } from "./App";
import { MermaidComponent } from "./MermaidComponent";
import { m2j } from "./examples";

function App() {
	return (
		<>
			<h1>2. サンプルその2 - 下のテキストが上の図になる</h1>
			<MermaidComponent src={m2j} />
			<pre>{m2j}</pre>
			<nav>
				<Links />
			</nav>
		</>
	);
}
export default App;
