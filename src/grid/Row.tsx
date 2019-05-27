import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const DivCollapse = styled.section`
    max-height: 0;
    overflow: hidden;
    transition: max-height ${(props: any) => props.time}s ease-in-out;
`;

export type SimpleRowTypes = {
    children: React.ReactNode;
    center?: boolean;
    className?: string;
    style?: React.CSSProperties;
    hidden?: boolean;
    collapse?: boolean;
    isOpen?: boolean;
    collapseTime?: number;
};

const Row = ({
    center,
    children,
    className,
    collapse = false,
    collapseTime = 0.35,
    hidden = false,
    isOpen = true,
    style,
    ...html
}: SimpleRowTypes & React.ButtonHTMLAttributes<any>) => {
    const isCenter = center ? "center" : "";
    const myRef: React.RefObject<HTMLDivElement> = useRef(null);
    const classCss = `cf fl w-100 ${isCenter} ${!!className ? className : ""}`;
    const props = {
        hidden,
        style,
        className: classCss
    };
    useEffect(() => {
        if (myRef.current) {
            if (!isOpen) {
                myRef.current.style.maxHeight = null;
            } else {
                myRef.current.style.maxHeight = `${myRef.current.scrollHeight}px`;
            }
        }
    }, [isOpen]);

    if (collapse) {
        return (
            //@ts-ignore
            <DivCollapse {...html} ref={myRef} time={collapseTime} {...props}>
                {children}
            </DivCollapse>
        );
    }
    return (
        <div {...html} {...props}>
            {children}
        </div>
    );
};

export default Row;
