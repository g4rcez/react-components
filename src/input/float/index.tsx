import React, { useState, useEffect } from "react";
import "./float-input.css";
import Input, { MaskInputProps } from "../mask/index";
import { tint } from "polished";

const onActive = "form-field__control form-field--is-active";

type Props = {
    divClassName?: string;
    divStyle?: React.CSSProperties;
    labelClassName?: string;
    labelStyle?: React.CSSProperties;
    name: string;
    message?: React.ReactNode;
};
const initialField = "form-field__control";

type FloatInputType = React.InputHTMLAttributes<HTMLInputElement> & Props & MaskInputProps;

const FloatInput = (props: FloatInputType) => {
    const {
        className = "",
        placeholder = "",
        labelStyle,
        labelClassName = "",
        divClassName = "",
        divStyle = {},
        maskType,
        onBlur = () => "",
        onFocus = () => "",
        value = "",
        name,
        message,
        ...inputHtml
    } = props;
    const [field, setField] = useState(initialField);

    const blur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (!e.target.value) {
            setField(`${initialField} ${divClassName}`);
        }
        return onBlur(e);
    };

    const focus = (e: React.FocusEvent<HTMLInputElement>) => {
        setField(`${onActive} ${divClassName}`);
        return onFocus(e);
    };

    useEffect(() => {
        if (!!value) {
            setField(`${onActive} ${divClassName}`);
        }
    }, [value]);
    return (
        <div style={{ ...divStyle }} className={field}>
            <label
                style={{ color: tint(0.4, "#000000"), ...labelStyle }}
                htmlFor={name}
                className={`form-field__label ${labelClassName}`}
            >
                {placeholder}
            </label>
            <Input
                {...inputHtml}
                className={`form-field__input ${className}`}
                id={name}
                maskType={maskType}
                name={name}
                onBlur={blur}
                onFocus={focus}
                placeholder=" "
            />
            {!!message && <small>{message}</small>}
        </div>
    );
};

export default FloatInput;
