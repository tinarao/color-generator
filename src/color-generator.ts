export const generate = (): string => {
    const arr: Array<string> = ["#"];

    for (let i = 0; i < 3; ++i) {
        let code = Math.floor(Math.random() * 100).toString();
        if (code.length !== 2) {
            const flipcoin = Math.floor(Math.random() * 100);
            if (flipcoin % 2 === 0) code += "f";
            else code += "0";
        }

        arr.push(code);
    }

    return arr.join("");
}

export const Color = {
    generate
}