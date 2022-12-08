import { useEffect, useState } from "react";
import { isConstructorDeclaration } from "typescript";

export function useInput(initialState: any) {
    const [value, setValue] = useState(initialState);
    const [validate, setValidate] = useState(false);

    function handleInput(e: any) {
        setValue(e.target.value);
    }
    function setInitailValue(value: any) {
        setValue(value);
    }
    useEffect(() => {
        if (value === '') {
            setValidate(true)
        }else {
            setValidate(false)
        }
    }, [value])

    return {
        value,
        validate,
        onChange: handleInput,
        setInitailValue
    }
}