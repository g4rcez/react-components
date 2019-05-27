import React from "react";
import MaskedInput, { MaskedInputProps } from "react-text-mask";
import CurrencyInput, { CurrencyInputType } from "./CurrencyInput";
import { convertMaskToString, masks } from "./masks";
export type MaskInputProps = {
    maskType?:
        | "cpf"
        | "cellphone"
        | "cnpj"
        | "cep"
        | "telephone"
        | "date"
        | "matricula"
        | "currency"
        | "cellTelephone"
        | "cpfCnpj";
} & MaskedInputProps &
    CurrencyInputType;

export default (props: MaskInputProps) => {
    const { maskType, ...html } = props;
    if (maskType === "currency") {
        return <CurrencyInput {...html} />;
    }
    if (!!maskType) {
        const mask = masks[maskType];
        const placeholder = props.placeholder || convertMaskToString(mask);
        return <MaskedInput {...html} placeholder={placeholder} guide={true} mask={mask} />;
    }
    return <input {...html} />;
};
