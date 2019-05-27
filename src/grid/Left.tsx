import * as React from "react";

export type LeftType = {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
};

export default ({ className = "", ...props }: LeftType) => (
    <div style={props.style} className={`cf fl ${className}`}>
        {props.children}
    </div>
);
