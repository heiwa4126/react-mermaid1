import { useState } from "react";
import { Links } from "./App";
import { MermaidComponent } from "./MermaidComponent";
import { MySelect, type SelectData } from "./MySelect";
import { m1, m2, m2j, m3 } from "./examples";

// #region サンプルMermaidコード
const mcodes: SelectData<string>[] = [
	{ data: m1, label: "フロー図" },
	{ data: m2, label: "ガントチャート(英語)" },
	{ data: m2j, label: "ガントチャート(日本語)" },
	{ data: m3, label: "パイチャート" },
];
const initialIdx = 2;
// #endregion

function App() {
	const [selectedMcode, setSelectedMcode] = useState(mcodes[initialIdx].data);
	return (
		<>
			<h1>3. プルダウンで更新できるかテスト</h1>
			<MySelect
				id="mcodeSelect"
				dataArray={mcodes}
				valueIdx={initialIdx}
				onChange={setSelectedMcode}
			/>
			<pre>{selectedMcode}</pre>
			<p>↓</p>
			<MermaidComponent src={selectedMcode} />
			<nav>
				<Links me="/3" />
			</nav>
		</>
	);
}

export default App;
