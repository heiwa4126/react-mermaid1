import { useState } from "react";
import { Links } from "./App";
import { MermaidComponent } from "./MermaidComponent";
import { m1, m2, m2j, m3 } from "./examples";

// #region サンプルMermaidコード
enum McodeKey {
	m1 = "m1",
	m2 = "m2",
	m2j = "m2j",
	m3 = "m3",
} // NOTE: 文字列がのぞましい

interface McodeVal {
	data: string;
	label: string;
}
const initialMcode = McodeKey.m2j;
const mcodeDatas: Map<McodeKey, McodeVal> = new Map([
	[McodeKey.m1, { data: m1, label: "フロー図" }],
	[McodeKey.m2, { data: m2, label: "ガントチャート(英語)" }],
	[McodeKey.m2j, { data: m2j, label: "ガントチャート(日本語)" }],
	[McodeKey.m3, { data: m3, label: "パイチャート" }],
]);
// #endregion

function App() {
	const [selectedMcode, setSelectedMcode] = useState<string>(
		// biome-ignore lint/style/noNonNullAssertion: <explanation>
		mcodeDatas.get(initialMcode)!.data,
	);

	const handleMcodeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = event.target.value as McodeKey;
		// biome-ignore lint/style/noNonNullAssertion: <explanation>
		setSelectedMcode(mcodeDatas.get(selectedValue)!.data);
	};

	return (
		<>
			<h1>3. プルダウンで更新できるかテスト</h1>
			<select id="mcodeSelect" onChange={handleMcodeChange} defaultValue={initialMcode}>
				{Array.from(mcodeDatas.entries()).map(([key, { label }]) => (
					<option key={key} value={key}>
						{label}
					</option>
				))}
			</select>
			<pre>{selectedMcode}</pre>
			<p>↓</p>
			<MermaidComponent src={selectedMcode} />
			<nav>
				<Links />
			</nav>
		</>
	);
}

export default App;
