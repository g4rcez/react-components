import React from "react";
import "./loader.css";

export type Props = {
    color?: string;
    velocity?: number;
    border?: number;
    className?: string;
} & HTMLSpanElement;

export default ({ className = "", color = "#000000", velocity = 1, border = 0.2, ...props }: Props) => (
    // @ts-ignore
    <span
        {...props}
        style={{
            animation: `donut-spin ${velocity}s linear infinite`,
            border: `${border}rem solid rgba(0, 0, 0, 0.1)`,
            borderLeftColor: color,
        }}
        className={`donutSpinner ${className}`}
    />
);
