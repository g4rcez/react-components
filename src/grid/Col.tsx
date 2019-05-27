import * as React from "react";

export type Measures =
    | 5
    | 10
    | 15
    | 20
    | 25
    | 30
    | 33
    | 34
    | 40
    | 50
    | 60
    | 70
    | 75
    | 80
    | 85
    | 90
    | 95
    | 100
    | "auto"
    | "two-thirds"
    | "third";

export type SimpleColTypes = {
    children?: React.ReactNode;
    center?: boolean;
    className?: string;
    style?: React.CSSProperties;
    desktop: Measures;
    mobile?: Measures;
    spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
};

export default ({ desktop, spacing: gutter = 0, style, className = "", mobile = 100, children }: SimpleColTypes) => (
    <div
        style={style}
        className={`fl w-${mobile} w-${desktop}-ns w-${desktop}-l w-${desktop}-m ph${gutter} ${className}`}
    >
        <div className="cf">{children}</div>
    </div>
);
