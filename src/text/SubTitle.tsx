import React, { CSSProperties } from "react";

const SubTitle = ({
	children,
	className,
	style
}: {
	children: React.ReactNode;
	className?: string;
	style?: CSSProperties;
}) => (
	<span style={style} className={`f3 b black-70 ${className || ""}`}>
		{children}
	</span>
);

export default SubTitle;
