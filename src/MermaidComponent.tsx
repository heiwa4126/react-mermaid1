import mermaid from "mermaid";
import { useEffect, useRef } from "react";

export const MermaidComponent = ({ src }: { src: string }) => {
	const mermaidRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (src && mermaidRef.current) {
			mermaid.init(undefined, mermaidRef.current);
			// ↑ここでinitはdeprecatedとか言われるけど、mermaidのコラボレータが
			// https://github.com/mermaid-js/mermaid/issues/374 と言ってるので、
			// 無視してください。
		}
	}, [src]);

	return (
		<div className="mermaid" ref={mermaidRef} key={src}>
			{src}
		</div>
	);
};
