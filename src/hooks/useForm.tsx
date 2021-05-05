import { useState } from "react";

export const useForm = <T extends Object>(thisForm: T) => {
    const [state, setState] = useState(thisForm);

    const onChange = ( value: string, field: keyof T ) => {
        setState({
            ...state,
            [field]: value
        })
    }

    return {onChange, thisForm: state, ...state}
}
