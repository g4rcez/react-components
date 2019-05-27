import React from "react";
import "./button.css";

const basic = "pa1 bg-animate ph3 pv2 ba pointer f5";

const styles = {
    danger: `hover-white bg-hover-danger b--danger bg-transparent danger ${basic}`,
    success: `hover-white bg-hover-success b--light-success bg-transparent light-success ${basic}`,
    warn: `hover-white bg-hover-warn b--light-warn bg-transparent light-warn ${basic}`,
    info: `hover-white bg-hover-info b--dark-info bg-transparent info ${basic}`,
    primary: `hover-white bg-hover-primary b--primary bg-transparent primary ${basic}`,
    transparent: `bg-transparent btn-link no-outline ba b--transparent pointer ripple`
};

export type ButtonProps = {
    full?: boolean;
    styleType?: "danger" | "primary" | "info" | "success" | "warn" | "transparent";
    circle?: boolean;
    pill?: boolean;
} & React.ButtonHTMLAttributes<any>;

const Button = ({
	className = "",
    circle = false,
    pill = false,
    style,
    styleType,
    full,
    children,
    ...html
}: ButtonProps) => {
    const disabled = html.disabled ? "primary-disabled" : "";
    const stylus = styles[styleType || "primary"];
    return (
        <button
            {...html}
            style={{
                outline: "none",
                outlineStyle: "none",
                boxShadow: "none",
                borderWidth: "0.1rem",
                borderRadius: circle ? "100%" : "inherent",
                ...style
            }}
            className={`${stylus} ${full ? "fl w-100" : ""} ${disabled} ${pill ? "br-pill" : ""} ${className} `}
        >
            {children}
        </button>
    );
};

export default Button;
