import { useState } from "react";

export const useCounter = (initialNumber : number = 0) => {
    const [value, setValue] = useState(0);

    const sum = (num: number) => {
        setValue(value + num)
    }

    return {
        value, 
        sum}
}
