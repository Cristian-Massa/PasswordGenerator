import {create} from "zustand";

type Store ={
    passwords: string[],
    setPasswords: (newPass: string) => void,
}

export const storePassword = create<Store>((set) =>({
    passwords: [],
    setPasswords: (newPass) => set((state) => ({passwords: [newPass, ... state.passwords]}))
}))