import React, { useState, useEffect } from "react";
import ArrowUp from "../icons/ArrowUp";
const getPercent = (max: number, current: number) => {
    return current >= max * 0.08;
};

type Props = {
    right?: number;
    bottom?: number;
    zIndex?: number;
    children?: React.ReactNode;
};

const toTop = () => window.scrollTo(0, 0);

export default ({ bottom = 20, right = 20, zIndex = 9999, children = <ArrowUp color="black" /> }: Props) => {
    const [display, setDisplay] = useState("none");
    useEffect(() => {
        const disable = () => {
            const lastPosition = window.scrollY;
            const max = document.body.scrollHeight;
            if (getPercent(max, lastPosition)) {
                setDisplay("block");
            } else {
                setDisplay("none");
            }
        };
        addEventListener("scroll", disable);
        return () => removeEventListener("scroll", disable);
    }, []);
    return (
        <div
            className="pointer no-print grow-large"
            onClick={toTop}
            style={{ bottom, right, zIndex, display, position: "fixed" }}
        >
            {children}
        </div>
    );
};
