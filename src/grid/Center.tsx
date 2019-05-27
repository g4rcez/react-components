import * as React from "react";

export type CenterTypes = {
	style?: React.CSSProperties;
	className?: string;
	children: React.ReactNode;
};

export function Center(props: CenterTypes) {
	const style = props.style || {};
	return (
		<article className="vh-80 dt">
			<div style={style} className={`dtc v-mid ${props.className}`}>
				{props.children}
			</div>
		</article>
	);
}
