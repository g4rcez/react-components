import * as React from "react";

export type RightType = {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
};

export default ({ className = "", ...props }: RightType) => {
    const style = props.style || {};
    return (
        <div style={style} className={`cf fr ${className}`}>
            {props.children}
        </div>
    );
};
