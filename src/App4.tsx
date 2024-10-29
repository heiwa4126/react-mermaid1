import { useCallback, useEffect, useState } from "react";
import { Links } from "./App";
import { MermaidComponent } from "./MermaidComponent";
// import { m1, m2, m3 } from "./examples";

function App() {
	const [mcode, setMcode] = useState<string>("");
	const [mcode2, setMcode2] = useState<string>("");

	//#region ctrl+Enterの処理
	const handleKeyDown = useCallback(
		(event: KeyboardEvent) => {
			if (event.ctrlKey && event.key === "Enter") {
				setMcode2(mcode);
			}
		},
		[mcode],
	);
	useEffect(() => {
		document.addEventListener("keydown", handleKeyDown);
		// クリーンアップ関数
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleKeyDown]);
	//#endregion

	return (
		<>
			<h1>4. Mermaidを入力/更新してみる</h1>
			{mcode2 ? <MermaidComponent src={mcode2} /> : <div>(ここに図が描画されます)</div>}
			<textarea className="ta1" onChange={(e) => setMcode(e.target.value)}>
				{mcode}
			</textarea>
			<button type="button" onClick={() => setMcode2(mcode)}>
				更新 (ctrl+Enter)
			</button>
			<nav>
				<Links />
			</nav>
		</>
	);
}

export default App;
