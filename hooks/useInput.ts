import { useState } from "react";

export function useInput(initialState: any) {
    const [value, setValue] = useState(initialState);
    function handleInput(e: any) {
        setValue(e.target.value);
    }
    function setInitailValue(value: any) {
        setValue(value);
    }
    return {
        value,
        onChange: handleInput,
        setInitailValue
    }
}