type Info = {
    Length: number,
    Uppercase: boolean,
    Lowercase: boolean,
    Numbers: boolean,
    Symbols: boolean
}

export default function Generate({ Length, Uppercase, Lowercase, Numbers, Symbols }: Info) {
    let newPass: string = ''
    const abd = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const symbolsSpe = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ';', ':', "'", '"', '<', '>', ',', '.', '/', '?', '`', '~'];
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    if(!Length) return null

    if (Uppercase || Lowercase || Numbers || Symbols) {
        for (let i = 0; i < Length; i++) {
            const randomType = Math.ceil(Math.random() * 4)
            switch (randomType) {
                case 1:
                    if(Uppercase){
                        const charabd = abd[Math.floor(Math.random() * abd.length)].toUpperCase()
                        newPass = newPass + charabd
                    }else{
                        i--
                    }
                    break;
                case 2:
                    if(Numbers){
                        const charnum = numbers[Math.floor(Math.random() * numbers.length)]
                        newPass = newPass + charnum
                    }else{
                        i--
                    }
                    break;
                case 3:
                    if(Symbols){
                        const charspe = symbolsSpe[Math.floor(Math.random() * symbolsSpe.length)]
                        newPass = newPass + charspe
                    }else{
                        i--
                    }
                    break;
                case 4:
                    if(Lowercase){
                        const charabdLowerCase = abd[Math.floor(Math.random() * abd.length)]
                        newPass = newPass + charabdLowerCase

                    }else{
                        i--
                    }
                    break;
                default:
                    break;
            }

        }

    }
    if(newPass){
        return newPass
    }
    return null
}