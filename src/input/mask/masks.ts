export const masks = {
    cellTelephone: (value: string) => {
        const mask = value.replace(/[^0-9]/g, "");
        if (mask.length > 10) {
            return ["(", /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/];
        }
        return ["(", /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/];
    },
    cellphone: ["(", /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/],
    cep: [/\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/],
    cnpj: [/\d/, /\d/, ".", /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/],
    cpf: [/\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, "-", /\d/, /\d/],
    cpfCnpj: (value: string) => {
        const mask = value.replace(/[^0-9]/g, "");
        if (mask.length > 11) {
            return [
                /\d/,
                /\d/,
                ".",
                /\d/,
                /\d/,
                /\d/,
                ".",
                /\d/,
                /\d/,
                /\d/,
                "/",
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
            ];
        }
        return [/\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, "-", /\d/, /\d/];
    },
    creditCard: [
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        " ",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        " ",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        " ",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
    ],
    date: [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/],
    matricula: [
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
    ],
    telephone: ["(", /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/],
};

export function convertMaskToString(mask: any) {
    const maskOutput = typeof mask === "function" ? mask("") : mask;
    const length = maskOutput.length;
    let placeholder = "";
    for (let i = 0; i < length; i += 1) {
        const str = maskOutput[i];
        if (typeof str === "string") {
            placeholder += str;
        } else if (str.toString() === "/\\d/") {
            placeholder += "0";
        } else {
            placeholder += str;
        }
    }
    return placeholder;
}
