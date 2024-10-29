import { useCallback, useEffect, useRef, useState } from "react";
import { Links } from "./App";
import { MermaidComponent } from "./MermaidComponent";
import { m1, m2, m3 } from "./examples";

// Ctrl+Enterで何かをするカスタムフック
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function useCtrlEnter(callback: () => void, dependencies: any[] = []) {
	const handleKeyDown = useCallback(
		(event: KeyboardEvent) => {
			if (event.ctrlKey && event.key === "Enter") {
				callback();
			}
		},
		[callback],
	);

	useEffect(() => {
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleKeyDown, ...dependencies]);
}

function App() {
	const [mcode, setMcode] = useState<string>("");
	const [mcode2, setMcode2] = useState<string>("");

	const updateMcode2 = () => setMcode2(mcode);
	useCtrlEnter(updateMcode2, [mcode]);

	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const updateTextarea = (newContent: string) => {
		if (textareaRef.current) {
			textareaRef.current.value = newContent;
			setMcode(newContent);
		}
	};
	const updateAll = (m: string) => {
		updateTextarea(m);
		setMcode2(m);
	};

	return (
		<>
			<h1>4. Mermaid を入力/更新してみる</h1>
			{mcode2 ? <MermaidComponent src={mcode2} /> : <div>(ここに図が描画されます)</div>}
			<div>
				<textarea ref={textareaRef} className="ta1" onChange={(e) => setMcode(e.target.value)}>
					{mcode}
				</textarea>
				<br />
				<button type="button" onClick={updateMcode2}>
					更新 (Ctrl+Enter)
				</button>
			</div>
			<div>
				<button type="button" onClick={() => updateAll(m1)}>
					↑ サンプル1
				</button>
				<button type="button" onClick={() => updateAll(m2)}>
					↑ サンプル2
				</button>
				<button type="button" onClick={() => updateAll(m3)}>
					↑ サンプル3
				</button>
			</div>
			<nav>
				<Links />
			</nav>
		</>
	);
}

export default App;
