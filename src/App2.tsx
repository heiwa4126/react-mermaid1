import { Links } from "./App";
import { MermaidComponent } from "./MermaidComponent";

function App() {
	const m2 = `gantt
title A Gantt Diagram
dateFormat  YYYY-MM-DD
section Section
A task          :a1, 2014-01-01, 30d
Another task    :after a1  , 20d
section Another
Task in sec     :2014-01-12  , 12d
another task    : 24d`;

	return (
		<>
			<h1>2. その2</h1>
			<MermaidComponent src={m2} />
			<pre>{m2}</pre>
			<nav>
				<Links />
			</nav>
		</>
	);
}
export default App;
