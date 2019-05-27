import React, { useState } from "react";

export const convertToNumber = (currency: string) =>
    Number.parseFloat(
        currency
            .replace(/[^0-9.-]+/, "")
            .replace(/\./g, "")
            .replace(/,/g, "."),
    );

const fromValue = (value = "") => value.replace(/(-(?!\d))|[^0-9|-]/g, "") || "";

const padding = (digits: string) => {
    const desiredLength = 3;
    const actualLength = digits.length;
    if (actualLength >= desiredLength) {
        return digits;
    }
    const amountToAdd = desiredLength - actualLength;
    return `${"0".repeat(amountToAdd)}${digits}`;
};

const removeLeadingZeros = (num: string) => num.replace(/^0+([0-9]+)/, "$1");

const addDecimals = (num: string, separator = ",") => {
    const centsStart = num.length - 2;
    const amount = removeLeadingZeros(num.substring(0, centsStart));
    const cents = num.substring(centsStart);
    return amount + separator + cents;
};

export const toCurrency = (value: string, separator = ",", prefix = "R$ ") =>
    `${prefix}${addDecimals(padding(fromValue(value)), separator)}`;

export type CurrencyInputType = React.InputHTMLAttributes<HTMLInputElement> & { prefix?: string; separator?: string };

const CurrencyInput = ({ prefix = "R$ ", separator = ",", ...props }: CurrencyInputType) => {
    const [value, setValue] = useState("");
    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        const valueAsCurrency = toCurrency(e.target.value, separator, prefix);
        setValue(valueAsCurrency);
        if (props.onChange) {
            e.persist();
            return props.onChange(e);
        }
    };
    return <input {...props} type="text" inputMode="decimal" pattern="\d*" value={value} onChange={change} />;
};

export default CurrencyInput;
