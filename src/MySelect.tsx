import { useState } from "react";
import type { JSX } from "react/jsx-runtime";

export interface SelectData<T> {
	data: T;
	label: string;
}

// <select>のocChangeイベントとvalue以外をpropsで渡せるようになっている
interface MySelectProps<T> extends Omit<JSX.IntrinsicElements["select"], "onChange" | "value"> {
	dataArray: Array<SelectData<T>>;
	onChange: (data: T) => void;
	valueIdx: number;
}

export function MySelect<T>({ dataArray, valueIdx, onChange, ...selectProps }: MySelectProps<T>) {
	const [selectedIndex, setSelectedIndex] = useState(valueIdx);

	const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const newIndex = Number.parseInt(event.target.value, 10);
		setSelectedIndex(newIndex);
		onChange(dataArray[newIndex].data);
	};

	return (
		<select onChange={handleSelectChange} value={selectedIndex} {...selectProps}>
			{dataArray.map(({ label }, index) => (
				<option key={`${index}${label}`} value={index}>
					{label}
				</option>
			))}
		</select>
	);
}
