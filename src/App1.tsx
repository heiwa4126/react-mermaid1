import { Links } from "./App";
import { MermaidComponent } from "./MermaidComponent";
import { m1, m2 } from "./examples";

function App() {
	return (
		<>
			<h1>1. サンプルその1 - Mermaidとはこういうやつ</h1>
			<MermaidComponent src={m1} />
			<MermaidComponent src={m2} />
			<nav>
				<Links me="/1" />
			</nav>
		</>
	);
}
export default App;
