import React, { CSSProperties } from "react";

export default ({
    children,
    className,
    style
}: {
    children: React.ReactNode;
    className?: string;
    style?: CSSProperties;
}) => (
    <span style={style} className={`f2 b black-70 ${className || ""}`}>
        {children}
    </span>
);
